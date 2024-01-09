require('dotenv').config();
const axios = require("axios");

const { DOG_API, API_KEY } = process.env;

class ApiService {
    constructor() {
        this.DOG_API = DOG_API;
        this.API_KEY = API_KEY;
    }

    getBreedById = async (idBreed) => {
        try {
            console.log(`${this.DOG_API}/${idBreed}?${API_KEY}`);

            const response = await axios(`${this.DOG_API}/${idBreed}?${API_KEY}`);
            const breedInfo = response.data;
            return breedInfo;
        } catch (error) {
            console.error(error);
        }
    }

    getAllBreeds = async () => {
        try {
            const response = await axios(`${this.DOG_API}?${this.API_KEY}`);
            const allBreeds = response.data;
            return allBreeds;

        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = ApiService;