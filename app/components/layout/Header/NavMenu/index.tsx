import React from "react";

type MenuProps = {
  children: React.ReactNode;
  className?: string;
};

function NavMenu({ children, className = "" }: MenuProps){
    return <ul className={`${className}`}>{children}</ul>;
}

export {NavMenu}
