import { User } from '../user/user.model';

export class Proposal {

    id: number
    user: User

    constructor( id: number, user: User){
        this.user = user
        this.id = id
    }

  
}
