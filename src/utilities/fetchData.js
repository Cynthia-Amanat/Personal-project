const fetchData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw new Error("HTTP Error");
  }
};

export default fetchData;
