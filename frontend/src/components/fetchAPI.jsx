//const API_URL = "http://localhost:3000/api/images";
//const API_URL = "http://193.43.134.219:3000/api/images";
const API_URL = "http://raonak.ca/api/images";
//const API_URL = "https://193.43.134.219:3000/api/images";
//const API_URL = "https://raonak.ca/api/images";

const fetchAPI = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const { data } = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
    alert("Internal Server Error, Please try again !!");
  }
};

export default fetchAPI;
