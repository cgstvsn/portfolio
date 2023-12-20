import React from "react";
import ImageCard from "../photography/_components/ImageCard";

import augsburg1 from "../../public/design/augsburg1.jpg";
import augsburg2 from "../../public/design/augsburg2.png";
import augsburg5 from "../../public/design/augsburg5.jpg";
import augsburg6 from "../../public/design/augsburg6.png";
import augsburg7 from "../../public/design/augsburg7.jpg";
import augsburg9 from "../../public/design/augsburg9.png";
import cakecup1 from "../../public/design/cakecup1.jpg";
import cakecup2 from "../../public/design/cakecup2.jpg";
import cakecup3 from "../../public/design/cakecup3.jpg";
import cakecup4 from "../../public/design/cakecup4.jpg";
import rutgers1 from "../../public/design/rutgers1.jpg";
import rutgers2 from "../../public/design/rutgers2.png";
import rutgers3 from "../../public/design/rutgers3.png";
import rutgers4 from "../../public/design/rutgers4.png";
import rutgers5 from "../../public/design/rutgers5.png";
import visana1 from "../../public/design/visana1.jpg";
import visana2 from "../../public/design/visana2.png";
import visana3 from "../../public/design/visana3.png";
import visana4 from "../../public/design/visana4.png";
import visana5 from "../../public/design/visana5.png";
import woosh1 from "../../public/design/woosh1.jpg";
import woosh2 from "../../public/design/woosh2.jpg";
import woosh3 from "../../public/design/woosh3.jpg";
import cumulous1 from "../../public/design/cumulous1.jpg";
import cumulous2 from "../../public/design/cumulous2.jpg";
import cumulous3 from "../../public/design/cumulous3.jpg";

const page = () => {
  return (
    <div className='max-w-7xl mx-auto px-8'>
      <div className='flex flex-col gap-4 my-8 items-center'>
        {/* Rutgers */}
        <h1 className='text-center w-full font-bold text-4xl mt-36'>
          Rutgers University
        </h1>
        <p className='text-center text-zinc-600 max-w-2xl mb-8'>
          I worked as an Athletics Creative Services intern at Rutgers
          University while attending school there and had opportunities to work
          on a variety of projects, as well as photograph a variety of sports
          events.
        </p>
        {/* row 3 */}
        <div className='flex flex-col md:flex-row gap-4 justify-center w-full'>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={rutgers2} priority />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={rutgers4} priority />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={rutgers3} priority />
          </div>
        </div>
        {/* full image */}
        <div className='w-full aspect-[2.54/1] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={rutgers5} large priority />
        </div>
        {/* full image */}
        <div className='w-full aspect-video rounded-lg overflow-hidden'>
          <ImageCard imgSrc={rutgers1} large priority />
        </div>

        {/* Visana Health */}
        <h1 className='text-center w-full font-bold text-4xl mt-12'>
          Visana Health
        </h1>
        <p className='text-center text-zinc-600 max-w-2xl mb-8'>
          I worked with Visana Health, a startup, to develop their initial
          branding and logo.
        </p>
        {/* full image */}
        <div className='w-full aspect-[3.3/1] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={visana1} large />
        </div>
        {/* row 3 */}
        <div className='flex flex-col md:flex-row gap-4 justify-center w-full'>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={visana2} />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={visana3} />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={visana4} />
          </div>
        </div>
        {/* full image */}
        <div className='w-full aspect-[6/1] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={visana5} large />
        </div>

        {/* Augsburg, Germany */}
        <h1 className='text-center w-full font-bold text-4xl mt-12'>
          Augsburg, Germany
        </h1>
        <p className='text-center text-zinc-600 max-w-2xl mb-8'>
          I created this branding system for tourism in Augsburg, Germany as a
          project for my design class at Rutgers University.
          <br />
          <br />
          The logo design is meant to represent the canals that flow through the
          geometric layout of the city, and also represent the industrial and
          progressive history in the city. The color of the system was chosen
          based on the color of many buildings in the city.
        </p>
        {/* full image */}
        <div className='w-full aspect-[4/3] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={augsburg1} large />
        </div>
        {/* row 3 */}
        <div className='flex flex-col md:flex-row gap-4 justify-center w-full'>
          <div className='w-full aspect-[6/4] rounded-lg overflow-hidden'>
            <ImageCard imgSrc={augsburg5} />
          </div>
          <div className='w-full aspect-[6/4] rounded-lg overflow-hidden'>
            <ImageCard imgSrc={augsburg6} />
          </div>
          <div className='w-full aspect-[6/4] rounded-lg overflow-hidden'>
            <ImageCard imgSrc={augsburg9} />
          </div>
        </div>
        {/* full image */}
        <div className='w-full aspect-[4/3] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={augsburg7} large />
        </div>
        {/* full image */}
        <div className='w-full aspect-video rounded-lg overflow-hidden'>
          <ImageCard imgSrc={augsburg2} large />
        </div>

        {/* Miscellaneous Logos */}
        <h1 className='text-center w-full font-bold text-4xl mt-12'>
          Various Logos
        </h1>
        <p className='text-center text-zinc-600 max-w-2xl mb-8'>
          I created a variety of logos for different fictional organizations and
          events as part of a 30 day &ldquo;Logo Every Day&rdquo; challenge.
          These are a few of my favorites.
        </p>

        <h2 className='text-xl text-zinc-600 font-bold mb-8'>Cumulous</h2>
        {/* row 2 cumulous*/}
        <div className='flex flex-col md:flex-row gap-4 justify-center w-full'>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={cumulous1} />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={cumulous2} />
          </div>
        </div>
        {/* full image */}
        <div className='w-full mb-8 aspect-video rounded-lg overflow-hidden'>
          <ImageCard imgSrc={cumulous3} large />
        </div>

        <h2 className='text-xl text-zinc-600 font-bold mb-8'>Cakecup Bakery</h2>
        {/* row 2 */}
        <div className='flex flex-col md:flex-row gap-4 justify-center w-full'>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={cakecup2} />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={cakecup1} />
          </div>
        </div>
        {/* row 2 */}
        <div className='flex flex-col md:flex-row gap-4 justify-center w-full'>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={cakecup3} />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={cakecup4} />
          </div>
        </div>

        <h2 className='text-xl text-zinc-600 font-bold my-8'>Woosh</h2>
        {/* row 2 */}
        <div className='flex flex-col md:flex-row gap-4 justify-center w-full'>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={woosh1} />
          </div>
          <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <ImageCard imgSrc={woosh2} />
          </div>
        </div>
        {/* full image */}
        <div className='w-full aspect-video rounded-lg overflow-hidden'>
          <ImageCard imgSrc={woosh3} large />
        </div>
      </div>
    </div>
  );
};

export default page;
