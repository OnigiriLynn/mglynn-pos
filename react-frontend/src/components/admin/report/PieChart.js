import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function PieChart () {

  const data = {
    labels: ['Jan 2026', 'Feb 2026', 'Nar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'July 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026', 'Nov 2026', 'Dec 2026'],
    datasets: [
      {
        label: '',
        data: [10, 20, 50, 100, 40, 70, 20, 10, 30, 60, 80, 50],
        backgroundColor: [
          '#4F46E5',
          '#F59E0B',
          '#10B981',
          '#EF4444',
          '#8B5CF6',
          '#00668E',
          '#17BECF',
          '#D6C9BD'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    maintainAspectRatio: false, 
    plugins: {
      title: {
        display: true,              // Must be true to show the title
        text: 'Users List', // Your title text here
        position: 'top',            // Optional: 'top', 'left', 'bottom', 'right'
        font: {
          size: 16,                 // Optional: Customize font size
          weight: 'bold',           // Optional: Customize font weight
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
    }
  };
  

  return (
        <Pie data={data} options={options} />
  )
};

export default PieChart;