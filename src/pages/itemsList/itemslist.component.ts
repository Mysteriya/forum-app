import { Component, OnInit } from "@angular/core";

import { IItemsProprtyes, TypeUserInfo } from "../../types/typeObject";

import { ClassIsLoading } from "../../service/IsLoading";
import { ClassGetPublications } from "../../service/get/getItems";

import { FormItemComponent } from "../../components/formitem/formitem.component";
import { LoadingComponent } from '../../components/load/load.component'
import { ClassHeaderComponent } from "../../components/header/header.component";

export @Component({
  selector: 'items-list',
  standalone: true,

  imports: [LoadingComponent, FormItemComponent, ClassHeaderComponent],

  templateUrl: './itemslist.component.html',
  styleUrl: './itemslist.component.scss'
})

class itemsListComponent implements OnInit {
  items?: IItemsProprtyes[] | string = []
  isMount = false

  userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')

  async ngOnInit(){
    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassGetPublications().getPublications())

    this.items = data === '[]' ? '[]' : data

    console.log(this.items)
    this.isMount = isMount
  }

  setItems(elem: {items: IItemsProprtyes[], isMount: boolean}){
    this.items = elem.items
    this.isMount = elem.isMount
  }

  setIsMount(isMount: boolean){
    this.isMount = isMount
  }
}