import ReactEcharts from 'echarts-for-react';



const ScatterChart = (props) => {

    const scatterOption = {
        title: {
            text: 'Scatter Plot'
        },
        xAxis: {
            name: 'Color Intensity'
        },
        yAxis: {
            name: 'Hue'
        },
        series: [
            {
                type: 'scatter',
                data: props.data,
                symbolSize: (data) => {
                    return data[1] * 5;
                }
            }
        ]
    };


    return (
        <div>
            <ReactEcharts option={scatterOption} />
        </div>
    )
}

export default ScatterChart