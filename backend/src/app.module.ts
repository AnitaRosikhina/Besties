import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductModule} from "./products/product.module";
import {SubcategoriesModule} from "./subcategories/subcategories.module";

@Module({
    imports: [
        ProductModule,
        SubcategoriesModule,
        MongooseModule.forRoot(`mongodb+srv://anita:anita2002@cluster0.liycv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
