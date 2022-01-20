import ReactECharts from 'echarts-for-react';

const Chart = (props: any) => {
  const colors = ['#AEB404', '#FA5858', '#FACC2E'];

  const option = {
    width: "80%",
    color: colors,
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      right: '20%'
    },
    toolbox: {
      feature: {
        dataView: {
          show: false,
          readOnly: false
        },
        restore: {
          show: false
        },
        saveAsImage: {
          show: false
        }
      }
    },
    legend: {
      data: ['조회수', '구독자', '수익']
    },
    xAxis: [{
      show: false,
      type: 'category',
      axisTick: {
        alignWithLabel: false
      },
      data: []
    }],
    yAxis: [{
      type: 'value',
      name: '조회수',
      position: 'left',
      axisLine: {
        lineStyle: {
          color: colors[0]
        }
      },
    }, {
      type: 'value',
      name: '구독자',
      position: 'right',
      axisLine: {
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    }, {
      type: 'value',
      name: '구독자',
      position: 'right',
      offset: 50,
      axisLine: {
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [
      {
        lineStyle: {
          width: 4
        },
        smooth: 0.6,
        symbol: 'none',
        name: '조회수',
        type: 'line',
        data: props.view
      },
      {
        lineStyle: {
          width: 4
        },
        smooth: 0.6,
        symbol: 'none',
        name: '구독자',
        type: 'line',
        yAxisIndex: 1,
        data: props.subscriber
      },
      {
        lineStyle: {
          width: 4
        },
        smooth: 0.6,
        symbol: 'none',
        name: '수익',
        type: 'line',
        yAxisIndex: 2,
        data: props.est
      },
    ]
  };

  return (
    <ReactECharts
      option={option}
    />
  );
};

export default Chart;