import axios from "axios";

const URL = 'https://myportofolio-api.herokuapp.com'

export const getDataFromYtbAPI = async () => {

    try{
      const { items } = (await axios.get(`${URL}/ytb`)).data
      return items 
    } catch(error) {
        console.error(error)
    }
}
