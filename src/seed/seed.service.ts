import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeedService {
  private pokeApiBaseUrl = 'https://pokeapi.co/api/v2/';

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  public async populateDB() {
    await this.pokemonModel.deleteMany({});

    const data = await this.fetchPokemons();

    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'SEED executed succesfully';
  }

  private async fetchPokemons(): Promise<PokeResponse> {
    let result: any = await fetch(`${this.pokeApiBaseUrl}/pokemon?limit=650`);
    result = await result.json();

    return result;
  }
}
