export const getData = (key: string) => {
  let storage;
  if (typeof window !== "undefined" && window) {
    storage = JSON.parse(window!.localStorage.getItem(key)!);
    const currentTime = new Date().getTime();
    if (currentTime < storage?.expirationTime) {
      return storage;
    }
    localStorage.removeItem(key);
  } else {
    storage = null;
  }
  return null;
};