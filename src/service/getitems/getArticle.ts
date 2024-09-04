import axios from "axios"
import { ClassGetItems } from "./getItems"

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
            return await axios.get(`${this.API_SERVICE}`)
        } catch (error) {
            return []
        }
    }
}

export class ClassSearchArticles extends ClassGetItems{
    async search(text: string, categoryActive: string){
        const category = categoryActive !== '' ? `&category=${categoryActive}` : ''
        
        const url = `https://65b499eb41db5efd2866a9d7.mockapi.io/forums?search=${text}${category}`

        try{
            return await axios.get(url)

        }   catch(error){
            return []
        }
    }
}