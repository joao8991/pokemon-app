import Link from "next/link";

export default function Pokemon({ params }: { params: { id: string } }) {
  return (
    <div>
      <Link href="/">come back</Link>
      Pokemon {params.id}
    </div>
  );
}
