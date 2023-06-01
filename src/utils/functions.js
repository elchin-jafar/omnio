export const fetcher = async (data) =>
  new Promise((res) => {
    setTimeout(() => res(data), 2200);
  });
