import HomeCard from "../../components/home/HomeCard";
import { HOME_CONTENT as data } from "../../constants";


function Home() {
  return (
    <div class="mt-8 flex flex-row flex-wrap bg-stone-800 text-white">
      {data.map((item) => (
        <HomeCard
          subtitle={item.subtitle}
          content={item.content}
          position={item.position}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default Home;
