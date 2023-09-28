import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': 'b75b1e97b5msh3f4ff0f7b2b59f4p10368bjsn59edd74e771b',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const getPlacesData = async() => {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default getPlacesData;
