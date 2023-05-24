import Image from "next/image";

export default async function MovieDetail({ params }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`
  );
  const deets = await data.json();
  return (
    <div>
      <div>
        <h2 className="text-2xl">{deets.title}</h2>
        <h2 className="text-lg">{deets.release_date}</h2>
        <h2>Runtime: {deets.runtime} minutes</h2>
        <h2
          className={
            (deets.status.startsWith("R") ? "bg-green-600 " : "bg-red-600 ") +
            "inline-block my-2 py-2 px-4 rounded-md text-sm"
          }
        >
          {deets.status}
        </h2>
        <Image
          className="my-12"
          src={imagePath + deets.backdrop_path}
          width={1000}
          height={1000}
          alt=""
        />
      </div>
    </div>
  );
}
