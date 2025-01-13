export default async function search({
  searchParams,
}: {
  searchParams: {
    query: string
  }
}) {
  const { query } = await searchParams
  return <div>Search page for {query}</div>
}
