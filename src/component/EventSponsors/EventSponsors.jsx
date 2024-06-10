import SponsorsCard from "./SponsorsCard";

const EventSponsors = () => {
  return (
    <div className="my-20  ">
      <div className="text-center mb-10">
        <h2 className="text-4xl mb-4">Event Speaker</h2>
        <p>We invites digital experts arround the world</p>
      </div>
      <div className="flex items-center justify-center gap-6 w-10/12 mx-auto">
        <SponsorsCard></SponsorsCard>
      </div>
    </div>
  );
};

export default EventSponsors;
