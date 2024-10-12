import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";


type Pokemon = {
	name: string;
	url: string;
};

type PokemonResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: Pokemon[];
};


@Injectable()
export class PokemonsService {
		constructor(private readonly httpService: HttpService) {}

		create(createPokemonDto: CreatePokemonDto) {
			return "This action adds a new pokemon";
		}

		async findAll(): Promise<PokemonResponse> {
			const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
			const response = await this.httpService.get<PokemonResponse>(url).toPromise();
			return response.data;
		}

		async findOne(id: string): Promise<Pokemon> {
			const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
			const response = await this.httpService.get<Pokemon>(url).toPromise();
			return response.data;
		}

		update(id: number, updatePokemonDto: UpdatePokemonDto) {
			return `This action updates a #${id} pokemon`;
		}

		remove(id: number) {
			return `This action removes a #${id} pokemon`;
		}
	}
