import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms'

import { ClassPostPublication } from "../../service/post/postItem";
import { Router } from "@angular/router";
import { TypeListInput } from "../../types/typeObject";

type TypeUserInfo = {
    name: string
    userID: string
}

export @Component({
    selector: 'create-article',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './createarticle.component.html',
    styleUrl: './createarticle.component.scss'
})

class ClassCreatePublication {
    listInput: TypeListInput[] = []
    selectInput?: string

    userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')

    titlePublication!: string
    descriptionPublication!: string
    categoryName: string = 'nothing'

    childItem: any = {}
    img?: string;

    constructor(private router: Router){}

    async create(){
        const item = {
            userName: this.userInfo.name,
            userID: this.userInfo.userID,
            publicationID: String(Math.floor(Math.random() * 5000000)),
        
            title: this.titlePublication,
            description: this.descriptionPublication,
            text: this.listInput,

            categoryName: this.categoryName,
            category: this.childItem,
        
            date: Date()
        }

        await new ClassPostPublication().postPublication(item)

        this.router.navigate([`/publication/${item.publicationID}`])
    }

    chooseCategory(name:string){
        this.categoryName = name
    }

    implementChildData(item: any){
        this.childItem = item
    }

    addDataListInput(type: any, text: string){
        this.listInput.push(
            {
                type: type,
                data: text,
                key: this.listInput.length
            }
        )
    }

    writeText(text: any, index: number){
        this.listInput[index].data = text.target.value
    }
    
    async getFile(input: any, index: number){
        const file = input.target.files[0]

    if(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)

            reader.onload = async() => {
                this.listInput[index].data = reader.result as string | undefined
                this.listInput[index].type = 'image-true'
            }
        }
    } 

    removeText(index: number){
        this.listInput = this.listInput.filter(elem =>  elem.key !== index )
    }
}