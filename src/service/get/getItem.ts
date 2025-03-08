import axios from "axios"
import { IItemsProprtyes } from "../../types/typeObject";
import { ClassServiceItems } from "../ServiceItems";

export class ClassGetItem extends ClassServiceItems {
    constructor() {
        super(); 
    }
}

export class ClassGetPublication extends ClassGetItem {
    async getPublication(postID: string){
        try {
            const url = new URL(`${this.API_SERVICE}/`);
            url.searchParams.append('publicationID', `${postID}`);

            return await axios.get(`${url}`) as IItemsProprtyes[]
        } catch (error) {
            return []
        }
    }
}