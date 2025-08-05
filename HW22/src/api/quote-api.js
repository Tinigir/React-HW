import axios from "axios";

export const getQuoteApi = async () => {
  try {
    const { data } = await axios.get(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://zenquotes.io/api/random")
    );
	
		// allorigins возвращает всё как строку
    const parsed = JSON.parse(data.contents); 

    const { q: quote, a: author } = parsed[0];
    return { quote, author };
  } catch (error) {
    throw new Error("Failed to fetch quote");
  }
};
