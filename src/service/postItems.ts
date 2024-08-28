import { TypePostArticles, TypePostComment } from "../types/typeObject";
import { ClassServiceItems } from "./ServiceItems";

export class ClassPostItems extends ClassServiceItems {
    constructor(){
        super();
    }
}

export class ClassPostComment extends ClassPostItems{
    async postComment(item: TypePostComment){
        return await fetch(`${this.API_SERVICE}/${item.articleID}/comments/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: item.name,
                text: item.text,

                userID: item.userID,
                commentID: Math.floor(Math.random() * 50000),
                articleID: item.articleID,

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
                articleID: Math.floor(Math.random() * 50000),
            
                title: item.title,
                description: item.description,
                text: item.text,
            
                date: Date()
            })
            
        })
    }
}