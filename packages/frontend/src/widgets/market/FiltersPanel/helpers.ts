import { isValid, parseISO } from 'date-fns';
import { Dispatch, SetStateAction, useEffect } from 'react';
import {
  useSearchParams as useNextSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';
import { isExist } from 'src/shared/helpers/isExist';

// #region Зависимый код
const FILTER_QUERY_PARAM = 'filter' as const;

export const serialize = <T>(value: T): string => JSON.stringify(value);

export const deserialize = (str: string): unknown => {
  const parsedJson: unknown = JSON.parse(str, (_, value) => {
    const isNumber = !Number.isNaN(Number(value));

    if (typeof value === 'string' && !isNumber) {
      const parsedDate = parseISO(value);

      if (isValid(parsedDate)) {
        return parsedDate;
      }
    }

    return value;
  });

  return parsedJson;
};

type UseSearchParamsReturn = [
  URLSearchParams,
  Dispatch<SetStateAction<URLSearchParams>>,
];
const useSearchParams = (): UseSearchParamsReturn => {
  const params = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setParams: UseSearchParamsReturn[1] = (value) => {
    const newParams: URLSearchParams =
      typeof value === 'function' ? value(params) : value;

    if (newParams.size === 0) {
      router.push(pathname);
      return;
    }

    router.push(pathname + '?' + newParams.toString());
  };

  return [params, setParams];
};
// #endregion

interface FilterOnUrlArgs<T extends object> {
  value: T;
  writeStateToUrl?: boolean;
  onChange: (newValue: T) => void;
}
export const useFilterOnUrl = <T extends object>({
  value,
  onChange,
  writeStateToUrl = true,
}: FilterOnUrlArgs<T>): void => {
  const [params, setParams] = useSearchParams();

  const clearFiltersUrlParams = () => {
    const serializedCurrentState = params.get(FILTER_QUERY_PARAM);
    if (!isExist(serializedCurrentState)) {
      return;
    }

    const newParams = new URLSearchParams(params);
    newParams.delete(FILTER_QUERY_PARAM);
    setParams(newParams);
  };

  const writeFiltersToUrl = <F extends object>(filters: F) => {
    if (Object.keys(filters).length <= 0) {
      clearFiltersUrlParams();
      return;
    }

    const serializedNewState = serialize(filters);
    const serializedCurrentState = params.get(FILTER_QUERY_PARAM) ?? '';
    if (serializedCurrentState.trim() === serializedNewState.trim()) {
      return;
    }

    const newParams = new URLSearchParams();
    newParams.set(FILTER_QUERY_PARAM, serializedNewState);
    setParams(newParams);
  };

  const applyFiltersFromUrl = (urlParams = params) => {
    const filters = urlParams.get(FILTER_QUERY_PARAM);

    if (!filters) {
      return;
    }

    const serializedCurrentState = serialize(value);
    if (serializedCurrentState === filters) {
      return;
    }

    // т.к. в url можно написать все что угодно, то полагаемся на валидность ссылки
    const parsedFilters: unknown = deserialize(filters);
    onChange(parsedFilters as T);
  };

  useEffect(() => {
    // Применяем фильтры из URL только если включен флаг
    if (!writeStateToUrl) {
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    applyFiltersFromUrl(urlParams);
  }, []);

  // Обновляем URL params при смене фильтров,
  // если включен флаг, иначе очищаем filters
  useEffect(() => {
    if (!writeStateToUrl) {
      clearFiltersUrlParams(); // чистим URL, если отключили writeStateToUrl
      return;
    }
    writeFiltersToUrl(value);
  }, [value, writeStateToUrl]);
};
