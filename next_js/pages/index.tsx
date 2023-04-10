import Image from "next/image";
import bg from "../public/spaceBg.jpg";

export default function Home() {
  return (
    <div>
      <h1>This is the test App</h1>
      <Image src={bg} alt="Image Not Found" width={728} height={410} />
    </div>
  );
}
