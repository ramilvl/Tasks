import Slider from "../components/Slider";

const arr = ["image 1", "image 2", "image 3", "image 4", "image 5"];

function Home() {
  return (
    <>
      <Slider items={arr} />
    </>
  );
}

export default Home;
