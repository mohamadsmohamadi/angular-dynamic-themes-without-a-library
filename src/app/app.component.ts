import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'blank-sass';
  public isSwitcherShown = false;
  private themeWrapper = document.querySelector('body');
  toggleThemeSwitcher() {
    this.isSwitcherShown = !this.isSwitcherShown;
  }

  ngOnInit(): void {
      this.themeWrapper.style.setProperty('--footerColor', '#ffffff');
      this.themeWrapper.style.setProperty('--footerBackground', '#155B53');
  }

}
