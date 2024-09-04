import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { IItemsProprtyes } from "../../../types/typeObject";

import { LoadingComponent } from '../../components/load/load.component'
import { ClassModalComponent } from "../../components/modal/modal.component";
import { ClassIsLoading } from "../../../service/IsLoading";

import { ClassGetArticles, ClassSearchArticles } from "../../../service/getitems/getArticle";

import { categories } from "../../../service/var/categories";

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

  categories = categories
  categoryActive: string = ''

  isOpenWindow: boolean = false

  async ngOnInit(){
    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassGetArticles().getArticles())

    this.items = data
    this.isMount = isMount

  }

  async search(){
    this.isMount = false

    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassSearchArticles().search(this.searchInput, this.categoryActive))

    this.items = data
    this.isMount = isMount
  }

  acceptCategory(name: string){
    this.categoryActive = name
  }
}