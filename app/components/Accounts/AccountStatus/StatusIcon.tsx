import clsx from "clsx";
import { Check } from "lucide-react";
import { FC } from "react"

type StatusIconProps = {
  className?: string;
  size: number;
  color: string;
}

const StatusIcon: FC<StatusIconProps> = ({className, size, color}) => {
  return (
    <div className={clsx(`rounded-full border-2`, className, color)}>
      <Check size={size} className={color} strokeWidth={2} />
  </div>
  )
}

export default StatusIcon