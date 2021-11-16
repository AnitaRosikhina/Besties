import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {Product} from "../../products/schemas/product.schema";
import * as mongoose from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({required: true, minlength: 2})
    name: string

    @Prop({required: true, minlength: 2})
    email: string

    @Prop({required: true, minlength: 6})
    password: string

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}], default: []})
    productsInBasket: Product[]
}

export const UserSchema = SchemaFactory.createForClass(User)