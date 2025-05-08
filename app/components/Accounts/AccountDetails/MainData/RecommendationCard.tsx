import Button from "@/app/components/commons/Button";
import { FC } from "react";

type RecommendationCardProps = {
  title: string;
  text: string;
};

const RecommendationCard: FC<RecommendationCardProps> = ({title, text}) => {
  return (
    <article className="flex justify-between">
      <div className="w-[70%]">
        <h6>{title}</h6>
        <p className="text-gray-400">
          {text}
        </p>
      </div>
      
      <Button 
        label="Apply" 
        onClick={() => { }} 
        className="rounded-full px-15 h-14 text-lg text-center bg-[#3BB979] hover:bg-green-400 text-black" 
        type='button'
      />
    </article>
  )
}

export default RecommendationCard