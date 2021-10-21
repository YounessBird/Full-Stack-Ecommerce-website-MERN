import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyM2MzOGVjMmRlYjI5OGVmMjI1YTkiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzQyODg3NDEsImV4cCI6MTYzNDU0Nzk0MX0.4E-S-dFYYZFAyeuG2G12sAOr8DjykptHnR16Wkpah_w";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
