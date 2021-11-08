import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {AuthService} from "./auth.service";
import {IUser} from "./users.service";
import {ExtractJwt} from "passport-jwt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secret',
        });
    }

    async validate(login: string, password: string): Promise<IUser> {
        const user = await this.authService.validateUser(login, password)

        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}