import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms'

import { ClassPostArticle } from "../../../service/postItems";

type TypeUserInfo = {
    name: string
    userID: string
}

export @Component({
    selector: 'create-article',
    standalone: true,
    imports: [ FormsModule ],
    templateUrl: './createarticle.component.html',
    styleUrl: './createarticle.component.scss'
})

class ClassCreateArticle {
    userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')

    titleArticle!: string
    descriptionArticle!: string
    textArticle!: string

    create(){
        new ClassPostArticle().postArticle({
            userName: this.userInfo.name,
            userID: this.userInfo.userID,
        
            title: this.titleArticle,
            description: this.descriptionArticle,
            text: this.textArticle,
        
            date: Date()
        })
    }
}