const providerService = require('../services/ProviderService');

class ProviderController {
    constructor(){
        
    }

    async index(req, res) {
        const { page = 1 } = req.query;
        const providers = await providerService.findAll(page);
        return res.json(providers);
    }

    async show(req, res) {
        const phone = req.params.id;
        let provider = await providerService.findProviderByPhone(phone);
        if (!provider) {
            return res.status(400).send('Prestador não cadastrado');
        }
        return res.json(provider);
    }

    async store(req, res) {
        const { phone } = req.body
        let provider = await providerService.findProviderByPhone(phone);
        if (provider) {
            return res.status(400).send('Prestador já cadastrado');
        }
        provider = await providerService.createProvider(req.body)
        return res.status(201).json(provider);
    }

    async update(req, res) {
        const phone = req.params.id;
        let provider = await providerService.findProviderByPhone(phone);
        if (!provider) {
            return res.status(400).send('Prestador não cadastrado');
        }
        provider = await providerService.findByIdAndUpdate(provider._id, req.body, { new: true });
        return res.json(provider);
    }

    async destroy(req, res) {
        const phone = req.params.id;
        let provider = await providerService.findProviderByPhone(phone)
        if (!provider) {
            return res.status(400).send('Prestador não cadastrado');
        }

        provider = await providerService.findByIdAndRemove(provider._id);
        return res.send();
    }
}

module.exports = new ProviderController()