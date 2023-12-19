import React from "react";
import ImageCard from "../_components/ImageCard";

import car1 from "../../../public/photos/cars/cars-examples-01.jpg";
import car2 from "../../../public/photos/cars/cars-examples-02.jpg";
import car5 from "../../../public/photos/cars/cars-examples-05.jpg";
import car6 from "../../../public/photos/cars/cars-examples-06.jpg";
import car8 from "../../../public/photos/cars/cars-examples-08.jpg";
import car9 from "../../../public/photos/cars/cars-examples-09.jpg";
import car10 from "../../../public/photos/cars/cars-examples-10.jpg";
import car12 from "../../../public/photos/cars/cars-examples-12.jpg";
import car13 from "../../../public/photos/cars/cars-examples-13.jpg";
import car14 from "../../../public/photos/cars/cars-examples-14.jpg";
import car24 from "../../../public/photos/cars/cars-examples-24.jpg";
import car25 from "../../../public/photos/cars/cars-examples-25.jpg";
import car26 from "../../../public/photos/cars/cars-examples-26.jpg";
import car29 from "../../../public/photos/cars/cars-examples-29.jpg";
import car30 from "../../../public/photos/cars/cars-examples-30.jpg";
import car32 from "../../../public/photos/cars/cars-examples-32.jpg";
import car33 from "../../../public/photos/cars/cars-examples-33.jpg";
import car34 from "../../../public/photos/cars/cars-examples-34.jpg";
import car35 from "../../../public/photos/cars/cars-examples-35.jpg";
import car37 from "../../../public/photos/cars/cars-examples-37.jpg";
import car38 from "../../../public/photos/cars/cars-examples-38.jpg";
import car39 from "../../../public/photos/cars/cars-examples-39.jpg";

const page = () => {
  return (
    // image grid container
    <div className='w-full lg:w-[80%] mx-auto flex flex-col gap-4 my-8 px-6 lg:px-8'>
      {/* full image */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard imgSrc={car24} large priority />
      </div>

      {/* row 2 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car26} priority />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car29} priority />
        </div>
      </div>

      {/* row 3 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car25} priority />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car30} priority />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car32} priority />
        </div>
      </div>

      {/* row 2 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car14} priority />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car13} priority />
        </div>
      </div>

      {/* full image */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard imgSrc={car8} large priority />
      </div>

      {/* row 2 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car9} priority />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car10} priority />
        </div>
      </div>

      {/* full size */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard imgSrc={car5} large />
      </div>

      {/* row 2 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car2} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car6} />
        </div>
      </div>

      {/* full image */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard imgSrc={car34} large />
      </div>

      {/* row 2 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car37} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car33} />
        </div>
      </div>

      {/* row 2 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car39} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={car38} />
        </div>
      </div>
    </div>
  );
};

export default page;
