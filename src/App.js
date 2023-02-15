import './App.css';
import { useState, useEffect } from 'react';
import jsondata from './Utils/plot-data.json'
import ScatterChart from './components/Scatter-chart/scatterChart';
import BarChart from './components/Bar-chart/barChart';

function App() {
  const [scatterData, setScatterData] = useState([]);
  const [barData, setBarData] = useState([]);

  useEffect(()=>{
   ScatterChart_Data()
   Barchart_data()
  },[])

  function ScatterChart_Data() {
    const dataforScatter = jsondata.map(({ 'Color intensity': x, Hue: y }) => [x, y]);
    setScatterData(dataforScatter)
  }

  function Barchart_data() {
    const dataForBar = jsondata.reduce((acc, alcoholdata) => {
      const alcohol = alcoholdata['Alcohol'];
      const malicAcid = alcoholdata['Malic Acid'];
  
      const existingData = acc.find((data) => data.name === alcohol);
      if (existingData) {
        existingData.value += malicAcid;
        existingData.count++;
      } else {
        acc.push({ name: alcohol, value: malicAcid, count: 1 });
      }
  
      return acc;
    }, []);
  
    dataForBar.forEach((data) => {
      data.value /= data.count;
      delete data.count;
    });
  
    setBarData(dataForBar);
  }
 
  


  return (
    <div>
      <BarChart data={barData}/>
      <ScatterChart data={scatterData} />
    </div>
  );
}

export default App;
