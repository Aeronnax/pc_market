export const isExist = <T>(data: T | undefined | null): data is T => {
  return data !== undefined && data !== null;
};
