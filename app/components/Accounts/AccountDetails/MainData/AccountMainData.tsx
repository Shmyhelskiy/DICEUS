import { FC } from "react";
import { WinnabilityPageData } from "@/app/types/accounts/accountsDetailMain";
import MetricCard from "@/app/components/commons/MetricCard";
import LineChart from "./LineChart";
import TargetProgressBar from "@/app/components/commons/TargetProgressBar";
import clsx from "clsx";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import ProgresLine from "./ProgresLine";




type AccountMainDataProps = {
  data?: WinnabilityPageData;
  title: string;
}

const AccountMainData: FC<AccountMainDataProps> = ({data, title}) => {
  return (
    <div className="p-5">
      <h4 className="text-5xl mb-5">{title}</h4>

      <div className="flex gap-2 mb-5"> 
      <MetricCard className="bg-insideGray rounded-3xl flex flex-col w-1/3 p-4">
        <h5 className="font-light text-2xl pb-2">
          {data?.winnability.overallScore.title}
        </h5>

        <div className="flex gap-2 items-center">
          <p className="text-4xl font-semibold">
            {data?.winnability.overallScore.percentage}%
          </p>
            <div className="flex gap-2 items-center border-1 border-blue-400 rounded-full font-light p-2">
              {Array.from({ length: data?.winnability.overallScore.rating.level ?? 0 }).map((_, index) => (
                <div key={index} className="h-2 w-2 bg-blue-500 rounded-full" />
              ))}
              <p className="text-blue-400">
                {data?.winnability.overallScore.rating.text}
              </p>
            </div>
        </div>
      </MetricCard>


      <MetricCard className="bg-insideGray rounded-3xl flex flex-col w-1/3 p-4">
        <h5 className="font-light text-2xl pb-2">
          {data?.winnability.historicalTrend.title}
        </h5>
        
        <div className="w-full max-h-16 flex justify-center">
          <LineChart historicalTrend={data?.winnability.historicalTrend}/>
        </div>
      </MetricCard>

      
      <MetricCard className="bg-insideGray rounded-3xl flex flex-col w-1/3 p-4">
        <h5 className="font-light text-2xl pb-2">
          {data?.winnability.position.title}
        </h5>
        {data?.winnability.position.bars.map((item) => {
          return <div key={item.id} className="grid grid-cols-2 gap-4 justify-center">
          <TargetProgressBar 
            manualProgress={item.value}
            showProgressText={false}
            height="h-4"
          />
          <p className={clsx('text-ms', item.id !== 'yourScoreBar' ? 'text-gray-500' : null)}>{item.title} {item.value}%</p>
        </div>
        })}
      </MetricCard>
      </div>

      <div className="grid grid-cols-2 w-full gap-2">
        <MetricCard className="bg-insideGray rounded-3xl flex flex-col p-4">
          <div className="flex items-center gap-2 mb-5">
            <CircleArrowUp size={24} className="text-green-400"/>
            <h5 className="font-light text-2xl">
              {data?.winnability.increasingFactors.title}
            </h5>
          </div>

          <div className="flex gap-2 text-lg font-light">
            <div className="border-1 border-green-400 rounded-full w-6">
              <span>{data?.winnability.increasingFactors.data[0].rank}</span>
            </div>
            <div>
              <p>
                {data?.winnability.increasingFactors.data[0].label}
              </p>
              <ProgresLine color="greenGradient" height="h-5"/>
            </div>

            <div className="">
              <span> +{data?.winnability.increasingFactors.data[0].impactPercentage}%</span>
            </div>
          </div>
        </MetricCard>
        

        <MetricCard className="bg-insideGray rounded-3xl flex flex-col p-4">
          <div className="flex items-center gap-2 mb-5">
            <CircleArrowDown size={24} className="text-orange-300"/>
            <h5 className="font-light text-2xl">
              {data?.winnability.decreasingFactors.title}
            </h5>
          </div>
          <p className=""></p>
        </MetricCard>
      </div>
    </div>
  )
}

export default AccountMainData