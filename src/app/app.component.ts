import {Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly translateService = inject(TranslateService);

  constructor() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('it');
  }
}
