import { FC } from "react";
import { WinnabilityPageData } from "@/app/types/accounts/accountsDetailMain";
import MetricCard from "@/app/components/commons/MetricCard";
import LineChart from "./LineChart";
import TargetProgressBar from "@/app/components/commons/TargetProgressBar";
import clsx from "clsx";
import { CircleArrowDown, CircleArrowUp, Rocket } from "lucide-react";
import ProgresLine from "./ProgresLine";
import RecommendationCard from "./RecommendationCard";




type AccountMainDataProps = {
  data?: WinnabilityPageData;
  title: string;
}

const AccountMainData: FC<AccountMainDataProps> = ({data, title}) => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h4 className="text-5xl">{title}</h4>

      <div className="flex gap-2"> 
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
            <CircleArrowUp size={30} className="text-green-400"/>
            <h5 className="font-light text-2xl">
              {data?.winnability.increasingFactors.title}
            </h5>
          </div>

          {data?.winnability.increasingFactors.data.map((item) => {
            return <div className="flex gap-2 text-lg font-light pb-5" key={item.id}>
            <div 
              className="flex items-center justify-center border border-green-400 text-green-400 rounded-full w-10 h-10 text-sm"
            >
              <span>{item.rank}</span>
            </div>
            <div className={`flex flex-col w-full`}>
              <p className="w-fit">
                {item.label}
              </p>

              <div className="flex items-center gap-1">
                <ProgresLine color='greenGradient' height="h-5" weight={`${item.barValue}%`}/>
                <span className="text-gray-400 text-lg">
                  +{item.impactPercentage}%
                </span>
              </div>
            </div>
          </div>
          })}
        </MetricCard>
        

        <MetricCard className="bg-insideGray rounded-3xl flex flex-col p-4">
          <div className="flex items-center gap-2 mb-5">
            <CircleArrowDown size={30} className="text-orange-300"/>
            <h5 className="font-light text-2xl">
              {data?.winnability.decreasingFactors.title}
            </h5>
          </div>

          {data?.winnability.decreasingFactors.data.map((item) => {
            return <div className="flex gap-2 text-lg font-light pb-5" key={item.id}>
            <div 
              className="flex items-center justify-center border text-orange-200 border-orange-200 rounded-full w-10 h-10 text-sm"
            >
              <span>{item.rank}</span>
            </div>
            <div className={`flex flex-col w-full`}>
              <p className="w-fit">
                {item.label}
              </p>

              <div className="flex items-center gap-1">
                <ProgresLine color='orangeGradient' height="h-5" weight={`${item.barValue}%`}/>
                <span className="text-gray-400 text-lg">
                  {item.impactPercentage}%
                </span>
              </div>
            </div>
          </div>
          })}

        </MetricCard>
      </div>

      <div className="bg-insideGray p-5 rounded-3xl">
        <MetricCard className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Rocket  size={30} className="text-green-300"/>
            <h5 className="font-light text-2xl text-green-300">
              AI-Powered Recommendations
            </h5>
          </div>

          {data?.aiPoweredRecommendations.map((item) => {
            return <RecommendationCard key={item.id} title={item.title} text={item.description} />
          })}
        </MetricCard>
      </div>
    </div>
  )
}

export default AccountMainData