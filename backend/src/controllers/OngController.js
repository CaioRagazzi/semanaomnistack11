const connection = require('../database/connection');
const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId()

        connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        }).then(res => {
            return response.json({ id });
        }).catch(err => {
            console.log(err);
            return response.json({ err });
        })
    },
    index(request, response) {
        connection('ongs').select('*').then(data => {
            return response.json(data);
        }).catch(err => {
            return response.json(err);
        })
    }
}