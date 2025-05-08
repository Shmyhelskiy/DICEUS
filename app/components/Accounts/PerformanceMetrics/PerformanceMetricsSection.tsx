import { FC } from "react";
import MetricCard from "../../commons/MetricCard";
import CustomLink from "../../commons/CustomLink";
import { ArrowRight } from "lucide-react";
import { LossRatio, Winnability } from "@/app/types/accounts/accounts";
import TargetProgressBar from "../../commons/TargetProgressBar";

type Props = {
  winnability: Winnability;
  lossRatio: LossRatio;
};

const exposureData = [
  { id: 'marine', label: 'Marine Cargo', percentage: 71.4 },
  { id: 'general', label: 'General Liability', percentage: 20.0 },
  { id: 'workers', label: 'Workers Comp', percentage: 8.6 },
];

const PerformanceMetricsSection: FC<Props> = ({winnability, lossRatio }) => {
  return (
    <section> 
      <div>
        <h2 className="text-3xl mb-8">Performance Metrics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard className="bg-insideGray pt-8 px-6 pb-4 rounded-3xl shadow-lg border-1 border-white/10 flex flex-col">
            <div className="flex items-center mb-1 gap-4">
              <h3 className="text-xl font-light">Winnability</h3>
              <div className="flex gap-1">
                {Array.from({ length: winnability.level }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-800 rounded-full"></div>
                ))}
              </div>
            </div>
            <p className="text-5xl font-light mb-auto pb-10">{winnability.text}</p>
            <CustomLink 
              className="text-sm group text-blue-500 hover:text-blue-600"
            >
              See all factors
              <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
            </CustomLink>
          </MetricCard>

          <MetricCard className="bg-insideGray pt-8 px-6 pb-4 rounded-3xl shadow-lg border-1 border-white/10 flex flex-col">
            <h3 className="text-xl font-light mb-2">Loss Ratio</h3>
            <p className="text-5xl">
              {lossRatio.percentage}%
              <span className="text-lg font-normal text-slate-400 ml-2">
                vs 42% target
              </span>
            </p>
            <div className="flex-grow"></div>
            <CustomLink
              className="text-sm group text-blue-500 hover:text-blue-600"
            >
              View history
              <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
            </CustomLink> 
          </MetricCard>

          <MetricCard className="bg-insideGray pt-8 px-6 pb-4 rounded-3xl shadow-lg border-1 border-white/10 flex flex-col">
            <h3 className="text-xl font-light mb-2">Premium Growth</h3>
            <p className="text-5xl font-light">
              12.4%
              <span className="text-lg font-normal text-slate-500 ml-2 align-middle">
                YoY increase
              </span>
            </p>
            <p className="text-lg text-slate-500 mt-1 mb-auto">
              $123M vs $150M Target
            </p>
            <CustomLink
              className="text-sm group text-blue-500 hover:text-blue-600"
            >
              View trend
              <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
            </CustomLink> 
          </MetricCard>

          <MetricCard className=" bg-insideGray pt-8 px-6 pb-4 rounded-3xl shadow-lg border-1 border-white/10 flex flex-col h-fit">
            <h3 className="text-xl font-light mb-2">Exposure Distribution</h3>
            <div className="space-y-1">
              {exposureData.map((item) => {
                return <div key={item.id} className="grid grid-cols-2 gap-4 justify-center">
                  <TargetProgressBar 
                  manualProgress={item.percentage}
                  showProgressText={false}
                  height="h-3"
                />
                <p className="text-sm">{`${item.label} ${item.percentage}%`}</p>
                </div>
                })}
            </div>
          </MetricCard>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetricsSection;