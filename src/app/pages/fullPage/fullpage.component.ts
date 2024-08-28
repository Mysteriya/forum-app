import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { Router, RouterLink } from "@angular/router";
import { NgStyle } from "@angular/common";

import { IItemsProprtyes } from "../../../types/typeObject";
import { ClassIsLoading } from "../../../service/IsLoading";
import { ClassPostComment } from "../../../service/postItems";
import { ClassGetComments, ClassGetArticle } from "../../../service/getItems";
import { LoadingComponent } from '../../components/load/load.component'

type TypeUserInfo = {
    name: string
    userID: string
}

export @Component({
    selector: 'full-page',
    standalone: true,
    imports: [FormsModule, RouterLink, NgStyle, LoadingComponent],
    templateUrl: './fullpage.component.html',
    styleUrl: './fullpage.component.scss'
})

class FullPageComponent {
    item: IItemsProprtyes = {}
    inputText: string = ''
    isMount = false
    postID!: string

    userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')

    constructor(private router: Router){
        this.postID = router.url[router.url.length - 1]
    }

    async ngOnInit(){
        const {post, comments, isMount} = await new ClassIsLoading().isLoading(
            {
                comments: await new ClassGetComments().getComments(this.postID),
                post: await new ClassGetArticle().getArticle(this.postID)
            },

            this.isMount
        )

        this.item = { ...post.data, comments: comments.data }
        this.isMount = isMount
    }

    async postComment(){
        new ClassPostComment().postComment({
            name: this.userInfo.name,
            text: this.inputText,
            userID: this.userInfo.userID,
            articleID: this.postID
        })

        this.inputText = ''
    }
}