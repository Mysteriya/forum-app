import axios from 'axios'
import { ClassServiceItems } from './ServiceItems';

export class ClassGetItems extends ClassServiceItems {
    constructor(){
        super();
    }
}

export class ClassGetArticle extends ClassGetItems {
    async getArticle(postID: string){
        try {
            return await axios.get(`${this.API_SERVICE}/${postID}`) 
        } catch (error) {
            return []
        }
    }
}

export class ClassGetArticles extends ClassGetItems{
    async getArticles(){
        try {
            return await axios.get(this.API_SERVICE)
        } catch (error) {
            return []
        }
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