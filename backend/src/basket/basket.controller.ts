import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {BasketService} from "./basket.service";
import {CreateBasketProductDto} from "./dto/create-basket-product.dto";
import {BasketProduct} from "./schemas/basket.schema";

@Controller('basket')
export class BasketController {

    constructor(private basketService: BasketService) {}

    @Get(':userId')
    getAllByUserId(
        @Param('userId') userId: string,
    ): Promise<BasketProduct[]> {
        return this.basketService.getAllByUserId(userId)
    }

    @Post()
    create(@Body() createBasketProductDto: CreateBasketProductDto): Promise<BasketProduct> {
        return this.basketService.create(createBasketProductDto)
    }

    @Delete('deleteOne/:userId/:id')
    remove(
        @Param('userId') userId: string,
        @Param('id') id: string
    ) {
        return this.basketService.remove(userId, id)
    }

    @Delete('checkout/:userId')
    removeAllByUserId(@Param('userId') userId: string) {
        return this.basketService.removeAllByUserId(userId)
    }
}