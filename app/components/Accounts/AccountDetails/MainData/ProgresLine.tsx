import clsx from "clsx";
import { FC } from "react"

type ProgresLineProps = {
  color: string;
  height: string;
  weight: string;
};

const ProgresLine: FC<ProgresLineProps> = ({color, height, weight}) => {
  return (
    <div className={clsx('rounded-r-full', color, height)} style={{ width: weight }} />
  )
}

export default ProgresLine