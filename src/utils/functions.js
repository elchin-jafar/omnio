export const fetcher = async (data, timeout = 2200) =>
  new Promise((res) => {
    setTimeout(() => res(data), timeout);
  });
