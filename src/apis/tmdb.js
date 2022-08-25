import axios from 'axios'

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    // api_key: "fcedb118a82853890434143eb4798d73",
    // api_key: process.env.REACT_APP_TMDB_KEY,
    api_key : '6b7294545126ffcdd25d1349bab56738'
  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default tmdbInstance;