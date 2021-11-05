import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Subcategory, SubcategoryDocument} from "./schemas/subcategory.schema";
import {Model} from "mongoose";
import {CreateSubcategoryDto} from "./dto/create-subcategory.dto";
import {UpdateSubcategoryDto} from "./dto/update-subcategory.dto";

@Injectable()
export class SubcategoriesService {
    constructor(@InjectModel(Subcategory.name) private subcategoryModel: Model<SubcategoryDocument>) {
    }

    async getAll(): Promise<Subcategory[]> {
        return this.subcategoryModel.find().exec()
    }

    async getByCategory(category: string): Promise<Subcategory[]> {
        return this.subcategoryModel.find({category}).exec()
    }

    async create(subcategoryDto: CreateSubcategoryDto): Promise<Subcategory> {
        const newSubcategory = new this.subcategoryModel(subcategoryDto)
        return newSubcategory.save()
    }

    async remove(id: string): Promise<Subcategory> {
        console.log('id remove async', id);
        return this.subcategoryModel.findByIdAndRemove(id)
    }

    async update(id: string, subcategoryDto: UpdateSubcategoryDto): Promise<Subcategory> {
        return this.subcategoryModel.findByIdAndUpdate(id, subcategoryDto)
    }
}