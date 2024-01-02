const setWordsToLocalStorage = (words: string) => {
  localStorage.setItem("words", JSON.stringify(words));
}

export default setWordsToLocalStorage