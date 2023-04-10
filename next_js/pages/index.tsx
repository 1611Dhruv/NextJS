import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>This is the test App</h1>
      <Image
        src="public/spaceBg.jpg"
        alt="Image Not Found"
        width={728}
        height={410}
      />
    </div>
  );
}
