import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Imagemobile from './Imagemobile'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function Right() {
  const data = {
    labels: [],
    datasets: [{
        label: 'assessment taken',
        data: [3, 6],
        backgroundColor: ['#9333ea', '#d8b4fe'],
        borderColor: ['#9333ea', '#d8b4fe'],
    }]
  };
 
  const centerTextPlugin = {
    id: 'centerText',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const lines = [`${data.datasets[0].data[0]}`, 'Assessment', 'Taken'];
      const lineHeight = 25; 
      lines.forEach((line, index) => {
        ctx.fillText(line, xCoor, yCoor - lineHeight / 2 + index * lineHeight);
      });

      ctx.restore();
    }
  };

  const options = {
    cutout: '90%',
  };

  const data2 = {
    labels: [],
    datasets: [{
        label: 'solved questions',
        data: [6, 20],
        backgroundColor: ['#9333ea', '#d8b4fe'],
        borderColor: ['#9333ea', '#d8b4fe'],
    }]
  };
 
  const centerTextPlugin2 = {
    id: 'centerText',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const lines = [`${data.datasets[0].data[0]}`, 'Questions', 'Solved'];
      const lineHeight = 25; 
      lines.forEach((line, index) => {
        ctx.fillText(line, xCoor, yCoor - lineHeight / 2 + index * lineHeight);
      });

      ctx.restore();
    }
  };

  const options2 = {
    cutout: '90%',
  };


  return (
    <div >
      <div className="flex-col w-[90%]   mt-4 border-2 rounded-xl ml-6 bg-white">
        <div className="flex  border-b-2">
          <div className='w-[50%] p-4'>
            <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
          </div>
          <div className='w-[50%] p-4'>
            <Doughnut data={data2} options={options2} plugins={[centerTextPlugin2]} />
          </div>
        </div>
        <div className="flex justify-center p-6 pt-2">
          <div className=' h-24 p-4 border-r-2 pl-0 text-xl font-bold'><p>Badges</p></div>
          <div className=' h-24 p-4 text-xl font-bold'><p>Focussed Areas</p></div>
        </div>
      </div>
      <Imagemobile/>
      </div>
 
  );
}
