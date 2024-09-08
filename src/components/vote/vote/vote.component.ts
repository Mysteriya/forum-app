import { Component, Input } from "@angular/core";
import { TypeVote } from "../../../types/typeObject";

export @Component({
    selector: 'vote-component',
    standalone: true,
    imports: [ ],
    templateUrl: './vote.component.html',
    styleUrl: './vote.component.scss',
})

class ClassVoteComponent {
    @Input() item: any

    constructor(){}

    colculateWidth(totalVotes: number, item: TypeVote){
        return `${(Number(item.countVotes) * 100) / (Number(totalVotes))}%`
    }
}