const getFirstWord = (str: string) => {
  return str.split(",")[0];
};

const getWordsFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("words") || "");
  let firstWord = null;

  if (items) {
    firstWord = getFirstWord(items);
  }
  return firstWord;
};

export default getWordsFromLocalStorage;
