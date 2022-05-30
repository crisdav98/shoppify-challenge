import axios from "axios";
import { baseURL } from "../constants/constants";

export const axiosClient = axios.create({
    baseURL: baseURL,
})