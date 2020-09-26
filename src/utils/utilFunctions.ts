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

// 現在のURL末尾の記事IDなどを取得
export const getUrlId = (): string => {
  const currentPath = window.location.pathname;
  const result = currentPath.split("/");
  if(result.length >= 3) {
    return result[2];
  } else {
    return result[result.length - 1];
  }
};