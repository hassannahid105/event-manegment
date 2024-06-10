import { useLoaderData } from "react-router-dom";
import EventSpeaker from "../../component/EventSpeaker/EventSpeaker";
import EventSponsors from "../../component/EventSponsors/EventSponsors";
import Slider from "../../component/Header/Slider/Slider";
import Services from "../../component/Services/Services";

const Home = () => {
  const conferences = useLoaderData([]);
  return (
    <div>
      <Slider></Slider>
      {/* eventspeacker as services */}
      <EventSpeaker conferences={conferences}></EventSpeaker>
      <Services></Services>
      <EventSponsors></EventSponsors>
    </div>
  );
};

export default Home;
