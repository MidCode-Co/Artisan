type Listing = {
  id: string;
  title: string;
  description: string;
  country: Country;
  location: string;
};

type Country = "England" | "Turkey" | "France";

const listings: Listing[] = [
  {
    id: "1",
    title: "Foundry",
    description: "Juicy banger foundry reserve my guys handmade and all that",
    country: "England",
    location: "Leicester",
  },
  {
    id: "2",
    title: "Not foundry",
    description: "Not foundry but it from turkey!",
    country: "Turkey",
    location: "Leicester",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="w-full h-20 p-4">
        <a href="/" className="text-5xl">
          Artisan
        </a>
        <h2 className="text-2xl text-gray-500">Find handmade goods</h2>
      </nav>
      <div className="w-full p-4 mb-2">
        {listings.map((listing) => (
          <div className="bg-gray-200 p-2 w-fit" id={listing.id}>
            <p className="text-xl">{listing.title}</p>
            <p className="text-gray-500">{listing.description}</p>
            <p className="text-lg">{listing.country}</p>
            <p>{listing.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
