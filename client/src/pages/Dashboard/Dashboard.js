import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosWithCredentials from "../../hooks/useAxiosWithCredentials";
import Select from 'react-select';
import Helper from '../../utils/Helper';
import { LineChart } from '../../components';
import './Dashboard.css';

const options = [
    { value: '7', label: 'Past 7 days' },
    { value: '30', label: 'Past 30 days' },
    { value: '365', label: 'Past 365 days' },
];

const getChartData = (input) => {
    const data = (!input || input?.length == 0)?null:input;

    return {
        labels: data?data.map((item) => item.date):[],
        datasets: [
            {
                label: "Energy (kWh)",
                data: data?data.map((data) => data.consumption):[],
                borderColor: "orangered",
                borderWidth: 2,
            },
        ],
    }
}

const isWithinDaysRange = (todayDate, inputDate, range) => {
    const numOfDays = Math.abs(Helper.getDaysDifference(todayDate, inputDate));
    const isValid = (numOfDays <= range) ? true : false;
    return isValid;
}

const Chart = ({ filter, data }) => {
    const [chartData, setChartData] = useState(getChartData(data));

    useEffect(() => {
        if (filter) {
            const today = Helper.getTodaysDate();
            const filteredData = data.filter(item => {
                return isWithinDaysRange(today, item.date, filter);
            });

            setChartData(getChartData(filteredData));
            return;
        }

        setChartData(getChartData(data));
    }, [data, filter]);

    return (<LineChart chartData={chartData} />);
}

const Dashboard = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const axiosWithCredentials = useAxiosWithCredentials();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axiosWithCredentials.get('/dashboard');
                setData(response.data);
            } catch (err) {
                console.error(err);
                navigate("/login", { replace: true });
                // navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getData();

        return () => { }
    }, []);


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Total Charged Energy=5988kWh
                Total Revenue=SGD 4888
                Total Charging Sessions=492 */}
            <div style={{ width: 180, margin: 40, marginRight: 15, marginBottom: 0, alignSelf: 'end' }}>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <Chart data={data} filter={selectedOption?.value} />
        </div>
    );
}

export default Dashboard;