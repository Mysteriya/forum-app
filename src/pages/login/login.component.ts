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

class LoginPageComponent implements OnInit {
    inputName = ''

    constructor(private router: Router){}

    public ngOnInit(): void {
        const data = window.localStorage.getItem("forumUser")

        if(data !== null){
            this.router.navigate(['/publication'])
        }
    }
    
    acceptName(){
        if(this.inputName !== ''){
            new ClassUser().acceptName(this.inputName)
            this.router.navigate(['/publication'])
        }
    }
}