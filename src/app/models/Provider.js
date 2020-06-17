const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//Criando o ProviderSchema 

/**
 * @swagger
 * components:
 *  schemas:
 *      Provider:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *          phone:
 *              type: string
 *          email:
 *              type: string
 *          services:
 *              type: array
 *              items:
 *                  type: string
 * 
 *        required:
 *          - name
 *          - phone
 *          - email
 *          - services
 *          
 */
const ProviderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    services:{
        type: [String],
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

// Registrando o mongoose paginate da Aplicação
ProviderSchema.plugin(mongoosePaginate)

// Registrando o schema
mongoose.model('Provider', ProviderSchema)