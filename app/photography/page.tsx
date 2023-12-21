"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/photography/sports");
  }, [router]);

  return (
    <div>
      {/* image grid container */}
      <div className='w-full lg:w-[80%] mx-auto flex flex-col gap-4 my-8 px-6 lg:px-8'></div>
    </div>
  );
};

export default Page;
