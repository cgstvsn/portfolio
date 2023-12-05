function SkillHover(props: any) {
  const { children, label } = props;

  return (
    <div className='group relative'>
      <div className='absolute -top-10 left-1/2 right-1/2 opacity-0 group-hover:opacity-100 transition duration-200 text-center min-w-fit -translate-x-1/2 whitespace-nowrap pointer-events-none'>
        <p className='bg-zinc-800 shadow-md px-2 py-1 rounded-lg text-white font-semibold'>
          {label}
        </p>
      </div>

      <div className='flex items-center justify-center rounded-lg bg-white border-2 border-zinc-800 aspect-square w-14 h-14 p-2 md:p-3 text-zinc-800 shadow-md select-none hover:bg-zinc-800 hover:text-white transition'>
        {children}
      </div>
    </div>
  );
}

export default SkillHover;
