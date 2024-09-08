import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TypeComments, TypeUserInfo } from "../../types/typeObject";

export @Component({
    selector: 'comment-component',
    standalone: true,
    templateUrl: './comment.component.html',
    styleUrl: './comment.component.scss',
    imports: [NgStyle]
})

class ClassCommentsComponent {
    @Input() comment: TypeComments = {}
    @Input() userInfo: TypeUserInfo = {
        name: "",
        userID: ""
    }
}