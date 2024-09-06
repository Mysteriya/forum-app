import { Component, Input } from "@angular/core";

export @Component({
    selector: 'modal-window',
    standalone: true,
    imports: [ ],
    template: `
        @if(isOpen === true){
            <div class="background" (click)="isOpen = false">
                <div class="window" (click)="$event.stopPropagation()">
                    <ng-content></ng-content>
                </div>
            </div>
        }
    `,
    styleUrl: 'modal.component.scss'
})

class ClassModalComponent {
    @Input() isOpen = false
}