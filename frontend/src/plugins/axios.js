import axios from 'axios'

const axiosIns = axios.create({
// You can add your headers here
// ================================
baseURL: 'http://localhost:8000/',
// timeout: 1000,
headers: {'Content-Type': 'application/json'}
})

export default axiosIns
