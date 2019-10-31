import axios from 'axios'
const api = process.env.REACT_APP_RECORDS_API_URL || "https://5db85da7177b350014ac796d.mockapi.io"

export const getALl = () => 
    axios.get(`${api}/api/v1/records`)

export const create = (body) =>
    axios.post(`${api}/api/v1/records`, body)

export const update = (id, body) => 
    axios.put(`${api}/api/v1/records/${id}`, body)

export const remove = (id) =>
    axios.delete(`${api}/api/v1/records/${id}`)