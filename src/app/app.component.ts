import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TokenStorageService } from './services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pottery-fe';
  page_styles = ['Light','Dark'];
  current_style = this.page_styles[1];
  opened = false;
  loggedIn: boolean;

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.loggedIn = Boolean(window.sessionStorage.getItem('auth-user'));
  }
  // For light/dark style toggle
  togglePageStyle(): void {
    console.log('Page style was" ', this.current_style)
    this.page_styles = [this.page_styles[1],this.page_styles[0]]
    this.current_style = this.page_styles[1];
    console.log('Page style is now" ', this.current_style)
    console.log(document.body)
    document.body.classList.toggle('dark-theme');
  }
  signOut() {
    this.tokenService.signOut()
    window.location.reload()
  }
}
