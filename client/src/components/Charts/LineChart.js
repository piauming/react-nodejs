import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData }) => {
    return (
        <div style={{ width: 'calc(100%-20px)', margin: 20}}>
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