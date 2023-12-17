// src/components/FilterSection.js
import React, { useEffect } from 'react';
import "./filter.css"
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../redux/actions/userActions';
import { setDomainFilter, setGenderFilter, setAvailabilityFilter } from '../redux/actions/filterActions';
import { resetPage } from "../redux/actions/pagerAction";

const FilterSection = () => {
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.pager.page);
  const selectedFilters = useSelector((state) => state.filters);

  // Function to handle checkbox changes
  const handleCheckboxChange = (filterType, value) => {
    dispatch(resetPage());
    const existingValues = selectedFilters[filterType];
    const updatedValues = existingValues.includes(value)
      ? existingValues.filter((v) => v !== value) // Remove value if already exists
      : [...existingValues, value]; // Add value if not exists

    // Dispatch the corresponding action based on the filter type
    if (filterType === "domain") {
      dispatch(setDomainFilter(updatedValues));
    }
    if (filterType === "gender") {
      dispatch(setGenderFilter(updatedValues));
    }
    if (filterType === "available") {
      dispatch(setAvailabilityFilter(updatedValues));
    }
  };

  // Function to render checkbox group
  const renderCheckboxGroup = (filterType, options) => (
    <div className={`col-3 filter ${filterType}`} key={filterType}>
      {options.map((option) => (
        <div className="form-check" key={option}>
          <input
            type="checkbox"
            id={`${filterType}-${option}`}
            className="form-check-input"
            onChange={() => handleCheckboxChange(filterType, option)}
            checked={selectedFilters[filterType].includes(option)}
          />
          <label htmlFor={`${filterType}-${option}`} className="form-check-label">
            {option}
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="filters">
      <h5>Domain Filter</h5>
      {/* Domain filter */}
      {renderCheckboxGroup("domain", [
        "Business Development",
        "Finance",
        "IT",
        "Management",
        "Marketing",
        "Sales",
        "UI Designing",
      ])}

      {/* Gender filter */}
      <h5>Gender Filter</h5>
      {renderCheckboxGroup("gender", [
        "Male",
        "Female",
        "Agender",
        "Bigender",
        "Genderfluid",
        "Genderqueer",
        "Non-binary",
        "Polygender",
      ])}

      {/* Availability filter */}
      <h5>Availability Filter</h5>
      {renderCheckboxGroup("available", ["true","false"])}
    </div>
  );
};

export default FilterSection;
