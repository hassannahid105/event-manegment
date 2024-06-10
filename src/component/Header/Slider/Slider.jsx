const Slider = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://i.ibb.co/9HKxp0j/2.png)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Digital Conference <span>2024</span>
            </h1>
            <div className="flex gap-12 mt-10">
              <p className="mb-5">February 3rd to 7th</p>
              <p className="mb-5">Orlando, Florida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
