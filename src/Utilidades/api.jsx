import axios from "axios";

/* ruta base de la Api de juegos */
const urlJuegos = `https://api.rawg.io/api/`;

/* ruta base de la Api traductor */
//const urlTraductor = `https://deep-translate1.p.rapidapi.com/language/translate/v2`;
const urlTraductor = `https://translate.googleapis.com/translate_a/single`;


/* 
    El metodo recibe dos parametros:
    1- La url a visitar. Ejemplo: https://api.rawg.io/api/games; games seria la url que recibiria el metodo
    2- Un objeto javascript con los parametros que reciba la url. Ejemplo { page_size:4, ordering:'created' }
    Entonces para llamar al metodo seria: juegosApi('games', { page_size:4, ordering:'created' })
*/
export const juegosApi = async (url = 'games', parametros = {}) => {
    let parametrosURL = '';
    if (Object.keys(parametros).length > 0) {
        Object.keys(parametros).map(valor => {
            parametrosURL = `&${valor}=${parametros[valor]}`
        });
    }
    const key = process.env.REACT_APP_RAWG_API_KEY;
    return await axios.get(`${urlJuegos}${url}?key=${key}${parametrosURL}`)
        .then(respuesta => respuesta.data)
        .then(respuesta => {
            if (respuesta.results) {
                return respuesta.results
            }
            return respuesta;
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
    const sourceLang = 'en';
    const targetLang = 'es';
    const url = `${urlTraductor}?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(textoATraducir)}`;
    let traduccion = '';
    return await axios.get(url).then(respuesta => {
        respuesta.data[0].map(res => {
            if (res[0].length > 0) {
                traduccion += res[0];
            }
        });
        return traduccion;
    }).catch(error => {
        console.log(error);
    });
}