import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { Router, RouterLink } from "@angular/router";
import { NgStyle } from "@angular/common";

import { IItemsProprtyes, TypeComments, TypeUserInfo } from "../../types/typeObject";

import { ClassIsLoading } from "../../service/IsLoading";
import { ClassPostComment } from "../../service/postItems";
import { ClassGetComments } from "../../service/getitems/getItems";
import { ClassGetPublication } from "../../service/getitems/getPublication";

import { ClassCommentsComponent } from "../../components/comment/comment.component";
import { LoadingComponent } from '../../components/load/load.component'

export @Component({
    selector: 'full-page',
    standalone: true,
    imports: [FormsModule, RouterLink, NgStyle, LoadingComponent, ClassCommentsComponent],
    templateUrl: './fullpage.component.html',
    styleUrl: './fullpage.component.scss'
})

class FullPageComponent {
    item: IItemsProprtyes = {}
    comments:TypeComments[] = []

    isMount = false
    
    userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')
    inputText: string = ''
    postID!: string

    constructor(private router: Router){
        this.postID = router.url[router.url.length - 1]
    }

    async ngOnInit(){
        const {post, comments, isMount} = await new ClassIsLoading().isLoading(
            {
                comments: await new ClassGetComments().getComments(this.postID),
                post: await new ClassGetPublication().getPublication(this.postID)
            }
        )

        this.item = {...post.data}
        this.comments = comments.data
        this.isMount = isMount

        console.log(comments)
    }

    async postComment(){
        new ClassPostComment().postComment({
            userName: this.userInfo.name,
            text: this.inputText,
            userID: this.userInfo.userID,
            publicationID: this.postID
        })

        this.inputText = ''
    }
}