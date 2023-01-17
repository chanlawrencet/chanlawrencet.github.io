import React from 'react';
import Highcharts from "highcharts"
import dayjs from "dayjs"
import HighchartsReact from "highcharts-react-official"


export const Chart = ({softYMax=undefined, series, title='', yLabel, showLegend=false, day, height=null}) => {
  return <div>
    <HighchartsReact highcharts={Highcharts} options={{
      title: {
        text: title,
      },
      yAxis: {
        title: {
          // text: yLabel
          enabled: false,
        },
        minPadding: 0.3,
        maxPadding: 0.3,
        min: yLabel === 'percent' ? 0 : null,
        max: yLabel === 'percent' ? 100 : null,
        softMax: softYMax
      },
      xAxis: {
        labels: {
          enabled: true,
          formatter: (v) => {
            const timeString =  dayjs.unix(v.value).format('ha')
            if (timeString === '12pm') {
              return 'noon';
            } else if (timeString === '12am') {
              return 'mdnt';
            }
            return timeString.replace('pm', '').replace('am', '');
          }
        },
        min: dayjs().startOf('day').add(day, 'day').unix(),
        plotLines: [{
          color: '#FF0000', // Red
          width: 2,
          value: dayjs().unix() // Position, you'll have to translate this to the values on your x axis
        }],
        tickPositioner: function () {
          const ticks = this.series[0].processedXData.slice().filter((x, i) => i % 2 === 0);
          ticks.info = this.tickPositions.info;
          console.log({ticks})
          return ticks;
        }
      },
      chart: {
        type: 'spline',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        animation: false,
        height: height
      },
      tooltip: {
        shared: true,
      },
      legend: {
        enabled: showLegend,

      },
      series: series
    }} />
  </div>
};