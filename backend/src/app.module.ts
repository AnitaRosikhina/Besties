import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductModule} from "./products/product.module";
import {SubcategoriesModule} from "./subcategories/subcategories.module";
import {AuthModule} from "./auth/auth.module";

@Module({
    imports: [
        ProductModule,
        SubcategoriesModule,
        AuthModule,
        MongooseModule.forRoot(`mongodb+srv://anita:anita2002@cluster0.liycv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    ],
})
export class AppModule {
}
