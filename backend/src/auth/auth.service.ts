import {Injectable} from "@nestjs/common";
import {IUser, UsersService} from "./users.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService) {}

    async validateUser(login: string, password: string): Promise<IUser | undefined> {
        const user = await this.usersService.findOne(login)

        if (user && user.password === password) {
            const {password, ...secureUser} = user
            return secureUser
        }
        return undefined
    }

    async login(user: IUser): Promise<{access_token: string}> {
        const payload = { email: user.email, password: user.password };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
 }