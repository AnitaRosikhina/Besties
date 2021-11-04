import {Subcategory} from "../../subcategories/schemas/subcategory.schema";

export class UpdateProductDto {
    readonly name: string
    readonly price: number
    readonly imageUrl: string
    readonly description: string
    readonly category: string
    readonly subcategory: Subcategory
}