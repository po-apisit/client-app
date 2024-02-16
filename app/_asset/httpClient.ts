import axios, { AxiosInstance } from "axios";

const httpClient:AxiosInstance = axios.create({
    baseURL: process.env.URL_SERVER
})

export default httpClient;