import { User } from '../user/user.model';
import { Url } from 'url';

export class PersonalCard {


    university: string;
    faculty: string;
    telephone: string;
    statusDescription: string;
    done: boolean;
    base64StringImage: string;
    user = new User("", "");
    imageUrl: Url

}