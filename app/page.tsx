import Link from "next/link";
import { getPokemons } from "./services/pokemons";
import { Pokemon } from "./types/Pokemon";

export default async function Home() {
  const pokemons: Pokemon[] = await getPokemons();

  return (
    <div>
      <h1 className="text-lg">pokemons</h1>main page
      {pokemons.map(({ id, name }) => (
        <Link key={id} href={`pokemon/${id}`}>
          <div>
            {id} name: {name}
          </div>
        </Link>
      ))}
    </div>
  );
}
