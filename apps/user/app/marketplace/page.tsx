"use client";
import { Layout } from "@components";
import Image from "next/image";
import React, { useState } from "react";

const Marketplace = () => {
  interface Song {
    id: number;
    image: string;
    availableNFTs: number;
    price: string;
    artist: string;
  }

  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [numberOfNFTs, setNumberOfNFTs] = useState(1);
  const [bidPrice, setBidPrice] = useState("");

  const handleBuyNowClick = (song: Song) => {
    setSelectedSong(song);
    setNumberOfNFTs(1); // Reset to 1 whenever a new song is selected
    setBidPrice(""); // Reset the bid price
  };

  const closeModal = () => {
    setSelectedSong(null);
  };

  const getPriceValue = (price: string) =>
    parseFloat(price.replace(" ETH", ""));

  const totalPrice = selectedSong
    ? getPriceValue(selectedSong.price) * numberOfNFTs
    : 0;

  return (
    <Layout>
      <div
        className="px-8"
        style={{
          fontFamily: "Aileron",
          color: "white",
        }}
      >
        <div className="grid grid-cols-3 gap-6 overflow-y-auto h-[70vh] w-[80%]">
          {songsNFT.map((song) => (
            <div key={song.id} className="flex items-center">
              <Image
                src={song.image}
                alt="Group 1"
                className="rounded-lg"
                height={160}
                width={160}
              />
              <div className="flex flex-col px-4 py-1 h-full">
                {song.availableNFTs} NFTs for sale
                <p className="text-lg font-light mt-4">Price</p>
                <p className="text-xl">{song.price}</p>
                <p className="text-sm">{song.artist}</p>
                <button
                  className="px-2 py-1 mt-2 rounded-md bg-gradient-to-tr from-blue-800 via-purple-700 to-indigo-500"
                  onClick={() => handleBuyNowClick(song)}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSong && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
          style={{
            fontFamily: "Aileron",
            color: "white",
          }}
        >
          <div
            className="bg-gray-800 p-6 rounded-md w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl mb-4">{selectedSong.artist}</h2>
            <Image
              src={selectedSong.image}
              alt="Song Image"
              className="rounded-lg"
              height={200}
              width={200}
            />
            <div className="flex flex-col mt-4">
              <p className="text-lg">Price: {selectedSong.price}</p>
              <p className="text-lg">
                Available NFTs: {selectedSong.availableNFTs}
              </p>
              <input
                type="number"
                min="1"
                max={selectedSong.availableNFTs}
                value={numberOfNFTs}
                onChange={(e) => setNumberOfNFTs(Number(e.target.value))}
                placeholder="Number of NFTs to buy"
                className="mt-4 p-2 rounded-md bg-gray-700 text-white"
              />
              <p className="text-lg mt-4">
                Total Price: {totalPrice.toFixed(3)} ETH
              </p>
              <input
                type="text"
                value={bidPrice}
                onChange={(e) => setBidPrice(e.target.value)}
                placeholder="Enter your bid price (ETH)"
                className="mt-4 p-2 rounded-md bg-gray-700 text-white"
              />
              <button
                className="px-4 py-2 mt-4 rounded-md bg-gradient-to-tr from-blue-800 via-purple-700 to-indigo-500"
                onClick={() => {
                  // Add functionality to proceed with buying
                  console.log(
                    `Buying ${numberOfNFTs} NFTs from ${selectedSong.artist} with bid price ${bidPrice || selectedSong.price}`
                  );
                  closeModal();
                }}
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Marketplace;

const songsNFT = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5A&s",
    availableNFTs: 25,
    price: "0.305 ETH",
    artist: "@larsvander",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5B&s",
    availableNFTs: 30,
    price: "0.450 ETH",
    artist: "@sophiarich",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5C&s",
    availableNFTs: 15,
    price: "0.500 ETH",
    artist: "@john_doe",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5D&s",
    availableNFTs: 50,
    price: "0.620 ETH",
    artist: "@cryptoqueen",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5E&s",
    availableNFTs: 10,
    price: "0.720 ETH",
    artist: "@eth_hunter",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5F&s",
    availableNFTs: 60,
    price: "0.815 ETH",
    artist: "@blockchainz",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5G&s",
    availableNFTs: 35,
    price: "0.945 ETH",
    artist: "@nftguy",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5H&s",
    availableNFTs: 45,
    price: "1.050 ETH",
    artist: "@ethgirl",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5I&s",
    availableNFTs: 20,
    price: "1.200 ETH",
    artist: "@soliditydev",
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5J&s",
    availableNFTs: 42,
    price: "1.500 ETH",
    artist: "@nftcollector",
  },
];
