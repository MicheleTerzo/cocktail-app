import {Component, inject, OnInit} from '@angular/core';
import {CocktailDataService} from '../../services/cocktail-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cocktailService = inject(CocktailDataService);
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
  dataDaParsare!: Date;

  async click() {
  }

  async getTypes(): Promise<void> {
    const property: string = 'strGlass';
    const res = await this.cocktailService.getTemp();
    let data = res
      .filter((drink: any) => drink[property] !== null)
      .map((drink: any) => drink[property]);
    data = [...new Set(data)];
    // data = this.getString(data);
    console.log(data);
  }

  private getString(data: string[]): string[] {
    let mainStrArr: string[] = [];
    data.forEach(str => {
      let tmpArr = str.split(',');
      tmpArr.forEach(v => {
        mainStrArr.push(v);
      });
    });
    return [...new Set(mainStrArr)];
  }

  ngOnInit(): void {
    this.dataDaParsare = new Date();
  }
}
