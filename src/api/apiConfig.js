import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:9196"
})

export const getHeader = () => {
    const token = localStorage.getItem("token")
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
}