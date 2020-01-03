import { MessageCode } from './message-code'


export class ResponseMessage {
    public getMessageCode(): MessageCode {
        return this.messageCode;
    }
    setMessageCode(value) {
        this.messageCode = value;
    }
    public getMessage(){
        return this.message;
    }
    setMessage(value) {
        this.message = value;
    }
    constructor(private message: string,
                private messageCode: MessageCode){
    }


}
