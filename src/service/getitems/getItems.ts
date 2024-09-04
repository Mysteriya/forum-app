import axios from 'axios'
import { ClassServiceItems } from '../ServiceItems';

export class ClassGetItems extends ClassServiceItems {
    constructor(){
        super();
    }
}

export class ClassGetComments extends ClassGetItems{
    async getComments(postID: string){
        try {
            return await axios.get(`${this.API_SERVICE}/${postID}/comments/`)
        } catch (error) {
            return []
        }
    }
}