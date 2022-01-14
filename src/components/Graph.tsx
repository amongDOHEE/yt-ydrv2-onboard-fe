import React from 'react';
import ApexCharts from 'react-apexcharts';

type seriesType = {
  series: {
    name?: string;
    data?: number[];
  }[]
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

    this.state = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
      {
        name: "Data2",
        data: [1, 4, 15, 41, 69, 32, 39, 31, 48]
      }],

      options: {  
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Channel Transition',
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
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
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