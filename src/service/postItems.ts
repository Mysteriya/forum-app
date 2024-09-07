import { TypePostArticles, TypePostComment } from "../types/typeObject";
import { ClassServiceItems } from "./ServiceItems";

export class ClassPostItems extends ClassServiceItems {
    constructor(){
        super();
    }
}

export class ClassPostComment extends ClassPostItems{
    async postComment(item: TypePostComment){
        return await fetch(`${this.API_SERVICE}/${item.publicationID}/comments/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: item.name,
                text: item.text,

                userID: item.userID,
                commentID: Math.floor(Math.random() * 50000),
                articleID: item.publicationID,

                date: Date()
            })
        })
    }
}

export class ClassPostArticle extends ClassPostItems{
    async postArticle(item: TypePostArticles){
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