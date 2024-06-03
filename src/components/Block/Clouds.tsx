import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";

import type { CloudsProps } from "@/module-types";

const Clouds = ({ data }: CloudsProps) => {
  const Cloud = ({ title, img }: CloudsProps["data"][0]) => {
    return (
      <Popover>
        <PopoverButton className="p-2 opacity-80 hover:opacity-60 active:opacity-100">
          <img className="size-16" src={img} alt={`cloud-img-${title}`} />
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            anchor="bottom start"
            className="flex flex-col border rounded-lg p-2 bg-white dark:bg-black opacity-90 [--anchor-gap:12px]"
          ></PopoverPanel>
        </Transition>
      </Popover>
    );
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-12 md:gap-16">
      {data.map((cloud, index) => (
        <Cloud key={`cloud-block-${index}`} {...cloud} />
      ))}
    </div>
  );
};

export default Clouds;
