import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pottery-fe';
  page_styles = ['Light','Dark'];
  current_style = this.page_styles[1];
  opened = false;

  getTiles() {
    console.log('get tiles here')
  }

  // For light/dark style toggle
  togglePageStyle(): void {
    console.log('Page style was" ', this.current_style)
    this.page_styles = [this.page_styles[1],this.page_styles[0]]
    this.current_style = this.page_styles[1];
    console.log('Page style is now" ', this.current_style)
    document.body.classList.toggle('dark-theme');
  }


}
