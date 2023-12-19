import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = (props: any) => {
  const { label, image, description, url, sourceUrl } = props;

  return (
    <div className='col-start-2 col-span-3 flex gap-8 w-full mb-12 pb-12 border-b border-zinc-300'>
      <div className='relative aspect-[4/3] h-56 hidden lg:block'>
        <Link href={url} target='_blank'>
          <Image
            fill
            alt={label}
            src={image}
            className='rounded-lg object-cover object-center'
          />
        </Link>
      </div>
      <div className='flex flex-col justify-between gap-2 px-2 py-2 w-full lg:basis-2/3'>
        <div className='grow mb-2'>
          <Link
            href={url}
            target='_blank'
            className='font-bold text-3xl text-zinc-800'
          >
            {label}
          </Link>
          <p className='mt-8 line-clamp-4'>{description}</p>
        </div>
        <div className='flex gap-2 mt-8'>
          <Link
            href={sourceUrl}
            target='_blank'
            className='flex items-center gap-2 bg-zinc-200 text-zinc-800 font-semibold w-full px-4 py-2 hover:brightness-95 transition rounded-lg truncate'
          >
            <Github size={18} /> View source
          </Link>
          <Link
            href={url}
            target='_blank'
            className='flex items-center gap-2 bg-zinc-800 text-zinc-200 font-semibold w-full px-4 py-2 hover:brightness-95 transition rounded-lg truncate'
          >
            <ExternalLink size={18} /> View site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
