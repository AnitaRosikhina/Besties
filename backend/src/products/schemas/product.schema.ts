import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop({required: true, minlength: 2})
    name: string

    @Prop({required: true})
    price: number

    @Prop({required: true})
    imageUrl: string

    @Prop({required: true, minlength: 5})
    description: string

    @Prop({required: true})
    category: string
    
    // TODO: relate with another
    @Prop({required: true})
    subcategory: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)