// create label and value object for Select
export const selectData = (value: string | number, label: string): ISelect => {
  return {
    value: value.toString(),
    label: label.toString(),
  };
};

export function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}