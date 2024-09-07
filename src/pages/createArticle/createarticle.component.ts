import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms'

import { ClassPostArticle } from "../../service/postItems";

import { categoriesName } from "../../service/var/categories";
import { Router } from "@angular/router";
import { ClassCreateVoteComponent } from "../../components/vote/createVote/createvote.component";

type TypeUserInfo = {
    name: string
    userID: string
}

export @Component({
    selector: 'create-article',
    standalone: true,
    imports: [FormsModule, ClassCreateVoteComponent],
    templateUrl: './createarticle.component.html',
    styleUrl: './createarticle.component.scss'
})

class ClassCreateArticle {
    categoriesName = categoriesName

    userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')

    titleArticle!: string
    descriptionArticle!: string
    textArticle!: string
    categoryName: string = 'nothing'

    childItem: any = {}

    constructor(private router: Router){}

    create(){
        const item = {
            userName: this.userInfo.name,
            userID: this.userInfo.userID,
            publicationID: String(Math.floor(Math.random() * 50000)),
        
            title: this.titleArticle,
            description: this.descriptionArticle,
            text: this.textArticle,

            categoryName: this.categoryName,
            category: this.childItem,
        
            date: Date()
        }

        new ClassPostArticle().postArticle(item)

        this.router.navigate(['/publication/', item.publicationID])
    }

    chooseCategory(name:string){
        this.categoryName = name
    }

    implementChildData(item: any){
        this.childItem = item
    }
}