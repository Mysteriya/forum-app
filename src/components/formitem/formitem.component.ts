import { Component, Input } from "@angular/core";
import { LoadingComponent } from "../load/load.component";
import { ClassVoteComponent } from "../vote/vote/vote.component";

import { RouterLink } from "@angular/router";

import { categoriesName } from "../../service/var/categories";

export @Component({
    selector: 'formitem-component',
    standalone: true,
    templateUrl: './formitem.component.html',
    styleUrl: './formitem.component.scss',
    imports: [LoadingComponent, ClassVoteComponent, RouterLink]
})

class FormItemComponent {
    @Input() items: any;

    findElem(name: string){
        return categoriesName.find(elem => elem.category === name)?.name
    }
}