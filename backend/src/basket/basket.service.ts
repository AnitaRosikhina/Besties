import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {BasketProduct, BasketProductDocument} from "./schemas/basket.schema";
import {CreateBasketProductDto} from "./dto/create-basket-product.dto";

@Injectable()
export class BasketService {
    constructor(@InjectModel(BasketProduct.name) private basketProductModel: Model<BasketProductDocument>) {}

    async getByUserId(userId): Promise<BasketProduct[]> {
        return this.basketProductModel.find({userId}).exec()
    }

    async create(basketProductDto: CreateBasketProductDto): Promise<BasketProduct> {
        const existedBasketProduct = await this.basketProductModel.findById(basketProductDto._id)
        if (existedBasketProduct?.userId === basketProductDto.userId) {
            return this.basketProductModel.findByIdAndUpdate(basketProductDto._id, {
                ...basketProductDto,
                amount: basketProductDto.amount + existedBasketProduct.amount
            })
        } else {
            const newBasketProduct = new this.basketProductModel(basketProductDto)
            return newBasketProduct.save()
        }
    }

    async remove(id: string): Promise<BasketProduct> {
        return this.basketProductModel.findByIdAndRemove(id)
    }
}