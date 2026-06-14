import ProjectsTab from "./ProjectsTab";

const FeaturedTabs = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-8'>
      <div className='lg:sticky text-center lg:text-left top-24 grid lg:grid-cols-4'>
        <div>
          <h1 className='text-2xl font-bold text-zinc-800 mb-10 ml-1'>
            Selected Projects
          </h1>
        </div>
      </div>

      <div className='grid lg:grid-cols-4'>
        <div className='col-start-2 col-span-3'>
          <ProjectsTab />
        </div>
      </div>
    </div>
  );
};

export default FeaturedTabs;
