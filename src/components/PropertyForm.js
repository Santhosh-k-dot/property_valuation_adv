import React, { useState } from 'react';

// Location data for dropdowns
const locations = {
  Karnataka: {
    Bengaluru: {
      Residential: ['Koramangala', 'Whitefield', 'Indiranagar', 'Jayanagar', 'HSR Layout'],
      Commercial: ['MG Road', 'Electronic City', 'Outer Ring Road', 'Bannerghatta Road', 'Yeshwanthpur'],
    },
    Mysuru: {
      Residential: ['VV Mohalla', 'Gokulam', 'Jayalakshmipuram', 'Siddhartha Layout', 'Kuvempunagar'],
      Commercial: ['Devaraja Mohalla', 'Metagalli', 'KRS Road', 'Industrial Area', 'Hebbal Industrial Estate'],
    },
  },
  Maharashtra: {
    Mumbai: {
      Residential: ['South Mumbai', 'Bandra', 'Juhu', 'Powai', 'Goregaon'],
      Commercial: ['Lower Parel', 'BKC (Bandra Kurla Complex)', 'Andheri East', 'Vikhroli', 'Malad West'],
    },
    Pune: {
      Residential: ['Kothrud', 'Baner', 'Viman Nagar', 'Koregaon Park', 'Wakad'],
      Commercial: ['Hinjewadi', 'Kharadi', 'Magarpatta', 'Shivaji Nagar', 'Yerawada'],
    },
  },
  // Chandigarh: {
  //   Zirakpur: {
  //     Residential: ['Sushma Downtown', 'Sushma Crescent'],
  //     Commercial: [], // Add commercial areas if applicable
  //   },
  //   Chandigarh: {
  //     Residential: [],
  //     Commercial: ['Sector 17', 'Sector 22'],
  //   },
  // },
};

const PropertyForm = ({ size, setSize, propertyType, setPropertyType, state, setState, city, setCity, area, setArea, secondArea, setSecondArea }) => {
  const [showMap, setShowMap] = useState(false);
  const [mapSrc, setMapSrc] = useState('');

  // Handle state change
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setCity('');
    setArea('');
    setSecondArea('');
    setMapSrc(''); // Reset map source on state change
  };

  // Handle city change
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setArea('');
    setSecondArea('');
    setMapSrc(''); // Reset map source on city change
  };

  // Compare areas selected
  const compareAreas = () => {
    if (area && secondArea) {
      return area === secondArea ? 'Both areas are the same.' : `You selected ${area} and ${secondArea}.`;
    }
    return '';
  };

  return (
    <form className="p-2 bg-light rounded shadow-sm d-flex flex-column align-items-center" style={{ width: '100%' }}>
      {/* Property Size Input */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="size" className="small mb-1">Property Size (sq ft)</label>
        <input
          type="number"
          id="size"
          className="form-control"
          min="500"
          max="5000"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={{ height: '45px' }}
          placeholder="Enter size (500 - 5000 sq ft)"
          required
        />
        <p className="text-center mt-1 small">{size} sq ft</p>
      </div>

      {/* State Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="state" className="small mb-1">State</label>
        <select
          id="state"
          className="form-control"
          value={state}
          onChange={handleStateChange}
          style={{ height: '45px' }}
          required
        >
          <option value="">Select State</option>
          {Object.keys(locations).map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* City Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="city" className="small mb-1">City</label>
        <select
          id="city"
          className="form-control"
          value={city}
          onChange={handleCityChange}
          style={{ height: '45px' }}
          disabled={!state}
          required
        >
          <option value="">Select City</option>
          {state && Object.keys(locations[state]).map((cityName) => (
            <option key={cityName} value={cityName}>{cityName}</option>
          ))}
        </select>
      </div>

      {/* Property Type Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="propertyType" className="small mb-1">Property Type</label>
        <select
          id="propertyType"
          className="form-control"
          value={propertyType}
          onChange={(e) => {
            setPropertyType(e.target.value);
            setArea('');
            setSecondArea('');
          }}
          style={{ height: '45px' }}
        >
          <option value="">Select Property Type</option>
          <option value="Commercial">Commercial</option>
          <option value="Residential">Residential</option>
        </select>
      </div>

      {/* First Area Select */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="area" className="small mb-1">First Area</label>
        <select
          id="area"
          className="form-control"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          style={{ height: '45px' }}
          disabled={!city || !propertyType}
          required
        >
          <option value="">Select First Area</option>
          {city && propertyType && locations[state][city][propertyType].map((areaName) => (
            <option key={areaName} value={areaName}>{areaName}</option>
          ))}
        </select>
      </div>

      {/* Conditional Rendering for Embedded Location Map */}
      {showMap && (
        <div className="mt-2 mb-3">
          {mapSrc && (
            <iframe
              src={mapSrc}
              width="700"
              height="400"
              frameBorder="0"
              style={{ border: 0, pointerEvents: 'auto' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          )}
        </div>
      )}

      {/* Second Area Select (Optional) */}
      <div className="form-group mb-2 w-100">
        <label htmlFor="secondArea" className="small mb-1">Second Area (Optional)</label>
        <select
          id="secondArea"
          className="form-control"
          value={secondArea}
          onChange={(e) => setSecondArea(e.target.value)}
          style={{ height: '45px' }}
          disabled={!city || !propertyType || !area}
        >
          <option value="">Select Second Area</option>
          {city && propertyType && locations[state][city][propertyType].map((areaName) => (
            <option key={areaName} value={areaName}>{areaName}</option>
          ))}
        </select>
      </div>

      {/* Comparison Result */}
      <div className="mt-2">
        <p>{compareAreas()}</p>
      </div>
    </form>
  );
};

export default PropertyForm;
