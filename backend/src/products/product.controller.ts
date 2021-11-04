import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import {ProductService} from "./product.service";
import {Product} from "./schemas/product.schema";
import {CreateProductDto} from "./dto/create-product.dto";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {
    }

    @Get()
    getAll(): Promise<Product[]> {
        return this.productService.getAll()
    }

    @Get()
    getOne(@Param('id') id: string): Promise<Product>{
        return this.productService.getById(id)
    }

    @Get()
    getByCategoryAndSubCategory(
        @Param('category') category: string,
        @Param('subcategory') subcategory: string
    ): Promise<Product[]> {
        return this.productService.getByCategoryAndSubCategory(category, subcategory)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto)
    }

    @Delete()
    remove(@Param('id') id: string) {
        return this.productService.remove(id)
    }

    @Put('id')
    update(@Body() updateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productService.update(id, updateProductDto)
    }
}