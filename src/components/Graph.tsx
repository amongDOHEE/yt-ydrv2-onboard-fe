import React from 'react';
import ApexCharts from 'react-apexcharts';

type seriesType = {
  series: [
    {
      data?: number[]
    },
    {
      data?: number[]
    },
    {
      data?: number[]
    },
  ],
};

type optionsType = {
  options: {
    chart: {
      zoom: {
        enabled: boolean;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: string;
    };
    title: {
      text: string;
      align: string;
    };
    grid: {
      row: {
        colors: string[];
        opacity: number;
      };
    };
    xaxis: {
      categories: string[];
    };
  }
};

//type 조정 필요
export default class Graph extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    let view = props.view;
    let subscriber = props.subscriber;
    let est = props.est;

    this.state = {
      series: [
        {
          name: "구독자",
          data: [1, 2, 3]
        },
        {
          name: "조회수",
          data: [233000, 50000, 600000]
        },
        {
          name: "수익",
          data: [2, 3, 4]
        },

      ],

      options: {
        chart: {
          selection: {
            enabled: true
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: '채널 추이',
          align: 'left',
          style: {
            fontSize: "20px"
          }
        },
        grid: {
          row: {
            colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Oct', 'Nov', 'Dec'],
        },
        yaxis: [
          {
            title: {
              text: "조회수"
            },
          },
          {
            opposite: true,
            title: {
              text: "구독자"
            }
          },
          {
            opposite: true,
            title: {
              text: "수익"
            }
          }
        ],
        tooltip: {
          shared: false,
          intersect: true,
        },
        legend: {
          horizontalAlign: "right",
          offsetX: 0,
          position: 'top',
          fontSize: '18px'
        },
      }
    }
  };

  render() {
    return (
      <ApexCharts
        options={this.state.options}
        series={this.state.series}
        types='line'
        height={300}
      />
    );
  }
}