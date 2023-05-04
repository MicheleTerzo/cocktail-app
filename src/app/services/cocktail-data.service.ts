import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailDataService {
  http = inject(HttpClient)

  constructor() {
  }

  async getCocktail(): Promise<void> {
    const response = this.http.get('www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    const res = await firstValueFrom(response)
    console.log(res);
  }
}
