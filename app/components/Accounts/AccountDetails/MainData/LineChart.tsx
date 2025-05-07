import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { historicalTrendType } from '@/app/types/accounts/accountsDetailMain';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type LineChartProps = {
  historicalTrend: historicalTrendType;
};

const LineChart: FC<LineChartProps> = ({ historicalTrend }) => {
  const months = historicalTrend.data.map(item => item.month);
  const values = historicalTrend.data.map(item => item.value);

  const data = {
    labels: months,
    datasets: [
      {
        label: historicalTrend.title,
        data: values,
        borderColor: '#3B82F6',
        tension: 0.1,   
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false 
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
            weight: '500'
          }
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className='h-full w-full'>
      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart;