import {Component, inject} from '@angular/core';
import {CocktailDataService} from '../../services/cocktail-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cocktailService = inject(CocktailDataService);
}
