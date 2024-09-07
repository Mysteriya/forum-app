import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { IItemsProprtyes, TypeUserInfo, TypeVote } from "../../types/typeObject";

import { LoadingComponent } from '../../components/load/load.component'
import { ClassModalComponent } from "../../components/modal/modal.component";
import { ClassIsLoading } from "../../service/IsLoading";

import { ClassGetArticles, ClassSearchTextArticles, ClassSearchCategoryArticles } from "../../service/getitems/getArticle";

import { categoriesName } from "../../service/var/categories";

export @Component({
  selector: 'items-list',
  standalone: true,
  imports: [FormsModule, RouterLink, LoadingComponent, ClassModalComponent],
  templateUrl: './itemslist.component.html',
  styleUrl: './itemslist.component.scss'
})

class itemsListComponent implements OnInit {
  items?: IItemsProprtyes[] = []
  isMount = false

  searchInput: string = ''

  categoriesName = categoriesName
  categoryActive: string = ''

  isOpenWindow: boolean = false

  userInfo: TypeUserInfo = JSON.parse(window.localStorage.getItem('forumUser') || '{}')

  async ngOnInit(){
    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassGetArticles().getArticles())

    this.items = data
    this.isMount = isMount

  }

  async search(){
    this.isMount = false

    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassSearchTextArticles().search(this.searchInput))

    this.items = data
    this.isMount = isMount
  }

  async acceptCategory(name: string){
    this.isMount = false
    this.categoryActive = name

    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassSearchCategoryArticles().category(this.categoryActive))
    
    this.items = data
    this.isMount = isMount
  }

  findElem(name: string){
    return categoriesName.find(elem => elem.category === name)?.name
  }

  vote(totalVotes: number, item: TypeVote){
    console.log(totalVotes, item)
    console.log((Number(item.countVotes) * 100) / (Number(totalVotes)))
  }
}