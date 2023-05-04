import {Component, inject} from '@angular/core';
import {CocktailDataService} from './services/cocktail-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktail';
  cocktailService = inject(CocktailDataService)

  async click(){
    await this.cocktailService.getCocktail()
  }
}
