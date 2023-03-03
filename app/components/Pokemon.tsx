import Link from "next/link";
import Image from "next/image";

export default function PokemonComponent({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  return (
    <Link key={id} href={`pokemon/${name}`}>
      <Image
        src={"https://picsum.photos/seed/picsum/200/300"}
        alt={name}
        width={200}
        height={200}
      />
      <div>{name}</div>
    </Link>
  );
}
