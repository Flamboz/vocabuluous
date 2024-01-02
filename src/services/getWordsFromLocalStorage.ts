const getFirstWord = (str: string) => {
  return str.split(",")[0];
};

const getWordsFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem('words') || "");
  let wordArray:string[] = []

  if (items) {
    const firstWord = getFirstWord(items);
    wordArray = firstWord.split("");
  }
  return wordArray
}

export default getWordsFromLocalStorage