export const addTimeout = <TData, TPromise extends Promise<TData>>(
  data: TPromise,
  ms = 1000
): TPromise => {
  return new Promise<TData>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Истек таймаут ${ms}`));
    }, ms);

    data
      .then((result) => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  }) as TPromise;
};
