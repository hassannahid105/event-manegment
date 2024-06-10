/* eslint-disable react/prop-types */
import EventCard from "./EventCard";

const EventSpeaker = ({ conferences }) => {
  return (
    <div className="my-20 border-4 border-green-400">
      <div className="text-center mb-10">
        <h2 className="text-4xl mb-4">Services</h2>
        <p>We Provide digital Services arround the world</p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 w-10/12 mx-auto border-4">
        {conferences.map((conference) => (
          <EventCard key={conference.id} conference={conference}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default EventSpeaker;
