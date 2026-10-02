import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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
      text: 'Products List',
      font: {
        size: 16, 
      }
    },
  },
  
};


function BarChart () {

  const data = {
    labels : ['Jan 2026', 'Feb 2026', 'Nar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'July 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026', 'Nov 2026', 'Dec 2026'],
    datasets: [
      {
        label: 'Monthly products List',
        data: [100,200,300,400,500,700,200,400,800,500, 300, 1000],
        backgroundColor: '#3fbbc0',
      }
    ],
  };
  
 
  return (
    <div>
      <Bar options={options} data={data}  />
    </div>
  )
};

export default BarChart;