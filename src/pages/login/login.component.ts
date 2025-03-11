import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ClassUser } from '../../service/User'
import { Router } from "@angular/router";

export @Component({
    selector: 'login-page',
    standalone: true,
    imports: [ FormsModule ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})

class LoginPageComponent {
    inputName = ''

    constructor(private router: Router){}
    
    acceptName(){
        if(this.inputName !== ''){
            new ClassUser().acceptName(this.inputName)
            this.router.navigate(['/publication'])
        }
    }
}