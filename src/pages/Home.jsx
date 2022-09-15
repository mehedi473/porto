import React from "react";
import Button from "../components/Button";
const Home = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-inherit bg-center md:home-bg">
      <div className="container w-full h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl font-extrabold">We Are Digital Experts</h1>
        <h2 className="text-3xl font-semibold">Based in Los Angeles / CA</h2>
        <p className="font-noto">
          Lorem ipsum dolor sit amet, consectetur adipis.
        </p>
        <Button name="Get Started" link="#" />
      </div>
    </section>
  );
};

export default Home;
