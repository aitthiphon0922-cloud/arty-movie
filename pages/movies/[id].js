import { useRouter } from 'next/router'
import Header from '../../components/Header'

const MOVIES = [
  { id: 1, title: 'Moon Warrior', price_usdc: 3, price_eth: '0.0012', price_btc: '0.00004' },
  { id: 2, title: 'Lost in Space', price_usdc: 2.5, price_eth: '0.0009', price_btc: '0.00003' },
]

export default function MovieDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const movie = MOVIES.find(m => String(m.id) === String(id))
  return (
    <div>
      <Header onNavigate={(p)=>{ if(p==='home') window.location.href='/'}} />
      <main className="container py-8">
        {!movie ? <p>Loading...</p> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded p-4">[โปสเตอร์ใหญ่]</div>
            <div className="md:col-span-2 text-gray-200">
              <h1 className="text-2xl font-bold">{movie.title}</h1>
              <p className="mt-3">ราคา: {movie.price_usdc} USDC • {movie.price_eth} ETH • {movie.price_btc} BTC</p>
              <div className="mt-4 flex gap-2">
                <button onClick={()=>alert('จำลองชำระด้วย USDC (เชื่อม NOWPayments ในขั้นต่อไป)')} className="px-3 py-1 bg-yellow-500 rounded text-black">จ่ายด้วย USDC</button>
                <button onClick={()=>alert('จำลองชำระด้วย ETH')} className="px-3 py-1 bg-green-600 rounded">จ่ายด้วย ETH</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
