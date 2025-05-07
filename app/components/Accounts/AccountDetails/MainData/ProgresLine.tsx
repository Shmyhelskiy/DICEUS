import clsx from "clsx";
import { FC } from "react"

type ProgresLineProps = {
  color: string;
  height: string;
};

const ProgresLine: FC<ProgresLineProps> = ({color, height}) => {
  return (
    <div className={clsx('rounded-r-full', color, height)}>

    </div>
  )
}

export default ProgresLine