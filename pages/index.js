import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MintPage() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  // ฟังก์ชันเชื่อมต่อกระเป๋า
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("ไม่พบกระเป๋า MetaMask บนเบราว์เซอร์");
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      alert("เชื่อมต่อกระเป๋าไม่สำเร็จ");
    }
  };

  // ฟังก์ชัน Mint (ตัวอย่าง)
  const handleMint = async () => {
    if (!account) {
      alert("กรุณาเชื่อมต่อกระเป๋าก่อน");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Mint สำเร็จแล้ว!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-center"
          >
            Mint NFT
          </motion.h1>

          {/* ปุ่มเชื่อมต่อกระเป๋า */}
          <Button
            onClick={connectWallet}
            className="w-full py-3 text-lg rounded-xl"
          >
            {account ? `เชื่อมต่อแล้ว: ${account.substring(0, 6)}...` : "เชื่อมต่อกระเป๋า"}
          </Button>

          {/* ปุ่ม Mint */}
          <Button
            onClick={handleMint}
            className="w-full py-3 text-lg rounded-xl"
            disabled={loading}
          >
            {loading ? "กำลัง Mint..." : "Mint เลย"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
