import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./schemas/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";

export interface IUser {
    name: string
    email: string
    password?: string
}

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findOne(email: string): Promise<IUser | undefined> {
        return this.userModel.findOne({email})
    }

    async create(userDto: CreateUserDto): Promise<IUser> {
        const newUser = new this.userModel(userDto)
        return newUser.save()
    }
}