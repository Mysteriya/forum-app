import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from '@angular/forms'

interface IItem {
    totalVoters: number

    voters: []
    items: TypeVote[]
}

type TypeVote = {
    name: string;
    countVotes: string;
    id: string;
}

export @Component({
    selector: 'createvote-component',
    standalone: true,
    imports: [ FormsModule ],
    templateUrl: './createvote.component.html',
    styleUrl: './createvote.component.scss',
})

class ClassCreateVoteComponent {
    @Output() addItemEvent = new EventEmitter<IItem>();

    inputVoteText: string = ''
    voteActive: boolean = false
    changeVoteActiveID: string = '0'
    votes:IItem = {
        totalVoters: 0,
        voters: [],
        items: []
    }

    constructor(){}

    createVote(){
        this.votes.items.push({name: `${this.votes.items.length}`, countVotes: '0', id: `${this.votes.items.length}`})
    
        this.emitItem()
    }

    changeVoteActive(id: string, name: string){
        this.inputVoteText = name
        this.voteActive = !this.voteActive
        this.changeVoteActiveID = id

        this.emitItem()
    }

    removeVote(indexVote: string){
        const newVotes = this.votes.items.filter((_, index) => this.votes.items[index].id !== indexVote)
        this.votes.items = newVotes

        this.emitItem()
    }

    acceptChangeVoteName(changeName: string, id: string){
        this.votes.items[Number(id)].name = changeName
        this.voteActive = false

        this.emitItem()
    }

    emitItem(){
        this.addItemEvent.emit(this.votes)
    }
}