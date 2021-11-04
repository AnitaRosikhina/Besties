import {Module} from "@nestjs/common";
import {SubcategoriesService} from "./subcategories.service";
import {SubcategoriesController} from "./subcategories.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Subcategory, SubcategorySchema} from "./schemas/subcategory.schema";

@Module({
    providers: [SubcategoriesService],
    controllers: [SubcategoriesController],
    imports: [
        MongooseModule.forFeature([
            {name: Subcategory.name, schema: SubcategorySchema}
        ])
    ]
})

export class SubcategoriesModule {}