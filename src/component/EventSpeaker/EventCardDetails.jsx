import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventCardDetails = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch("/conference.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  //   !test perpose
  const findDetail = details.find(
    (findDetail) => findDetail.id === parseFloat(params.id)
  );
  //   *
  return (
    <div className="p-20 flex items-center justify-center flex-col">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover  rounded-t-lg  h-full md:rounded-none md:rounded-s-lg"
          src={findDetail?.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {findDetail?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {findDetail?.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default EventCardDetails;
