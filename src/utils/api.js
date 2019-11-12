import axios from 'axios';

export function getHeroes (text) {
    return axios.get(`https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${text}&ts=1&apikey=bb1e11d36ae76fb256cdff30dcb3b2fc&hash=2f7f99ad641f3cfa024af2f07d5ce0f7`);
}
