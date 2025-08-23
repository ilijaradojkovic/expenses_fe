import api from "../config/axiosConfig";
import { MONTH_INCOME_API_URL } from "../constants/API";



import axios from "axios";

export async function getMonthlyIncome(year, token) {
  try {
    const response = await api.get(`${MONTH_INCOME_API_URL}?year=${year}`);

    return response.data;
  } catch (error) {
    console.error("Neuspešan poziv API-ja:", error);
    throw error;
  }
}