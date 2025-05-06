/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import TargetProgressBar from '../../commons/TargetProgressBar';


const PortfolioGoals = () => {

  const lossRatio = {
    current: 48.2,
    target: 56,
    status: 'GOOD',
  };

  const renewalRetention = {
    current: 88,
    targetMin: 85,
    targetMax: 90,
    status: 'ON TARGET',
  };

  const newBusiness = {
    current: 8.1,
    target: 12,
    unit: 'M',
    percentage: 67,
  };

  const annualGwp = {
    current: 28.4,
    target: 42,
    unit: 'M',
    percentage: 68, 
  };

  const greenWidthPercentage = renewalRetention.targetMax - renewalRetention.targetMin;

  return (
    <div 
      className='p-5 rounded-3xl flex flex-col gap-2 pb-7 text-xxs'
    >
      <h2 className="text-xl pb-2">
        Portfolio goals
      </h2>

      <div className='flex flex-col gap-10'>
        <h3 className="uppercase text-slate-400 tracking-wider">
          Portfolio Loss Ratio Target
        </h3>

        <div className="relative w-full h-7">
        {/* Верхній трикутник  */}
          <div
            className="absolute -top-7 z-10 flex flex-col items-center"
            style={{
              left: `${lossRatio.target}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <span className="text-[8px] text-white/50 mb-1.5">TG {lossRatio.target} %</span>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-500" />
          </div>

          {/* Нижній трикутник  */}
          <div
            className="absolute -bottom-5 z-10 flex flex-col items-center"
            style={{
              left: `${lossRatio.current}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-green-500" />
            <span className="text-[8px] text-green-400/70 mt-1.5">
              {(lossRatio.current - lossRatio.target).toFixed(1)} ({lossRatio.status})
            </span>
          </div>

          {/* Графік  */}
          <div className="w-full h-5 rounded-full flex overflow-hidden">
            <div className="bg-green-400 h-full flex-[4]"></div>
            <div className="bg-yellow-300 h-full flex-[2]"></div>
            <div className="bg-red-500 h-full flex-[3.5]"></div>
          </div>
        </div>

        <div className='flex flex-col gap-5 relative'>
          <h3 className="uppercase text-slate-400 tracking-wider">
            Reneval Retention
          </h3>


        {/* Верхній напис  */}
          <div
            className="absolute top-4 z-10 flex flex-col items-center"
            style={{
              right: `${renewalRetention.targetMin - renewalRetention.targetMax - 5}%`,  // -5 для того що б відцентрувати напис
              transform: 'translateX(-50%)',
            }}
          >
            <span className="text-[8px] text-white/50">TO {renewalRetention.targetMin} - {renewalRetention.targetMax}%</span>
          </div>

          {/* Нижній трикутник  */}
          <div
            className="absolute -bottom-7 z-10 flex flex-col items-center"
            style={{
              right: `${renewalRetention.targetMin - renewalRetention.targetMax - 5}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-green-500" />
            <span className="text-[8px] text-green-400/70 mt-1.5">
              {renewalRetention.status}
            </span>
          </div>

          {/* Графік  */}
          <div className="w-full h-5 rounded-full flex overflow-hidden bg-yellow-300 relative">
            <div className="bg-red-500 h-full" style={{ flexBasis: '20%' }}></div>

            {greenWidthPercentage > 0 && (
              <div
                className="bg-green-500 h-full absolute"
                style={{
                  left: `${(renewalRetention.targetMin / 100) * 100}%`,
                  width: `${greenWidthPercentage}%`,
                }}
                title={`Ціль: ${renewalRetention.targetMin}% - ${renewalRetention.targetMax}%`}
              ></div>
            )}
          </div>
        </div>
 
        <div className='flex items-center justify-between gap-1'>
          <TargetProgressBar 
            label='New business target' 
            current={newBusiness.current} 
            target={newBusiness.target} 
            unit={newBusiness.unit}
          />
          <p className='text-xs'>{`$${newBusiness.target}${newBusiness.unit}`}</p>
        </div>

        <div className='flex items-center justify-between gap-1'>
          <TargetProgressBar 
            label='Annual GWP Target' 
            current={annualGwp.current} 
            target={annualGwp.target} 
            unit={annualGwp.unit}
          />
          <p className='text-xs'>{`$${annualGwp.target}${annualGwp.unit}`}</p>
        </div>


      </div>
    </div>
  )
}

export default PortfolioGoals