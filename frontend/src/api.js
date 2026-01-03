import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchTaxes = () => API.get("/taxes");
export const fetchExpenditure = () => API.get("/expenditure");
export const fetchNotes = () => API.get("/notes");
export const addNote = (note) => API.post("/notes", note);
