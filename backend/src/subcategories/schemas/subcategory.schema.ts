import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type SubcategoryDocument = Subcategory & Document

@Schema()
export class Subcategory {
    @Prop({required: true})
    category: string

    @Prop({required: true})
    name: string
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory)