import React, { useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

// Sample addresses for Tashkent city
const tashkentAddresses = [
  "Address 1, Tashkent",
  "Address 2, Tashkent",
  "Address 3, Tashkent",
  // Add more addresses as needed
];

export const SendProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle input change and filter addresses
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Filter addresses based on the query
    const filteredAddresses = tashkentAddresses.filter((address) =>
      address.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredAddresses);
  };

  // Function to handle clearing input
  const handleClearInput = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Function to handle selecting an address
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  // Function to handle clicking the button
  const handleButtonClick = () => {
    // Perform the action when the button is clicked, for example, save the selected address
    if (selectedAddress) {
      // Perform the action here (e.g., save the selected address)
      console.log("Selected address:", selectedAddress);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4 flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="mt-1 relative right-6 top-5 w-[555px] h-[50px] shadow-sm sm:text-sm border-[1px] rounded-lg p-4"
          placeholder="Yetkazib berish manzili"
        />
        {searchQuery && (
          <ClearOutlinedIcon
            className="mt-9 right-16 relative text-gray-700 cursor-pointer"
            onClick={handleClearInput}
          />
        )}
      </div>

      {/* Render search results as select options */}
      {searchResults.length > 0 && (
        <select
          value={selectedAddress}
          onChange={(e) => handleSelectAddress(e.target.value)}
          className="mb-4 w-[495px] h-[50px] shadow-sm sm:text-sm border-[1px] rounded-lg p-4"
        >
          <option value="">Select an address</option>
          {searchResults.map((address, index) => (
            <option key={index} value={address}>
              {address}
            </option>
          ))}
        </select>
      )}

      <button
        className={`bg-slate-300 w-[470px] top-56 relative h-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl ${
          !selectedAddress && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleButtonClick}
        disabled={!selectedAddress}
      >
        Find Addresses
      </button>
    </div>
  );
};
