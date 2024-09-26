"use client";
import React, { useState } from "react";

const NFTActions = () => {
  const [nftCount, setNftCount] = useState(0);
  const [currency, setCurrency] = useState("Count"); // Default is "Count"
  const [startPrice, setStartPrice] = useState(0);
  const [decreaseBy, setDecreaseBy] = useState(0);
  const [expire, setExpire] = useState(false);
  const [expirationTime, setExpirationTime] = useState({ days: 0, hours: 0 });
  const [view, setView] = useState("collection"); // Toggle between collection/individual
  const [bidTraits, setBidTraits] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("Bid"); // Toggle between Sweep, Bid, and Cancel

  // Handle NFT Count change
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNftCount(Number(e.target.value));
  };

  // Toggle between collection and individual
  const toggleView = (viewType: string) => {
    setView(viewType);
  };

  // Handle trait selection for bidding
  const toggleTrait = (trait: string) => {
    if (bidTraits.includes(trait)) {
      setBidTraits(bidTraits.filter((t) => t !== trait));
    } else {
      setBidTraits([...bidTraits, trait]);
    }
  };

  return (
    <div className=" text-white p-2 rounded-lg w-full h-screen max-w-xs mx-auto">
      <div className="flex justify-around text-lg font-normal items-center mb-6  border-b border-gray-700">
        <button>Buy</button>
        <button>Sell</button>
      </div>

      {/* Top Toggle Buttons (Sweep, Bid, Cancel) */}
      <div className="flex justify-between items-center mb-6 rounded-full border border-gray-700">
        <button
          className={`py-1 px-4 rounded-full ${activeTab === "Sweep" ? "text-white font-bold bg-gradient-to-br from-[#4A6A9B] via-[#4B27DD] to-[#5E14BC]" : "text-gray-400"}`}
          onClick={() => setActiveTab("Sweep")}
        >
          Sweep
        </button>
        <button
          className={` py-1 px-4 rounded-full ${activeTab === "Bid" ? "active bg-gradient-to-br from-[#4A6A9B] via-[#4B27DD] to-[#5E14BC]" : "text-gray-400"}`}
          onClick={() => setActiveTab("Bid")}
        >
          Bid
        </button>
        <button
          className={` py-1 px-4 rounded-full ${activeTab === "Cancel" ? " bg-gradient-to-br from-[#4A6A9B] via-[#4B27DD] to-[#5E14BC]" : "text-gray-400"}`}
          onClick={() => setActiveTab("Cancel")}
        >
          Cancel
        </button>
      </div>

      {/* Toggle between Collection/Individual */}
      <div className="flex justify-center mb-4">
        <button
          className={`text-white ${view === "collection" ? "font-bold" : "font-light"}`}
          onClick={() => toggleView("collection")}
        >
          Collection
        </button>
        <button
          className={`text-white ml-4 ${view === "individual" ? "font-bold" : "font-light"}`}
          onClick={() => toggleView("individual")}
        >
          Individual
        </button>
      </div>

      {/* NFT Count and Price Inputs */}
      <div className="flex flex-col mb-4">
        <label className="text-lg">NFTs To Buy</label>
        <div className="flex items-center justify-center">
          <input
            type="range"
            min="0"
            max="100"
            value={nftCount}
            onChange={handleCountChange}
            className="slider w-2/3"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={nftCount}
            onChange={handleCountChange}
            className="ml-2 w-1/3 text-center rounded-lg bg-transparent border"
          />
        </div>
      </div>

      {/* Start Price */}
      <div className="flex flex-col mb-4">
        <label className="text-lg">Start Price</label>
        <input
          type="number"
          min="0"
          value={startPrice}
          onChange={(e) => setStartPrice(Number(e.target.value))}
          className="bg-transparent border w-full text-center rounded-lg"
        />
      </div>

      {/* Decrease By */}
      <div className="flex flex-col mb-4">
        <label className="text-lg">Decrease By</label>
        <input
          type="number"
          min="0"
          value={decreaseBy}
          onChange={(e) => setDecreaseBy(Number(e.target.value))}
          className="bg-transparent border w-full text-center rounded-lg"
        />
      </div>

      {/* Expiration Toggle */}
      <div className="flex items-center mb-4">
        <label className="text-lg mr-2">Expire</label>
        <input
          type="checkbox"
          checked={expire}
          onChange={() => setExpire(!expire)}
          className="w-4 h-4"
        />
        {expire && (
          <div className="ml-4 flex space-x-2">
            <input
              type="number"
              min="0"
              placeholder="DD"
              value={expirationTime.days}
              onChange={(e) =>
                setExpirationTime({
                  ...expirationTime,
                  days: Number(e.target.value),
                })
              }
              className="text-black w-12 text-center rounded-lg"
            />
            <input
              type="number"
              min="0"
              placeholder="HH"
              value={expirationTime.hours}
              onChange={(e) =>
                setExpirationTime({
                  ...expirationTime,
                  hours: Number(e.target.value),
                })
              }
              className="text-black w-12 text-center rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Trait Bidding (For Collection View) */}
      {view === "collection" && (
        <div className="mb-4">
          <label className="text-lg">Bid on traits</label>
          <div className="flex flex-wrap mt-2">
            {["Pop", "Rock", "Metal", "Indie"].map((trait) => (
              <button
                key={trait}
                onClick={() => toggleTrait(trait)}
                className={`px-2 py-1 m-1 rounded-lg ${
                  bidTraits.includes(trait) ? "bg-purple-500" : "bg-gray-700"
                }`}
              >
                {trait}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sweep/Bid/Cancel Buttons */}
      <div className="text-center mb-8">
        {activeTab === "Bid" && (
          <button className="w-full py-2 bg-gradient-to-br from-[#4A6A9B] via-[#4B27DD] to-[#5E14BC] rounded-full">
            {view === "collection" && bidTraits.length > 0
              ? `Bid on ${nftCount} NFTs`
              : `Bid on ${nftCount} NFTs For ${
                  currency === "Count" ? nftCount : (nftCount * 0.05).toFixed(2)
                } ${currency}`}
          </button>
        )}
        {activeTab === "Cancel" && (
          <button className="w-full py-2 bg-gradient-to-br from-[#4A6A9B] via-[#4B27DD] to-[#5E14BC] rounded-full">
            Cancel Bids on {nftCount} NFTs
          </button>
        )}
      </div>

      {/* Filters Button */}
      <div className="text-center">
        <button className="bg-gray-800 py-2 px-6 rounded-lg flex items-center justify-center space-x-2">
          <span>Filters</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NFTActions;
