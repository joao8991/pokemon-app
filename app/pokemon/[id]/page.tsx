export default function Pokemon({ params }: { params: { id: string } }) {
  return <div>Pokemon {params.id}</div>;
}
