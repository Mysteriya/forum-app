import { Component, OnInit } from "@angular/core";
import { IItemsProprtyes } from "../../../types/typeObject";
import { RouterLink } from "@angular/router";
import { ClassIsLoading } from "../../../service/IsLoading";
import { ClassGetArticles } from "../../../service/getItems";
import { LoadingComponent } from '../../components/load/load.component'

export @Component({
  selector: 'items-list',
  standalone: true,
  imports: [RouterLink, LoadingComponent],
  templateUrl: './itemslist.component.html',
  styleUrl: './itemslist.component.scss'
})

class itemsListComponent implements OnInit {
  items?: IItemsProprtyes[] = []
  isMount = false

  async ngOnInit(){
    const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassGetArticles().getArticles(), this.isMount)

    this.items = data
    this.isMount = isMount

    console.log(this.items)
  }
}