import { useState } from "react";
import Header from "../components/Header";  
import { motion } from "framer-motion";

// Mock data หนัง
const MOCK_MOVIES = [
  { id: 1, title: "หนังแนะนำวันนี้", year: 2024, duration: "120 นาที", price_usdc: 5 },
  { id: 2, title: "สงครามดวงดาว", year: 2023, duration: "90 นาที", price_usdc: 3 },
  { id: 3, title: "รักหมดใจในคืนเดียว", year: 2022, duration: "110 นาที", price_usdc: 4 },
];

export default function HomePage() {
  const [account, setAccount] = useState(null);

  // ฟังก์ชันเชื่อมต่อกระเป๋า
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("ไม่พบกระเป๋า MetaMask บนบราวเซอร์");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      alert("เชื่อมต่อสำเร็จ!");
    } catch (error) {
      console.error(error);
      alert("เชื่อมต่อกระเป๋าไม่สำเร็จ");
    }
  };

  return (
    <div className="container py-8">
      
      {/* Header */}
      <Header user={{ address: account }} onConnect={connectWallet} />

      {/* ปุ่มเชื่อมต่อกระเป๋า */}
      <div className="flex justify-center my-6">
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
        >
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "🔗 เชื่อมต่อกระเป๋า"}
        </button>
      </div>

      {/* ส่วนหัว */}
      <section className="mb-6 p-6 rounded-lg bg-gradient-to-r from-indigo-900 via-gray-900 to-black text-center">
        <h1 className="text-2xl font-bold text-white">หนังแนะนำวันนี้</h1>
        <p className="text-gray-300 mt-2">จ่ายด้วย USDC / ETH / BTC</p>
      </section>

      {/* ลิสต์หนัง */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {MOCK_MOVIES.map((m) => (
          <article key={m.id} className="bg-gray-900 p-4 rounded-lg shadow-lg">
            
            <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-400">
              [โปสเตอร์]
            </div>

            <h3 className="mt-3 font-semibold text-white">
              {m.title} <span className="text-sm text-gray-400">({m.year})</span>
            </h3>

            <p className="text-sm text-gray-400">{m.duration}</p>

            <div className="mt-3 flex items-center justify-between text-white">
              <div className="text-sm">{m.price_usdc} USDC</div>
              <a
                className="px-3 py-1 bg-blue-600 rounded text-white text-sm hover:bg-blue-700"
                href={`/movies/${m.id}`}
              >
                ดูรายละเอียด
              </a>
            </div>

          </article>
        ))}
      </section>

    </div>
  );
}
