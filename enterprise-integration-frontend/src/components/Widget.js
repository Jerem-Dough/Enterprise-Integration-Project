import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(
  CategoryScale,    
  LinearScale,      
  PointElement,     
  LineElement,      
  ArcElement,       
  Title,            
  Tooltip,          
  Legend           
);

const Widget = ({ widget }) => {
  const textData = <p>{widget.content}</p>;

  const chartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80, 81],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="widget">
      <h3>{widget.title}</h3>
      {widget.type === 'text' && textData}
      {widget.type === 'graph' && <Line data={chartData} />}
      {widget.type === 'pie' && <Pie data={pieData} />}
    </div>
  );
};

export default Widget;
