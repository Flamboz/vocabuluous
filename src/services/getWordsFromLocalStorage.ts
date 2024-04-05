const getWordsFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("words") || "");

  return items.split(",");
};

export default getWordsFromLocalStorage;
