import { Routes } from '@angular/router';
import { FullPageComponent } from '../pages/fullPage/fullpage.component'
import { itemsListComponent } from '../pages/itemsList/itemslist.component';
import { LoginPageComponent } from '../pages/login/login.component'
import { ClassCreateArticle } from '../pages/createArticle/createarticle.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'profile',
        component: ClassCreateArticle
    },
    {
        path: 'articles',
        component: itemsListComponent
    },
    {
        path: 'articles/:id',
        component: FullPageComponent
    },
];
