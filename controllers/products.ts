import {v4} from 'https://deno.land/std/uuid/mod.ts'
import {Product} from '../types.ts'

let products: Product[] = [
  {
    id: '1',
    name: 'prod 1',
    description: 'desc 1',
    price: 66.77
  },
  {
    id: '2',
    name: 'prod 2',
    description: 'desc 2',
    price: 22.33
  }
];

// @desc  Get single product
// @route GET /api/v1/products/:id
const getProduct = ({params, response}: {params:{id:string}, response:any}) => {
  const prod: Product | undefined = products.find(p => p.id === params.id)
	if(prod) {
		response.status = 200
		response.body = {
			success: true,
			data: prod
		}
	} else {
		response.status = 404
		response.bady = {
			success: false,
			msg: 'No product found'
		}
	}
}

// @desc  Get all products
// @route GET /api/v1/products
const getProducts = ({response}:{response:any}) => {
  response.body = {
    success: true,
    data: products
  }
}

// @desc  Add product
// @route GET /api/v1/products
const addProduct = async ({request, response}:{request:any, response:any}) => {
  const body = await request.body()
	if(!request.hasBody) {
		response.status = 400
		response.body = {
			success: false,
			msg: 'No data'
		}
	} else {
		const product: Product = body.value
		product.id = v4.generate()
		products.push(product)
		response.status = 201
		response.body = {
			success: true,
			data: product
		}
	}
}


// @desc  Update product
// @route GET /api/v1/products/:id
const updateProduct = async ({params, request, response}:
  {params:{id:string}, request:any, response:any}) => {
  const prod: Product | undefined = products.find(p => p.id === params.id)
	if(prod) {
		const body = await request.body()
    const updateData: {name?:string; description?:string; price?:number} = body.value
    products = products.map(p => p.id === params.id ? {...p, ...updateData} : p)
    response.status = 200
    response.body = {
      success: true,
      data: products
    }
	} else {
		response.status = 404
		response.bady = {
			success: false,
			msg: 'No product found'
		}
	}
}

// @desc  Get all products
// @route GET /api/v1/products
const deleteProduct = ({params, response}:{params:{id:string}, response:any}) => {
  products = products.filter(p => p.id !== params.id)
	response.body = {
		success: true,
		msg: 'Product removed'
	}
}

export {getProducts, getProduct, addProduct, updateProduct, deleteProduct}
