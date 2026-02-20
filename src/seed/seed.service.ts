import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private pokeApiBaseUrl = 'https://pokeapi.co/api/v2/';

  public async populateDB() {
    const data = await this.fetchPokemons();

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      return {
        name,
        no,
      };
    });

    return data.results;
  }

  private async fetchPokemons(): Promise<PokeResponse> {
    let result: any = await fetch(`${this.pokeApiBaseUrl}/pokemon?limit=10`);
    result = await result.json();

    return result;
  }
}
