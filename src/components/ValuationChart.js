import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ValuationChart = ({ size, propertyType, state, city, area, secondArea }) => {
  // Property price data for different areas
  const priceData = {
    Residential: {
      Karnataka: {
        Bengaluru: {
          Koramangala: 15000,
          Whitefield: 10500,
          Indiranagar: 14000,
          Jayanagar: 12000,
          "HSR Layout": 10000,
        },
        Mysuru: {
          "VV Mohalla": 7500,
          Gokulam: 6500,
          Jayalakshmipuram: 7200,
          "Siddhartha Layout": 5800,
          Kuvempunagar: 6200,
        },
      },
      Maharashtra: {
        Mumbai: {
          "South Mumbai": 60000,
          Bandra: 45000,
          Juhu: 42000,
          Powai: 30000,
          Goregaon: 28000,
        },
        Pune: {
          Kothrud: 15000,
          Baner: 14000,
          "Viman Nagar": 14500,
          "Koregaon Park": 20000,
          Wakad: 12000,
        },
      },
      Chandigarh: {
        Zirakpur: {
          "Sushma Downtown": 6500, // Updated value
          "Sushma Crescent": 6000, // Updated value
          "Sushma Pristine": 7000,  // New area added
        },
      },
    },
    Commercial: {
      Karnataka: {
        Bengaluru: {
          "MG Road": 25000,
          "Electronic City": 12000,
          "Outer Ring Road": 18000,
          "Bannerghatta Road": 16000,
          "HSR Layout": 12000,
          Yeshwanthpur: 14000,
        },
        Mysuru: {
          "Devaraja Mohalla": 12000,
          "Metagalli": 9000,
          "KRS Road": 10000,
          "Industrial Area": 8500,
          "Hebbal Industrial Estate": 9500,
        },
      },
      Maharashtra: {
        Mumbai: {
          "Lower Parel": 50000,
          "BKC (Bandra Kurla Complex)": 70000,
          "Andheri East": 32000,
          "Vikhroli": 28000,
          "Malad West": 25000,
        },
        Pune: {
          "Hinjewadi": 16000,
          "Kharadi": 18000,
          "Magarpatta": 20000,
          "Shivaji Nagar": 21000,
          "Yerawada": 15000,
        },
      },
      Chandigarh: {
        Zirakpur: {
          "Sushma Pristine": 11000, // Updated value
          "Sushma Crescent": 9500,  // Updated value
        },
      },
    },
  };

  const basePricePerSqFt = priceData[propertyType]?.[state]?.[city]?.[area];
  const secondBasePricePerSqFt = priceData[propertyType]?.[state]?.[city]?.[secondArea];

  const baseValue = basePricePerSqFt ? size * basePricePerSqFt : 0;
  const secondBaseValue = secondBasePricePerSqFt ? size * secondBasePricePerSqFt : 0;

  // Generate x-axis labels based on the size
  const xAxisLabels = Array.from({ length: 5 }, (_, i) => (i * size) / 4); // Generate values like 0, 25%, 50%, 75%, 100%

  // Calculate values for both areas at each x-axis point
  const data = {
    labels: xAxisLabels.map(value => `${value.toFixed(0)} sq.ft`), // Display size in sq.ft
    datasets: [
      {
        label: `Valuation for ${area}`,
        data: xAxisLabels.map(value => (value / size) * baseValue), // Linear scaling of value
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: `Valuation for ${secondArea}`,
        data: xAxisLabels.map(value => (value / size) * secondBaseValue), // Linear scaling of value
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Size (sq.ft)',
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: Math.max(baseValue, secondBaseValue) / 5 || 1, // Dynamically adjust the step size
          color: '#333',
        },
        title: {
          display: true,
          text: 'Valuation (₹)',
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: (context) => {
            const sizeLabel = context.label;
            const valuation = context.raw.toLocaleString();
            return `${context.dataset.label}: ₹${valuation} (Size: ${sizeLabel})`;
          },
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '20px', fontSize: '22px', fontWeight: 'bold' }}>
        Estimated Property Valuation Chart
      </h3>
      <Line data={data} options={options} />
      <div style={{ marginTop: '20px', textAlign: 'center', color: '#333', fontSize: '16px' }}>
        <p><strong>State:</strong> {state}, <strong>City:</strong> {city}</p>
        <p><strong>Valuation (Area 1 - {area}):</strong> ₹{baseValue.toLocaleString()} (for {size} sq.ft)</p>
        <p><strong>Valuation (Area 2 - {secondArea}):</strong> ₹{secondBaseValue.toLocaleString()} (for {size} sq.ft)</p>
      </div>
    </div>
  );
};

export default ValuationChart;
