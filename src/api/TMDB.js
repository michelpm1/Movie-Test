import axios from "axios";

export const fetchDiscoverList = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
}


