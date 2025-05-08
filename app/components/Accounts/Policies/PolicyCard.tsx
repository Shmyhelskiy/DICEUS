import { FC } from "react";

type PolicyCardProps = {
  icon: React.ReactNode;
  name: string;
  premium: string;
  effDate: string;
}

const PolicyCard: FC<PolicyCardProps> = ({ icon, name, premium, effDate }) => {
  return (
    <div className="bg-[#252A3D] p-4 rounded-3xl min-w-[250px] flex-shrink-0 flex flex-col ">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-light">{name}</h3>
      </div>
      <div className="text-xm text-gray-500 font-light space-y-0.5">
        <p>Premium: {premium}</p>
        <p>Eff.Date: {effDate}</p>
      </div>
    </div>
  );
};

export default PolicyCard;