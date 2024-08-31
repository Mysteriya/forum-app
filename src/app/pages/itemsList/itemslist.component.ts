import { Component, OnInit } from "@angular/core";
import { IItemsProprtyes } from "../../../types/typeObject";
import { RouterLink } from "@angular/router";
import { ClassIsLoading } from "../../../service/IsLoading";
import { ClassGetArticles, ClassSearchArticles } from "../../../service/getItems";
import { LoadingComponent } from '../../components/load/load.component'
import { FormsModule } from "@angular/forms";

export @Component({
  selector: 'items-list',
  standalone: true,
  imports: [FormsModule, RouterLink, LoadingComponent],
  templateUrl: './itemslist.component.html',
  styleUrl: './itemslist.component.scss'
})

class itemsListComponent implements OnInit {
  items?: IItemsProprtyes[] = []
  isMount = false

  searchInput: string = ''

  async ngOnInit(){
    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassGetArticles().getArticles())

    this.items = data
    this.isMount = isMount

  }

  async search(){
    this.isMount = false

    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassSearchArticles().search(this.searchInput))

    this.items = data
    this.isMount = isMount
  }
}