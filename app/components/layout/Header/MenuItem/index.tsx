import Link from "next/link";
import React from "react";


type MenuItemProps = {
  label: string;
  href?: string;
  active?: boolean;
};

export const MenuItem = ({
  label,
  href,
  active = false,
}: MenuItemProps) => {
  const className = `menu-item ${active ? "active" : ""}`;

  if (href) {
    return (
      <li>
        <Link href={href} className={className}>
          {label}
        </Link>
      </li>
    );
  }

};
