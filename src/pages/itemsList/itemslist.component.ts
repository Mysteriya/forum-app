import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

import { IItemsProprtyes, TypeUserInfo } from "../../types/typeObject";

import { ClassIsLoading } from "../../service/IsLoading";
import { ClassGetPublications } from "../../service/getitems/getPublication";

import { ClassVoteComponent } from "../../components/vote/vote/vote.component";
import { FormItemComponent } from "../../components/formitem/formitem.component";
import { LoadingComponent } from '../../components/load/load.component'
import { ClassModalComponent } from "../../components/modal/modal.component";
import { ClassHeaderComponent } from "../../components/header/header.component";

export @Component({
  selector: 'items-list',
  standalone: true,

  imports: [RouterLink, LoadingComponent, ClassModalComponent, ClassVoteComponent, FormItemComponent, ClassHeaderComponent],

  templateUrl: './itemslist.component.html',
  styleUrl: './itemslist.component.scss'
})

class itemsListComponent implements OnInit {
  items?: IItemsProprtyes[] = []
  isMount = false

  userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')

  async ngOnInit(){
    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassGetPublications().getPublications())

    this.items = data
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