import { ReactNode } from "react";

export const Header = () => {
  const Menu = ({ children }: { children: ReactNode }) => {
    return <div className="flex gap-8">{children}</div>;
  };
  const MenuItem = ({ children }: { children: ReactNode }) => {
    return (
      <div className="text-md/6 font-semibold cursor-pointer opacity-70 hover:opacity-100">
        {children}
      </div>
    );
  };
  return (
    <header className="px-8 py-6 w-full flex flex-row">
      <Menu>
        <MenuItem>Pricing</MenuItem>
      </Menu>
    </header>
  );
};
