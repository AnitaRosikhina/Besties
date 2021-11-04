export class CreateProductDto {
    readonly name: string
    readonly price: number
    readonly imageUrl: string
    readonly description: string
    readonly category: string
    readonly subcategory: string
}