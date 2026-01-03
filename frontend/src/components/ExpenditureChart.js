import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const ExpenditureChart = ({ data }) => {
  return (
    <Bar
      data={{
        labels: Object.keys(data),
        datasets: [
          {
            label: "Expenditure (₹ crore)",
            data: Object.values(data),
            backgroundColor: "#36A2EB"
          }
        ]
      }}
    />
  );
};

export default ExpenditureChart;
