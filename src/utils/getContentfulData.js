import Axios from "axios";

const URL = 'https://myportofolio-api.herokuapp.com'

export const getContentfulData = async (content_type, limit, locale) => {
  try {
       const data =  (await Axios.get(`${URL}/contentful/${content_type}&${limit}&${locale || 'default'}`)).data
       return data.items
        
      } catch (error) {
        console.log(error)
      }
}

export const getAllContentFulData = async (content_type, locale) => {
  try {
    const data =  (await Axios.get(`${URL}/contentful/${content_type}&0&${locale || 'default'}`)).data
    return data.items;
    
  } catch (error) {
    console.log(error)
  }
}

export const getContentById = async (id, locale) => {
  try {
    const res =  (await Axios.get(`${URL}/getContentById/${id}&${locale || 'default'}`)).data
    return res.fields
    
    } catch (error) {
      console.log(error)
    }
  }
  
  
