import axios from "axios";
import { config } from "../config";

export const appAxios = axios.create({ baseURL: config.server.baseURL });
