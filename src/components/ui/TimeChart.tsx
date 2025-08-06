import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: { activity: string; hours: number }[];
}

const TimeChart = ({ data }: Props) => {
  const totalHours = 24;
  const usedHours = data.reduce((sum, d) => sum + d.hours, 0);
  const remainingHours = Math.max(0, totalHours - usedHours);

  const extendedData =
    remainingHours > 0
      ? [...data, { activity: "Remaining", hours: remainingHours }]
      : data;

  const chartData = {
    labels: extendedData.map((d) => d.activity),
    datasets: [
      {
        label: "Hours",
        data: extendedData.map((d) => d.hours),
        backgroundColor: extendedData.map((d, i) =>
          d.activity === "Remaining"
            ? "#E5E7EB"
            : [
                "#6366f1", "#a855f7", "#ec4899", "#f97316", "#22c55e", "#06b6d4",
                "#facc15", "#3b82f6", "#eab308", "#14b8a6", "#ef4444"
              ][i % 11]
        ),
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const chartOptions: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#4B5563",
          font: { size: 12 },
          filter: (legendItem) => legendItem.text !== "Remaining",
        },
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg transition-all duration-500 px-4 pt-4 pb-6 w-full">
      <h2 className="text-center font-poppins text-gray-800 font-semibold text-lg mb-4">
        Today’s Time Breakdown
      </h2>

      {data.length === 0 ? (
        <p className="text-center text-sm text-gray-400">
          No data added yet.
        </p>
      ) : (
        <div className="flex justify-center items-center w-full">
          <div className="relative w-full max-w-xs mx-auto aspect-square">
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeChart;
