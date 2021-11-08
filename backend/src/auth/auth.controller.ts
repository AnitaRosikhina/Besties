import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {IUser, UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
                private usersService: UsersService) {
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return this.usersService.create(createUserDto)
    }

    @Post('login')
    async login(@Body() createUserDto: CreateUserDto): Promise<{access_token: string}> {
        return this.authService.login(createUserDto)
    }
}