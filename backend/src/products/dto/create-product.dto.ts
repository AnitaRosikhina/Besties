import {Subcategory} from "../../subcategories/schemas/subcategory.schema";

export class CreateProductDto {
    readonly name: string
    readonly price: number
    readonly imageUrl: string
    readonly description: string
    readonly category: string
    readonly subcategory: Subcategory
}