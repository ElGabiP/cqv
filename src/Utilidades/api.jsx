import axios from "axios";

/* ruta base de la Api de juegos */
const urlJuegos = `https://api.rawg.io/api/`;

/* ruta base de la Api traductor */
const urlTraductor = `https://deep-translate1.p.rapidapi.com/language/translate/v2`;


/* 
    El metodo recibe dos parametros:
    1- La url a visitar. Ejemplo: https://api.rawg.io/api/games; games seria la url que recibiria el metodo
    2- Un objeto javascript con los parametros que reciba la url. Ejemplo { page_size:4, ordering:'created' }
    Entonces para llamar al metodo seria: juegosApi('games', { page_size:4, ordering:'created' })
*/
export const juegosApi = async (url = 'games', parametros = {}) => {
    let parametrosURL;
    if (Object.keys(parametros).length > 0) {
        Object.keys(parametros).map(valor => {
            parametrosURL = `&${valor}=${parametros[valor]}`
        });
    }
    const key = process.env.REACT_APP_RAWG_API_KEY;
    return await axios.get(`${urlJuegos}${url}?key=${key}${parametrosURL}`)
        .then(respuesta => respuesta.data)
        .then(respuesta => {
            return respuesta.results
        })
        .catch(error => {
            console.log(error);
        });
}

/* 
    El metodo recibe un string con lo que se quiere traducir
    Ejemplo: traductorApi("Hello my friend")
*/
export const traductorApi = async (textoATraducir) => {
    const data = {
        q: textoATraducir,
        source: 'en',
        target: 'es'
    }
    const headers = {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
    }
    await axios.post(urlTraductor, data, { headers })
        .then(respuesta => {
            const { translations } = respuesta.data.data;
            return translations.translatedText;
        })
        .catch(error => {
            console.log(error);
        });
}