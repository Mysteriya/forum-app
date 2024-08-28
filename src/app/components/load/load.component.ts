import { Component } from "@angular/core";

export @Component({
    selector: 'load-component',
    standalone: true,
    template: `
        <div class="block-load">
            <h1>Загрузка</h1>
            <div class="load"></div>
        </div>
    `,
    styleUrl: 'load.component.scss'
})

class LoadingComponent {}