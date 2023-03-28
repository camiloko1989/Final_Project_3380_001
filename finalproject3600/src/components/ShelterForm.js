import { useState } from "react";

const categories = [
  "Adults (all genders)",
  "Youth (all genders)",
  "Men",
  "Women",
];

const supports = [
  { id: 1, name: "Meals" },
  { id: 2, name: "Pets" },
  { id: 3, name: "Carts" },
];

const toggleOption = (options, id, checked) => {
  options.map((option) => (option.id === id ? { ...option, checked } : option));
};

function uncheckAll(options) {
  return options.map((option) => ({
    ...option,
    checked: false,
  }));
}

function ShelterForm() {
  const [facilityName, setFacilityName] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [phone, setPhone] = useState("");
  const [support, setSupport] = useState(uncheckAll(supports));

  const changeList = (id, checked) => {
    const newCheckedList = toggleOption(id, checked);
    setSupport(newCheckedList);
  };

  return (
    <form className="shelter-card">
      <div className="form-group">
        <label htmlFor="facilityName">Facility Name</label>
        <input
          type="text"
          className="form-control"
          id="facilityName"
          name="facilityName"
          placeholder="e.g. Tenth Avenue Church"
          onChange={(e) => setFacilityName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          className="form-select"
          value={category}
          onchange={(e) => setCategory(e.target.value)}
        >
          {categories.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="e.g. 234-567-8901"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="support">Support</label>
        <br />
        {supports.map(({ id, name, checked }) => (
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              checked={checked}
              value={name}
              onChange={(e) => changeList(id, e.target.checked)}
            />
            <label className="form-check-label" key={id}>
              {name}
            </label>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="area">Local Area</label>
        <input
          type="text"
          className="form-control"
          id="area"
          placeholder="e.g. Downtown, Strathcona, etc."
        />
      </div>

      <div className="form-group">
        <label>Geographic Coordinate (if available)</label>
        <input
          type="number"
          className="form-control"
          id="lat"
          placeholder="Lat"
        />
        <input
          type="number"
          step="0.1"
          className="form-control"
          id="lon"
          placeholder="Lon"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Shelter
      </button>
    </form>
  );
}

export default ShelterForm;
