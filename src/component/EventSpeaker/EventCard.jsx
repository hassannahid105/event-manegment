import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EventCard = ({ conference }) => {
  console.log(conference);
  const { id, name, image, price, description } = conference;
  return (
    <div className="">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl ">
          <img src={image} alt="profile-picture" />
        </div>
        <div className="p-6 space-y-2">
          <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name.slice(0, 18)}
          </h4>
          <p className="block font-sans  antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-start">
            Price: {price}$
          </p>
          <p>{description.slice(0, 60)}</p>
          <Link to={`/description/${id}`}>
            <button
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6  align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50  w-full
            text-center
            disabled:shadow-none"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
