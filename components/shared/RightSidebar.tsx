import React from "react";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-x border-slate-300 p-6 pt-36 shadow  dark:shadow-none max-lg:hidden lg:w-[330px]">
      <div>
        <p className="text-xl font-bold text-neutral-900">Hot Network</p>
      </div>
      <div>
        <p className="text-xl font-bold text-neutral-900">Popular Tags</p>
      </div>
    </section>
  );
};

export default RightSidebar;
