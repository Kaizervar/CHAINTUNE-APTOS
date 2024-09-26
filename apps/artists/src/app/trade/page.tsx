"use client";
import { Layout, ReleaseOptions } from "@/components";
import React from "react";
import { Container } from "../../../styles/ReleaseOptions/style";
import Image from "next/image";
import NFTActions from "@/components/NFTActions";

const Trade = () => {
  return (
    <Layout>
      <div
        style={{
          fontFamily: "Aileron",
          color: "white",
        }}
      >
        <div className="flex gap-3">
          <div className="w-[20%] rounded-xl bg-zinc-900 px-6 py-2">
            <NFTActions />
          </div>
          <div className="w-[80%] flex gap-4 flex-col p-4">
            <div className=" flex gap-2 justify-between rounded-xl">
              <div className="flex gap-4">
                <div className="relative h-[60px] w-[60px] object-contain overflow-hidden rounded-full">
                  <Image
                    src={
                      "https://facts.net/wp-content/uploads/2023/07/34-facts-about-chris-martin-1689126152.jpg"
                    }
                    alt="Avatar"
                    fill={true}
                  />
                </div>

                <span>
                  <p className="text-3xl"> Flume</p>
                  <p>Socials</p>
                </span>
              </div>
              <span className="flex flex-col">
                <p className="text-purple-600">Buy now</p> <p>30$</p>
              </span>
              <span className="flex flex-col">
                <p className="text-orange-500">Sell now</p> <p>30$</p>
              </span>
              <span className="flex flex-col">
                <p>Listed Supply</p> <p>30$</p>
              </span>
              <span className="flex flex-col">
                <p>Volume</p> <p>30$</p>
              </span>
              <span className="flex flex-col">
                <p>Sales</p> <p>30$</p>
              </span>
              <span className="flex flex-col">
                <p>Price</p> <p>30$</p>
              </span>
            </div>
            <div className="flex justify-between rounded-xl">
              <div className="flex gap-4 border-b-2">
                <span> Items</span>
                <span> Bids</span>
                <span> Orders</span>
                <span> Price lock</span>
                <span> Trade</span>
                <span> Hodlers</span>
              </div>
              <div className="bg-gradient-to-b from-blue-700 to-violet-700 rounded-full px-4 py-0.5">
                Collection bid
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
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
                    {song.details.rank}
                    <p className="text-lg font-light mt-10">Last sold</p>
                    <p className="text-xl">{song.details.lastSold}</p>
                    <p className="text-sm">{song.details.owner}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trade;

const songsNFT = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5A&s",
    details: {
      rank: "#1",
      lastSold: "0.305 ETH",
      owner: "@larsvander",
    },
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5B&s",
    details: {
      rank: "#2",
      lastSold: "0.450 ETH",
      owner: "@sophiarich",
    },
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5C&s",
    details: {
      rank: "#3",
      lastSold: "0.500 ETH",
      owner: "@john_doe",
    },
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5D&s",
    details: {
      rank: "#4",
      lastSold: "0.620 ETH",
      owner: "@cryptoqueen",
    },
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5E&s",
    details: {
      rank: "#5",
      lastSold: "0.720 ETH",
      owner: "@eth_hunter",
    },
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5F&s",
    details: {
      rank: "#6",
      lastSold: "0.815 ETH",
      owner: "@blockchainz",
    },
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5G&s",
    details: {
      rank: "#7",
      lastSold: "0.945 ETH",
      owner: "@nftguy",
    },
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5H&s",
    details: {
      rank: "#8",
      lastSold: "1.050 ETH",
      owner: "@ethgirl",
    },
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5I&s",
    details: {
      rank: "#9",
      lastSold: "1.200 ETH",
      owner: "@soliditydev",
    },
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBC_lIOcb7KEwDjkgzScopAIsy22ddtwy5J&s",
    details: {
      rank: "#10",
      lastSold: "1.500 ETH",
      owner: "@nftcollector",
    },
  },
];
