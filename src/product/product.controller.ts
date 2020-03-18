import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateProductDTO } from './dto/product.dto';

import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {

    }

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        
        const product = await this.productService.createProduct(createProductDTO);

        return res.status(HttpStatus.OK).json({
            message: 'O Producto foi adicionado com sucesso',
            product
        });
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products 
        })
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.getProduct(productID);
        if(!product) throw new NotFoundException('Este Produto Nao Existe');
        return res.status(HttpStatus.OK).json(product)
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        if(!productDeleted) throw new NotFoundException('Este Produto Nao Existe');
        return res.status(HttpStatus.OK).json({
            message: 'Produto Excluido Com sucesso',
            productDeleted
        })
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
        if(!updatedProduct) throw new NotFoundException('Este Produto Nao Existe');
        return res.status(HttpStatus.OK).json({
            message: 'Produto actualizado Com sucesso',
            updatedProduct
        })
    }
}
