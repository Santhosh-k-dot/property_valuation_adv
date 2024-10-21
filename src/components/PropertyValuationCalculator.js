import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import ValuationResult from './ValuationResult';
import ValuationChart from './ValuationChart';
import { Modal, Button } from 'react-bootstrap';
import '../styles/PropertyValuationCalculator.css';

const PropertyValuationCalculator = () => {
  const [size, setSize] = useState(1000); // Default size
  const [propertyType, setPropertyType] = useState('Residential'); // Default property type
  const [valuation, setValuation] = useState(0);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [secondArea, setSecondArea] = useState(''); // Added second area
  const [showModal, setShowModal] = useState(false);
  const [chartVisible, setChartVisible] = useState(false); // State for chart visibility

  // Area-wise price data for Residential and Commercial properties
  const priceData = {
    Karnataka: {
      Bengaluru: {
        "Koramangala": 15000,
        "Whitefield": 10500,
        "Indiranagar": 14000,
        "Jayanagar": 12000,
        "HSR Layout": 10000,
        "MG Road": 25000,
        "Electronic City": 12000,
        "Outer Ring Road": 18000,
        "Bannerghatta Road": 16000,
        "Yeshwanthpur": 14000,
      },
      Mysuru: {
        "VV Mohalla": 7500,
        "Gokulam": 6500,
        "Jayalakshmipuram": 7200,
        "Siddhartha Layout": 5800,
        "Kuvempunagar": 6200,
        "Devaraja Mohalla": 12000,
        "Metagalli": 9000,
        "KRS Road": 10000,
        "Industrial Area": 8500,
        "Hebbal Industrial Estate": 9500,
      },
    },
    Chandigarh: {
      Zirakpur: {
        "Sushma Downtown": 6000,
        "Sushma Crescent": 5500,
      },
      Chandigarh: {
        "Sector 17": 9000,
        "Sector 22": 8500,
      },
    },
    Maharashtra: {
      Mumbai: {
        "South Mumbai": 60000,
        "Bandra": 45000,
        "Juhu": 42000,
        "Powai": 30000,
        "Goregaon": 28000,
        "Lower Parel": 50000,
        "BKC (Bandra Kurla Complex)": 70000,
        "Andheri East": 32000,
        "Vikhroli": 28000,
        "Malad West": 25000,
      },
      Pune: {
        "Kothrud": 15000,
        "Baner": 14000,
        "Viman Nagar": 14500,
        "Koregaon Park": 20000,
        "Wakad": 12000,
        "Hinjewadi": 16000,
        "Kharadi": 18000,
        "Magarpatta": 20000,
        "Shivaji Nagar": 21000,
        "Yerawada": 15000,
      },
    },
  };

  // Calculate property valuation based on size and base price per square foot
  const calculateValuation = () => {
    if (!state || !city || !area || !secondArea) {
      alert("Please select a valid state, city, and area.");
      return;
    }

    const basePricePerSqFt = priceData[state]?.[city]?.[area];
    const secondAreaPricePerSqFt = priceData[state]?.[city]?.[secondArea];

    if (!basePricePerSqFt || !secondAreaPricePerSqFt) {
      alert("Data not available for the selected area(s).");
      return;
    }

    const baseValue = size * basePricePerSqFt;
    const secondAreaValue = size * secondAreaPricePerSqFt;

    // Average the valuations from both areas
    const totalValuation = (baseValue + secondAreaValue) / 2;
    setValuation(totalValuation);
    setChartVisible(true); // Show the chart after calculation
  };

  // Handlers for showing and closing the modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setChartVisible(false); // Reset chart visibility when closing modal
  };

  return (
    <div className="container mt-3">
      <Button variant="primary" onClick={handleShow}>
        Open Property Valuation Calculator
      </Button>

      <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Property Valuation Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="calculator-container p-4">
            <h1 className="text-center mb-4">Property Valuation Calculator</h1>
            <div className="row">
              <div className="col-md-5">
                <PropertyForm
                  size={size}
                  setSize={setSize}
                  propertyType={propertyType}
                  setPropertyType={setPropertyType}
                  state={state}
                  setState={setState}
                  city={city}
                  setCity={setCity}
                  area={area}
                  setArea={setArea}
                  secondArea={secondArea} // Pass secondArea prop
                  setSecondArea={setSecondArea} // Add setter for second area
                />
                <Button
                  className="btn btn-primary mt-3 w-100"
                  onClick={calculateValuation}
                >
                  Calculate Valuation
                </Button>
              </div>
              <div className="col-md-7">
                <ValuationResult valuation={valuation} />
                {chartVisible && ( // Conditionally render the chart
                  <ValuationChart
                    valuation={valuation}
                    size={size}
                    propertyType={propertyType}
                    state={state}
                    city={city}
                    area={area}
                    secondArea={secondArea} // Pass secondArea to the chart
                  />
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PropertyValuationCalculator;
