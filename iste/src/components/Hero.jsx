import OIP from "../assets/icons/OIP.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex justify-center items-center min-h-screen gap-10 max-container px-4 sm:px-16"
    >
      <div
        className="relative flex flex-col justify-center items-center w-full mt-28">
        <h1 className="w-full flex flex-col justify-center items-center text-2xl sm:text-2xl lg:text-2xl font-montserrat font-bold mb-6">
          <span className="text-center">
            Indian Society for Technical Education - Student Chapter KEC
          </span>
          <span>KONGU ENGINEERING COLLEGE</span>
        </h1>
        <div className="flex flex-col items-center mt-10">
          <img
            src={OIP}
            alt="logo"
            className="object-contain relative z-10 mb-20"
          />
          <div className="text-center px-4 mb-20">
            <h2 className="text-2xl font-palanquin font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 max-w-lg lg:w-full">
              The Indian Society for Technical Education (ISTE) is the leading
              National Professional non-profit making Society for the Technical
              Education System in our country with the motto of Career
              Development of Teachers and Personality Development of Students
              and overall development of our Technical Education System.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
