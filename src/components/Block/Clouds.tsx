import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";

import type { CloudsProps } from "@/module-types";

const Clouds = ({ title, data }: CloudsProps) => {
  const Cloud = ({ title, content, img, bgColor }: CloudsProps["data"][0]) => {
    return (
      <Popover>
        <PopoverButton
          className={`rounded-2xl p-1 hover:opacity-80 hover:-translate-y-1 transition-transform`}
          style={{ backgroundColor: bgColor }}
        >
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
            className="flex flex-col gap-2 border rounded-lg p-2 bg-white dark:bg-black opacity-90 [--anchor-gap:12px]"
          >
            <h3 className="text-2xl	font-bold">{title}</h3>
            <p>{content}</p>
          </PopoverPanel>
        </Transition>
      </Popover>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl	font-bold">{title}</h2>
      <div className="flex gap-16 justify-evenly flex-wrap p-16">
        {data.map((cloud, index) => (
          <Cloud key={`cloud-block-${index}`} {...cloud} />
        ))}
      </div>
    </div>
  );
};

export default Clouds;
