export const addTimeout = <TData, TPromise extends Promise<TData>>(
  data: TPromise,
  ms = 1000
): Promise<TData> => {
  return new Promise<TData>((resolve) => {
    data.then((response) => {
      setTimeout(() => resolve(response), ms);
    });
  });
};
