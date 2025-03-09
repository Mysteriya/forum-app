import { Routes } from '@angular/router';
import { FullPageComponent } from '../pages/fullPage/fullpage.component'
import { itemsListComponent } from '../pages/itemsList/itemslist.component';
import { LoginPageComponent } from '../pages/login/login.component'
import { ClassCreatePublication } from '../pages/createPublication/createarticle.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'create',
        component: ClassCreatePublication
    },
    {
        path: 'publication',
        component: itemsListComponent
    },
    {
        path: 'publication/:id',
        component: FullPageComponent
    },
];
