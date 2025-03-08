import axios from "axios"

import { ClassServiceItems } from '../ServiceItems';

export class ClassGetItems extends ClassServiceItems {
    constructor() {
        super(); 
    }
}

export class ClassGetComments extends ClassGetItems {
    async getComments(postID: string, id: string) {
        try {
            const url = new URL(`${this.API_SERVICE}/${id}/comments`);
            url.searchParams.append('publicationID', `${postID}`);

            return await axios.get(`${url}`)
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