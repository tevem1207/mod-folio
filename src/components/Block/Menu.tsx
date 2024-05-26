import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

export const Menu = () => {
  const MenuItem = ({ children }: { children: ReactNode }) => {
    return (
      <button className="text-md font-semibold py-2 px-4 opacity-80 hover:bg-slate-100 hover:dark:bg-slate-800 rounded-lg">
        {children}
      </button>
    );
  };

  return (
    <Popover>
      <PopoverButton className="p-2 opacity-80 hover:opacity-60 active:opacity-100">
        <Bars3Icon className="size-6" />
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
        >
          <MenuItem>Title</MenuItem>
          <MenuItem>Title</MenuItem>
          <MenuItem>Title</MenuItem>
          <MenuItem>Title</MenuItem>
          <MenuItem>Title</MenuItem>
          <MenuItem>Title</MenuItem>
          <MenuItem>Title</MenuItem>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
