import { FC } from "react"
import { ArrowRight } from "lucide-react";
import CustomLink from "../../commons/CustomLink";

type AttentionItemProps = {
  title: string;
  subtitle: string;
  linkText: string;
}

const AttentionItem:FC<AttentionItemProps> = ({ title, subtitle, linkText }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-base text-gray-300 font-light">{title}</h3>
      <p className="text-xs text-gray-500">{subtitle}</p>
      <CustomLink
        path='/'
        title={linkText}
        className="text-sm group text-blue-500 hover:text-blue-600"
      >
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1 " />
      </CustomLink>
    </div>
  );
};

export default AttentionItem;