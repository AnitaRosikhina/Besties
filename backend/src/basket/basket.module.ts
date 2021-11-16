import {Module} from "@nestjs/common";
import {BasketService} from "./basket.service";
import {BasketController} from "./basket.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {BasketProduct, BasketProductSchema} from "./schemas/basket.schema";

@Module({
    providers: [BasketService],
    controllers: [BasketController],
    imports: [
        MongooseModule.forFeature([
            {name: BasketProduct.name, schema: BasketProductSchema}
        ])
    ]
})

export class BasketModule {
}