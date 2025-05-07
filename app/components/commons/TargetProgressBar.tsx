import { FC } from "react";

type TargetProgressBarProps = {
  label?: string;
  current?: number;
  target?: number;
  unit?: string;
  manualProgress?: number;
  showProgressText?: boolean;
  height: string;
};

const TargetProgressBar: FC<TargetProgressBarProps> = ({ label, current, target, unit, manualProgress, showProgressText = true, height }) => {
  let progress

  if (manualProgress !== undefined) {
    progress = manualProgress.toFixed(2);
  } else if (current && target) {
    progress = ((current / target) * 100).toFixed(2);
  }

  return (
    <div className="relative w-full">
      <div className="text-xs text-slate-400 uppercase">{label}</div>
      <div className={`w-full bg-white/8 rounded-r-full ${height}`}>
        <div 
          className='progressBarGradient relative h-full rounded-r-full'
          style={{ width: `${progress}%` }}
        >
        <span
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-center text-white"
        >
          {current && `$${current} ${unit}`}
          </span>
        </div>
      </div>

      {/* Нижній допис  */}
      <div
         className="text-left text-xs text-slate-400 mt-1"
         style={{ paddingLeft: `max(0px, calc(${progress}% - 15px))`}}
       >
        {showProgressText && progress && `${Math.round(+progress)}%`}
       </div>
    </div>
  )
}

export default TargetProgressBar