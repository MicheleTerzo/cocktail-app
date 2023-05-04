import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {API_URL} from '../utils/enums';
import {CocktailModel} from '../models/cocktail.model';
import {plainToInstance} from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class CocktailDataService {
  http = inject(HttpClient);

  async getCocktailByName(cocktailName: string): Promise<CocktailModel> {
    const url = `${API_URL.BASE}${API_URL.SEARCH}${cocktailName}`;
    const get$ = this.http.get(url);
    const res = await firstValueFrom(get$);
    return plainToInstance(CocktailModel, res);
  }

  async getCocktailByFirstLetter(letter: string): Promise<any> {
    const url = `${API_URL.BASE}${API_URL.FIND_BY_FIRTS_LETTER}${letter}`;
    const get$ = this.http.get(url);
    return await firstValueFrom(get$);
  }

  async getTemp(): Promise<any> {
    const url = 'assets/db/drinks.json';
    const get$ = this.http.get(url);
    return await firstValueFrom(get$);
  }
}
