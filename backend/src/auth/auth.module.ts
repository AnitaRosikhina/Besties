import {Module} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {UsersService} from "./users.service";
import {LocalStrategy} from "./local.strategy";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/user.schema";
import {AuthController} from "./auth.controller";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";

@Module({
    providers: [UsersService, AuthService, LocalStrategy],
    controllers: [AuthController],
    imports: [
        MongooseModule.forFeature([
            {name: User.name, schema: UserSchema}
        ]),
        PassportModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1d' }
        })
    ]
})

export class AuthModule {
}