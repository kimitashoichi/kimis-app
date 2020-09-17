export const dateToString = (date: Date): string => {
  const result = date.toLocaleDateString();
  return result;
}

export const characterLimit = (text: string) => {
  if(text.length >= 30) {
    const result = text.slice(0, 30);
    return result;
  }
  return text;
}