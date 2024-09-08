import { Component, EventEmitter, Output } from "@angular/core";
import { ClassSearchTextPublications, ClassSearchCategoryPublications } from "../../service/getitems/getPublication";
import { ClassIsLoading } from "../../service/IsLoading";
import { categoriesName } from "../../service/var/categories";

import { FormsModule } from "@angular/forms";
import { ClassModalComponent } from "../modal/modal.component";
import { IItemsProprtyes } from "../../types/typeObject";

export @Component({
    selector: 'header-component',
    standalone: true,

    imports: [FormsModule, ClassModalComponent],

    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})

class ClassHeaderComponent {
    @Output() searchItem = new EventEmitter<any>();
    @Output() filterItem = new EventEmitter<any>();

    @Output() setMount = new EventEmitter<any>();

    items: IItemsProprtyes[] = []
    isMount: boolean = false

    categoriesName = categoriesName
    categoryActive: string = ''

    searchInput: string = ''
  
    isOpenWindow: boolean = false
    
    async search(){
        this.isMount = false

        this.setMount.emit(this.isMount)
    
        const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassSearchTextPublications().search(this.searchInput))
    
        this.items = data
        this.isMount = isMount

        this.searchItem.emit({items: this.items, isMount: isMount})
    }
    
    async acceptCategory(name: string){
        this.isMount = false
        this.categoryActive = name

        this.setMount.emit(this.isMount)
    
        const {data, isMount} = await new ClassIsLoading().isLoading(await new ClassSearchCategoryPublications().category(this.categoryActive))
        
        this.items = data
        this.isMount = isMount

        this.filterItem.emit({items: this.items, isMount: isMount})
    }
}