import { Component, Input } from "@angular/core";

import { RouterLink } from "@angular/router";

import { categoriesName } from "../../service/var/categories";

export @Component({
    selector: 'formitem-component',
    standalone: true,
    templateUrl: './formitem.component.html',
    styleUrl: './formitem.component.scss',
    imports: [RouterLink]
})

class FormItemComponent {
    @Input() items: any;

    findElem(name: string){
        return categoriesName.find(elem => elem.category === name)?.name
    }
}