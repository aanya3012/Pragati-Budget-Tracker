import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaxChart = ({ data }) => {
  return (
    <Pie
      data={{
        labels: Object.keys(data),
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#8A2BE2",
              "#00FA9A"
            ]
          }
        ]
      }}
    />
  );
};

export default TaxChart;
