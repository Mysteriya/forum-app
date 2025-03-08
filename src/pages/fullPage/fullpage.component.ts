import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { Router, RouterLink } from "@angular/router";
import { NgStyle } from "@angular/common";

import { IItemsProprtyes, TypeComments, TypeUserInfo } from "../../types/typeObject";

import { ClassIsLoading } from "../../service/IsLoading";
import { ClassPostComment } from "../../service/post/postItem";
import { ClassGetComments } from "../../service/get/getItems";
import { ClassGetPublication } from "../../service/get/getItem";

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
    
    id!: string

    constructor(private router: Router){
        this.postID = router.url.split('/')[2]
    }

    async ngOnInit(){

        const getData = async () => {
            const post: any = await new ClassGetPublication().getPublication(this.postID)
            this.id =  post.data[0].pubID
            const comments: any = await new ClassGetComments().getComments(this.postID, post.data[0].pubID)

            return {post, comments}
        }
        const {post, comments, isMount} = await new ClassIsLoading().isLoading(
            await getData()
        )

        this.item = post.data[0]
        this.comments = comments.data
        this.isMount = isMount
    }

    async postComment(){
        new ClassPostComment().postComment(
            {
                userName: this.userInfo.name,
                text: this.inputText,
                userID: this.userInfo.userID,
                publicationID: this.postID
            },

            this.id
        )



        this.inputText = ''
    }
}