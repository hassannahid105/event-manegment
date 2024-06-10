import Service from "./Service/Service";

const Services = () => {
  return (
    <div>
      <div className="relative grid h-[40rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="flex">
          <div className="relative p-6 px-6 py-14 md:px-12">
            {/* card */}
            <div className="flex items-center justify-center gap-8">
              <Service></Service>
              <Service></Service>
              <Service></Service>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
