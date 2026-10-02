import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Summary List',
      font: {
        size: 16, 
      }
    },
  },
  
};


function CombineBarChart () {

  const data = {
    labels : ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'July 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026', 'Nov 2026', 'Dec 2026'],
    datasets: [
      {
        label: 'products',
        data: [100,200,300,400,500,700,200,400,800,500, 300, 1000],
        backgroundColor: '#3fbbc0',
      },
      {
        label: 'users',
        data: [10,20,30,40,50,70,20,40,80,50, 30, 100],
        backgroundColor: '#EF4444',
      }
    ],
  };
  
 
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: '500px' }} className='column-box'>
         <Bar options={options} data={data} />
      </div>
    </div>
  )
};

export default CombineBarChart;