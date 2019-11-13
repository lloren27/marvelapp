import axios from 'axios';

export function getHeroes (text) {
    return axios.get(`https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${text}&ts=1&apikey=e2338c1da14d1d1a72d96dc8c844f5a4&hash=a3d6e605a1f8b33a662dce71bfbb27cd`);
}
