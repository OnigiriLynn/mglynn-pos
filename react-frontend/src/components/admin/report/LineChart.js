import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Products List',
      font: {
        size: 16,
        weight: 'bold',
      },
    },
  },
};


function LineChart () {

const CHART_COLOR = '#3fbbc0';

const data = {
  labels: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'July 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026', 'Nov 2026', 'Dec 2026'],
  datasets: [
    {
      label: 'Monthly Products List',
      data: [100, 200, 300, 400, 500, 700, 200, 400, 800, 500, 300, 1000],
      backgroundColor: CHART_COLOR,
      borderColor: CHART_COLOR,
      tension: 0.3, // Makes the line chart smooth instead of jagged
    },
  ],
};

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }} className='column-box'>
        <Line options={options} data={data} />
    </div>
  )
};

export default LineChart;