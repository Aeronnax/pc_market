// export const addTimeout = <TData, TPromise extends Promise<TData>>(
//   data: TPromise,
//   ms = 1000
// ): Promise<TData> => {
//   return new Promise<TData>((resolve) => {
//     data.then((response) => {
//       setTimeout(() => resolve(response), ms);
//     });
//   });
// };

export const addTimeout = <TData>(
  data: Promise<TData>,
  ms = 1000
): Promise<TData> => {
  return Promise.race([
    new Promise<TData>((resolve) => setTimeout(() => resolve(data), ms)).then(
      (result) => result
    ),
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`Истек таймаут ${ms} мс`)), ms)
    ),
  ]);
};
