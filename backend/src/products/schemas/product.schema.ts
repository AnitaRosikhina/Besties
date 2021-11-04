import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import * as mongoose from "mongoose";
import {Subcategory} from "../../subcategories/schemas/subcategory.schema";

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

    @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory'})
    subcategory: Subcategory
}

export const ProductSchema = SchemaFactory.createForClass(Product)