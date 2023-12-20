import ImageCard from "@/app/photography/_components/ImageCard";

import football4 from "@/public/photos/sports/football4.jpg";
import football9 from "@/public/photos/sports/football9.jpg";
import horse4 from "@/public/photos/sports/horse4.jpg";
import rowing2 from "@/public/photos/sports/rowing2.jpg";
import rowing3 from "@/public/photos/sports/rowing3.jpg";
import football13 from "@/public/photos/sports/football13.jpg";

const PhotosTab = () => {
  const images = [football4, football9, horse4, rowing2, rowing3, football13];

  const imageCards = images.map((image, index) => {
    return (
      <div
        key={`featuredImage-${index}`}
        className='w-full aspect-[3/2] rounded-lg overflow-hidden'
      >
        <ImageCard imgSrc={image} />
      </div>
    );
  });

  return <div className='flex flex-col gap-2'>{imageCards}</div>;
};

export default PhotosTab;
