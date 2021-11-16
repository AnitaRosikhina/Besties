import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type BasketProductDocument = BasketProduct & Document

@Schema()
export class BasketProduct {
    @Prop({required: true, minlength: 2})
    name: string

    @Prop({required: true})
    price: string

    @Prop({required: true})
    imageUrl: string

    @Prop({required: true, minlength: 5})
    description: string

    @Prop({required: true})
    category: string

    @Prop({required: true})
    subcategory: string

    @Prop({required: true})
    userId: string

    @Prop({required: true})
    amount: number
}

export const BasketProductSchema = SchemaFactory.createForClass(BasketProduct)