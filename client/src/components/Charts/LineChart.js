import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData }) => {
    return (
        <div style={{ width: '100%', margin: 20}}>
            <Line
                data={chartData}
                options={{ maintainAspectRatio: false }}
                width={100}
                height={500}

            />
        </div>
    );
}

export default LineChart;