const mongoose = require('mongoose')
const Provider = mongoose.model('Provider');

class ProviderService {
    constructor(){
        
    }
    async findOne(query) {
        return await Provider.findOne(query)
    }

    async find(query, page) {
        return await Provider.paginate(query, { page, limit:10 })
    }

    async findAll(page) {
        return await Provider.paginate({}, { page, limit:10 })
    }
    
    async createProvider(provider){
        return await Provider.create(provider)
    }
    
    async findByIdAndRemove(id){
        return await Provider.findByIdAndRemove(id);
    }

    async findByIdAndUpdate(id, provider){
        return await Provider.findByIdAndUpdate(id, provider, { new: true })
    }

    async findProviderByPhone(phone) {
        return await Provider.findOne({phone: phone})
    }
}

module.exports = new ProviderService()