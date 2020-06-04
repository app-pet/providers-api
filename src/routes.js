const routes = require('express').Router()
const ProviderController = require('./app/controllers/ProviderController')

/**
 * @swagger
 * path:
 *  /providers/:
 *    get:
 *      tags:
 *          - Providers
 *      summary: Lista de Prestadores de Serviços
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Provider'
 *               
 */
routes.get('/providers', ProviderController.index)

/**
 * @swagger
 * path:
 *  /providers/{id}:
 *    get:
 *      tags:
 *          - Providers
 *      summary: Prestador por Id (telefone)
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Prestador
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Provider'
 */
routes.get('/providers/:id',ProviderController.show);

/**
 * @swagger
 * path:
 *  /providers/:
 *    post:
 *      tags:
 *          - Providers
 *      summary: Adiciona um Prestador
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Provider'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Provider'
 *       
 *        "500":
 *          description: Erro        
 */
routes.post('/providers', ProviderController.store);

/**
 * @swagger
 * path:
 *  /providers/{id}:
 *    put:
 *      tags:
 *          - Providers
 * 
 *      summary: Altera um Prestador
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Prestador
 *            required: true
 *            schema:
 *              type: string
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Provider'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Provider'
 *       
 *        "500":
 *          description: Erro        
 */
routes.put('/providers/:id', ProviderController.update);

/**
 * @swagger
 * path:
 *  /providers/{id}:
 *    delete:
 *      tags:
 *          - Providers
 * 
 *      summary: Deleta um Prestador
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Prestador
 *            required: true
 *            schema:
 *              type: string
 *
 *      responses:
 *        "200":
 *          description: Ok
  *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Provider'
 *       
 *        "500":
 *          description: Erro        
 */
routes.delete('/providers/:id', ProviderController.destroy);

module.exports = routes