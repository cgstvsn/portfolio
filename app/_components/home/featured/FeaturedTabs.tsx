"use client";

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import ProjectsTab from "./ProjectsTab";
import PhotosTab from "./PhotosTab";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DesignTab = () => {
  return <div>DesignTab</div>;
};

const FeaturedTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    {
      label: "Projects",
      header: "Selected Projects",
      component: ProjectsTab,
    },
    {
      label: "Photography",
      header: "Photography Samples",
      component: PhotosTab,
    },
    // {
    //   label: "Design",
    //   header: "Design Samples",
    //   component: DesignTab,
    // },
  ];

  return (
    // section container
    <div className='w-full max-w-7xl mx-auto px-8'>
      <Tab.Group
        vertical
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        {/* 2 column container */}
        <div className='top-24 lg:grid grid-cols-4 gap-4'>
          {/* left column */}
          {/* TODO make button group instead of 3 buttons */}
          <Tab.List>
            <div className='lg:sticky text-center lg:text-left top-24'>
              <h1 className='text-2xl font-bold text-zinc-00 mb-10 ml-1'>
                {tabs[selectedIndex].header}
              </h1>
              <div className='flex flex-row lg:flex-col gap-2'>
                {tabs.map((tab) => (
                  <Tab
                    key={tab.label}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-2 px-4 rounded-lg transition  lg:text-left",
                        selected
                          ? "bg-zinc-100 cursor-default"
                          : "bg-white hover:bg-zinc-100 border border-zinc-200"
                      )
                    }
                  >
                    {tab.label}
                  </Tab>
                ))}
              </div>
            </div>
          </Tab.List>

          {/* right column / tab render */}
          <Tab.Panels className='col-start-2 col-span-3 mt-16'>
            {tabs.map((tab) => (
              <Tab.Panel key={tab.label}>
                <tab.component />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default FeaturedTabs;
