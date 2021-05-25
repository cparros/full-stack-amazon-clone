import axios from 'axios'

const instance = axios.create({
  baseURL: '...' //API URl for (cloud function)
})

export default instance