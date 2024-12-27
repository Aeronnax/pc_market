import { useState, useEffect } from 'react';

export const useDebounce = <TValue, TResult>(
  value: TValue,
  delay: number,
  transform: (value: TValue) => TResult
): TResult => {
  const [debouncedValue, setDebouncedValue] = useState<TResult>(() =>
    transform(value)
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(transform(value));
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
};
