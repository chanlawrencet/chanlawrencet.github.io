import React from 'react';
import Highcharts from "highcharts"
import dayjs from "dayjs"
import HighchartsReact from "highcharts-react-official"


export const Chart = ({series, title='', yLabel, showLegend=false, day}) => {
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
      },
      xAxis: {
        title: {
          text: 'time'
        },
        labels: {
          enabled: true,
          formatter: (v) => {
            return dayjs.unix(v.value).format('ha')
          }
        },
        min: dayjs().startOf('day').add(day, 'day').unix()
      },
      chart: {
        type: 'spline',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        animation: false,
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