import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  title = 'who-ui';

  formData = {
    name: '',
    age: '',
    gender: '',
    profession: ''
  };

  submitted = false;
showNext: any;
  constructor(private router: Router) {}
  
  onSubmit() {
    this.submitted = true;
    
    
  }
  showNextForm() {
    // Your logic to show the next form or content goes here
    this.showNext = true;
    this.router.navigate(['/Questions']); }
  
}
