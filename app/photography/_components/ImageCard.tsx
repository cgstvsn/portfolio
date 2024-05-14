'use client';

import React, { useContext } from 'react';
import Image, { StaticImageData } from 'next/image';
// import { ModalContext } from "@/context/modal.context";

type ImageCardProps = {
  imgSrc: StaticImageData;
  large?: boolean;
  priority?: boolean;
};

const ImageCard: React.FC<ImageCardProps> = ({ imgSrc, large, priority }) => {
  // const { openModal } = useContext(ModalContext);

  return (
    <div className='relative h-full'>
      <Image
        src={imgSrc}
        alt={`image ${imgSrc}`}
        fill
        placeholder='blur'
        style={{
          objectFit: 'cover',
        }}
        priority={priority}
        sizes={`(max-width:768px) 100vw, ${large ? '100vw' : '40vw'}`}
      />
    </div>
  );
};

export default ImageCard;
