import React from 'react';
import ImageCard from '../_components/ImageCard';

// import football2 from "@/public/photos/sports/football2.jpg";
import baseball1 from '@/public/photos/sports/baseball1.jpg';
import baseball2 from '@/public/photos/sports/baseball2.jpg';
import baseball3 from '@/public/photos/sports/baseball3.jpg';
import baseball4 from '@/public/photos/sports/baseball4.jpg';
import baseball5 from '@/public/photos/sports/baseball5.jpg';
import baseball6 from '@/public/photos/sports/baseball6.jpg';
import baseball7 from '@/public/photos/sports/baseball7.jpg';
import baseball8 from '@/public/photos/sports/baseball8.jpg';
import baseball9 from '@/public/photos/sports/baseball9.jpg';
import baseball10 from '@/public/photos/sports/baseball10.jpg';
import baseball11 from '@/public/photos/sports/baseball11.jpg';
import football3 from '@/public/photos/sports/football3.jpg';
import football4 from '@/public/photos/sports/football4.jpg';
import football6 from '@/public/photos/sports/football6.jpg';
// import football9 from "@/public/photos/sports/football9.jpg";
import football13 from '@/public/photos/sports/football13.jpg';
import football14 from '@/public/photos/sports/football14.jpg';
import football15 from '@/public/photos/sports/football15.jpg';
// import rowing1 from "@/public/photos/sports/rowing1.jpg";
import rowing2 from '@/public/photos/sports/rowing2.jpg';
import rowing3 from '@/public/photos/sports/rowing3.jpg';
// import rowing4 from "@/public/photos/sports/rowing4.jpg";
import rowing5 from '@/public/photos/sports/rowing5.jpg';
// import rowing6 from "@/public/photos/sports/rowing6.jpg";
import horse1 from '@/public/photos/sports/horse1.jpg';
// import horse2 from "@/public/photos/sports/horse2.jpg";
import horse3 from '@/public/photos/sports/horse3.jpg';
import horse4 from '@/public/photos/sports/horse4.jpg';
import bball from '@/public/photos/sports/bball.jpg';
import kid from '@/public/photos/sports/kid.jpg';

const page = () => {
  return (
    // image grid container
    <div className='w-full lg:w-[80%] mx-auto flex flex-col gap-4 my-8 px-6 lg:px-8'>
      {/* full image */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard
          imgSrc={baseball1}
          large
          priority
        />
      </div>

      {/* row 3*/}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={football3} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={baseball4} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={football14} />
        </div>
      </div>

      {/* tall 2 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[2/3] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={bball}
            large
          />
        </div>
        <div className='w-full aspect-[2/3] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={baseball11}
            large
          />
        </div>
      </div>

      {/* full image */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard
          imgSrc={horse4}
          large
        />
      </div>

      {/* row 3*/}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={horse1} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={horse3} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={baseball10} />
        </div>
      </div>

      {/* ROWING */}
      {/* row 3 */}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={baseball2}
            priority
          />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={baseball3}
            priority
          />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={rowing2}
            priority
          />
        </div>
      </div>

      {/* ROWING */}
      {/* row 3*/}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={rowing3}
            priority
          />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={baseball6}
            priority
          />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard
            imgSrc={rowing5}
            priority
          />
        </div>
      </div>

      {/* full image */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard
          imgSrc={football6}
          large
        />
      </div>

      {/* row 2*/}
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={football13} />
        </div>
        <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
          <ImageCard imgSrc={kid} />
        </div>
      </div>

      {/* full image */}
      <div className='w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <ImageCard
          imgSrc={football15}
          large
        />
      </div>
    </div>
  );
};

export default page;
