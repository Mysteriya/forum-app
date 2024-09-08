import axios from "axios"
import { ClassGetItems } from "./getItems"

export class ClassGetPublication extends ClassGetItems {
    async getPublication(postID: string){
        try {
            return await axios.get(`${this.API_SERVICE}/${postID}`) 
        } catch (error) {
            return []
        }
    }
}

export class ClassGetPublications extends ClassGetItems{
    async getPublications(){
        try {
            return await axios.get(`${this.API_SERVICE}`)
        } catch (error) {
            return []
        }
    }
}

export class ClassSearchTextPublications extends ClassGetItems{
    async search(text: string){    
        const url = `https://65b499eb41db5efd2866a9d7.mockapi.io/forums?search=${text}`

        try{
            return await axios.get(url)

        }   catch(error){
            return []
        }
    }
}
export class ClassSearchCategoryPublications extends ClassGetItems{
    async category(categoryActive: string){
        const category = categoryActive !== '' ? `&categoryName=${categoryActive}` : ''
        const url = `https://65b499eb41db5efd2866a9d7.mockapi.io/forums?${category}`

        try{
            return await axios.get(url)

        }   catch(error){
            return []
        }
    }
}