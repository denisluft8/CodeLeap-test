import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/',
  headers: {
    
    'Content-Type': 'application/json'
  }
})

export default api