const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://www.4devs.com.br';

const getAllBancos = async () => {
    const { data } = await axios.get(baseUrl + '/consulta_numero_banco');
    const $ = cheerio.load(data);

    const bancos = [];

    $('#area_resposta > table tr').each((i, elem) => {
        if (i !== 0) {
            const tds = $(elem).find('td');
            const codigo = $(tds[0]).text();
            const nome = $(tds[1]).text();

            bancos.push({ codigo, nome });
        }
    });

    return bancos;
};

module.exports = {
    getAllBancos
};