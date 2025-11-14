import { useState } from 'react'
import Header from '../components/Header'

const MOCK_MOVIES = [
  { id: 1, title: 'Moon Warrior', year: 2025, price_usdc: 3, duration: '1h 48m' },
  { id: 2, title: 'Lost in Space', year: 2023, price_usdc: 2.5, duration: '2h 01m' },
  { id: 3, title: 'ล่าข้ามจักรวาล', year: 2024, price_usdc: 4, duration: '2h 15m' },
  { id: 4, title: 'รักในโลกเสมือน', year: 2025, price_usdc: 3.5, duration: '1h 55m' },
]

export default function HomePage() {
  const [route, setRoute] = useState('home')
  const [user, setUser] = useState(null)

  function navigate(page) {
    setRoute(page)
    if (page !== 'home') {
      // simple navigation: use window.location for pages in this scaffold
      if (page === 'categories') window.location.href = '/categories'
      if (page === 'liveapps') window.location.href = '/liveapps'
      if (page === 'about') window.location.href = '/about'
    }
  }

  function connectWallet() {
    // simulate wallet connect - replace with WalletConnect/MetaMask in real app
    setUser({ name: 'Arty', address: '0x123456...', addrShort: '0x1234...cdef' })
  }

  return (
    <div>
      <button onClick={() => window.location.href='/connectWallet'}>
  เชื่อมต่อกระเป๋า
</button>

      <Header onNavigate={navigate} user={user} onConnect={connectWallet} />
      <main className="container py-8">
        <section className="mb-6 p-6 rounded-lg bg-gradient-to-r from-indigo-900 via-gray-900 to-black">
          <h1 className="text-2xl font-bold">หนังแนะนำวันนี้</h1>
          <p className="text-gray-300 mt-2">จ่ายด้วย USDC / ETH / BTC</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {MOCK_MOVIES.map(m => (
            <article key={m.id} className="bg-gray-900 p-4 rounded">
              <div className="h-40 bg-gray-800 flex items-center justify-center">[โปสเตอร์]</div>
              <h3 className="mt-3 font-semibold">{m.title} <span className="text-sm text-gray-400">({m.year})</span></h3>
              <p className="text-sm text-gray-400">{m.duration}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm">{m.price_usdc} USDC</div>
                <a className="px-3 py-1 bg-blue-600 rounded" href={`/movies/${m.id}`}>ดูรายละเอียด</a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}