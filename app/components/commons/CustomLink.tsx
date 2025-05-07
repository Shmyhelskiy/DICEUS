import Link from "next/link";
import { FC } from "react";

type CustomLinkProps = {
  title?: string;
  path?: string;
  className?: string;
  children?: React.ReactNode;
};

const CustomLink: FC<CustomLinkProps> = ({children, title, path = '', className = ''}) => {
  return (
    <Link 
      href={path}
      className={`inline-flex items-center ${className}`}
    >
      {title} 
      {children && children}
    </Link>
  )
}

export default CustomLink