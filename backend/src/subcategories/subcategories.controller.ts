import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {SubcategoriesService} from "./subcategories.service";
import {Subcategory} from "./schemas/subcategory.schema";
import {CreateSubcategoryDto} from "./dto/create-subcategory.dto";

@Controller('subcategory')
export class SubcategoriesController {

    constructor(private subcategoryService: SubcategoriesService) {
    }

    @Get()
    getAll(): Promise<Subcategory[]> {
        return this.subcategoryService.getAll()
    }

    @Get()
    getByCategory(category: string): Promise<Subcategory[]> {
        return this.subcategoryService.getByCategory(category)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createSubcategoryDto: CreateSubcategoryDto): Promise<Subcategory> {
        return this.subcategoryService.create(createSubcategoryDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.subcategoryService.remove(id)
    }

    @Put('id')
    update(@Body() updateSubcategoryDto, @Param('id') id: string): Promise<Subcategory> {
        return this.subcategoryService.update(id, updateSubcategoryDto)
    }
}
