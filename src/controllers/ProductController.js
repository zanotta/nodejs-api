const mongoose = require('mongoose');

const Product  = mongoose.model('Product');

module.exports = {
	async index(req, res){

		const { page = 1 } = req.query;//Removendo get PAGE da url

		//Primeiro parametro do paginate seriam os filtros
		const products = await Product.paginate({}, {page: page, limit: 10});

		return res.json(products);
	},
	async show(req, res){
		const product = await Product.findById( req.params.id );

		return res.json(product);
	},
	async store(req, res){
		const product = await Product.create(req.body);

		return res.json(product);
	},
	async update(req, res){
		//New = true, retorna o objeto apenas após atualização
		const product = await Product.findByIdAndUpdate( req.params.id, req.body, { new: true });

		return res.json(product);
	},
	async destroy(req, res){
		await Product.findByIdAndRemove( req.params.id );

		return res.send();//Retorna resposta de sucesso, sem conteúdo
	}
}