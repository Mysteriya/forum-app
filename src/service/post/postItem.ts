import { TypePostPublication, TypePostComment } from "../../types/typeObject";
import { ClassServiceItems } from "../ServiceItems";

export class ClassPostItem extends ClassServiceItems {
    constructor(){
        super();
    }
}

export class ClassPostComment extends ClassPostItem {
    async postComment(item: TypePostComment, id: string){
        return await fetch(`${this.API_SERVICE}/${id}/comments/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userName: item.userName,
                text: item.text,

                userID: item.userID,
                commentID: Math.floor(Math.random() * 50000000),
                publicationID: item.publicationID,

                date: Date()
            })
        })
    }
}

export class ClassPostPublication extends ClassPostItem {
    async postPublication(item: TypePostPublication){
        return await fetch(this.API_SERVICE, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userName: item.userName,
                userID: item.userID,
                publicationID: item.publicationID,
            
                title: item.title,
                description: item.description,
                text: item.text,

                categoryName: item.categoryName,
                category: item.category,

                date: Date()
            })
            
        })
    }
}

export class ClassPostFile extends ClassPostItem {
    async postFile(item: any){
        const file = item.target.files[0]

        if(file){
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onload = async () => {
                return await fetch(this.API_SERVICE, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        file: reader.result
                    })
                    
                })
            }
        }
    }
}