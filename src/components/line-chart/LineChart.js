import "./LineChart.scss";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { post } from "../../api/api";
import { backgroundColors, borderColors, options } from "./chartUtils";
import { successToast } from "../../utils/toast";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ dimension, measures, setLoading }) {
  const [canShow, setCanShow] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const hasDimension = dimension;
    const hasMeasure = measures && measures.length;
    const canUpdate = hasDimension && hasMeasure;
    if (canUpdate) getData();
    else setCanShow(false);
  }, [dimension, measures, setLoading]);

  const getData = () => {
    const data = {
      measures: measures,
      dimension: dimension,
    };
    post("data", data, successHandler, setLoading);
  };

  const successHandler = (data) => {
    const labels = data && data.length ? data[0].values : [];
    const datasets = getDatasets(data);
    const chartData = { labels, datasets: datasets };
    setData(chartData);
    successToast("Chart is updated!");
    setCanShow(true);
  };

  const getDatasets = (data) => {
    const datasets = [];
    let dataset;
    for (let i = 1; i < data.length; i++) {
      dataset = {
        label: data[i].name,
        data: data[i].values,
        borderColor: borderColors[i - 1],
        backgroundColor: backgroundColors[i - 1],
      };
      datasets.push(dataset);
    }
    return datasets;
  };

  return <>{canShow && <Line options={options} data={data} />}</>;
}

export default LineChart;
