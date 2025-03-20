import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: '',
  styles: '' 
})

export class startPageComponent {
  constructor(private router: Router){}
  
  public ngOnInit(): void {
    const data = window.localStorage.getItem("forumUser")

    console.log(data)

    if(data !== null){
        this.router.navigate(['/publication'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }
}