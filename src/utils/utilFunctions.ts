export const dateToString = (date: Date): string => {
  const result = date.toLocaleDateString();
  return result;
}