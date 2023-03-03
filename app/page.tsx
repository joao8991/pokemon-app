import PokemonComponent from "./components/Pokemon";
import { fetchPokemons } from "./graphql/pokemons";
import { Pokemon, PokemonResponse } from "./types/Pokemon";

export default async function Home() {
  const pokemons: Pokemon[] = await fetchPokemons().then(
    (responseJson: PokemonResponse) => responseJson.data.pokemon_v2_pokemon
  );

  return (
    <main>
      <h1>pokemons</h1>main page
      <div>
        {pokemons.map(({ id, name }) => (
          <PokemonComponent key={id} id={id} name={name} />
        ))}
      </div>
    </main>
  );
}
