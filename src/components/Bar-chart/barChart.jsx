import ReactEcharts from 'echarts-for-react';


const BarChart = (props) => {
 const barOption = {
    title: {
      text: 'Bar Chart'
    },
    xAxis: {
      name: 'Alcohol',
      type: 'category',
      data: props.data.map(item => item.name)
    },
    yAxis: {
      name:'Avg Malic Acid',
      type: 'value'
    },
    series: [
      {
        type: 'bar',
        data: props.data.map(item => item.value)
      }
    ]
  };

  return (
    <div>
        <ReactEcharts option={barOption} />
    </div>
)
}

export default BarChart


