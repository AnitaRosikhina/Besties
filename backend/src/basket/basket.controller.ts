import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {BasketService} from "./basket.service";
import {CreateBasketProductDto} from "./dto/create-basket-product.dto";
import {BasketProduct} from "./schemas/basket.schema";

@Controller('basket')
export class BasketController {

    constructor(private basketService: BasketService) {}

    @Get(':userId')
    getByUserId(
        @Param('userId') userId: string,
    ): Promise<BasketProduct[]> {
        return this.basketService.getByUserId(userId)
    }

    @Post()
    create(@Body() createBasketProductDto: CreateBasketProductDto): Promise<BasketProduct> {
        return this.basketService.create(createBasketProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<BasketProduct> {
        return this.basketService.remove(id)
    }
}