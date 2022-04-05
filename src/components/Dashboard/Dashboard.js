import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { AreaChart } from 'recharts';

const Dashboard = () => {
    // const [chart, setChart] = useState([])
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setChart(data))

    // }, [])
    // console.log({ chart })
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='grid md:grid-cols-2 mt-5'>
            <div>
                <LineChart width={400} height={500} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="sell"></YAxis>
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <AreaChart width={500}
                    height={500}
                    data={data}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="investment"></YAxis>
                    <Tooltip />
                </AreaChart>
            </div>
        </div>

    );
};

export default Dashboard;