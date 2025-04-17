import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Filters({ filters, setFilters, setIsFilterActive }) {
  const years = ["2024", "2025"];
  const [months, setMonths] = useState([]);

  useEffect(() => {
    const allMonths = [
      { label: "select Month", value: "" }, 
      ...Array.from({ length: 12 }, (_, i) => {
        const date = new Date(2000, i);
        return {
          label: date.toLocaleString("default", { month: "long" }),
          value: String(i + 1).padStart(2, "0"),
        };
      }),
    ];

    setMonths(allMonths);
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setIsFilterActive(true); 
  };

  return (
    <div>
      <label>
        Month:
        <select name="month" value={filters.month} onChange={handleChange}>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Year:
        <select name="year" value={filters.year} onChange={handleChange}>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}


Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  setIsFilterActive: PropTypes.func.isRequired,
};

export default Filters;
