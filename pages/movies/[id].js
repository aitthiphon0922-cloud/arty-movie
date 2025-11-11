import { useRouter } from 'next/router'

const MOCK_MOVIES = [
  { id: 1, title: 'Moon Warrior', year: 2025, price_usdc: 3, duration: '1h 48m', description: 'เรื่องราวของนักรบจากดวงจันทร์ที่ต้องต่อสู้เพื่อปกป้องกาแล็กซี' },
  { id: 2, title: 'Lost in Space', year: 2023, price_usdc: 2.5, duration: '2h 01m', description: 'กลุ่มนักสำรวจอวกาศที่หลงทางในจักรวาล และต้องหาทางกลับโลก' },
  { id: 3, title: 'ล่าข้ามจักรวาล', year: 2024, price_usdc: 4, duration: '2h 15m', description: 'การผจญภัยของนักล่าอวกาศที่ต้องเผชิญหน้ากับอันตรายเหนือจินตนาการ' },
  { id: 4, title: 'รักในโลกเสมือน', year: 2025, price_usdc: 3.5, duration: '1h 55m', description: 'เมื่อสองหัวใจพบรักกันในโลก Metaverse' },
]

export default function MovieDetail() {
  const router = useRouter()
  const { id } = router.query

  const movie = MOCK_MOVIES.find(m => m.id === parseInt(id))

  if (!movie) return <div className="p-10 text-center">ไม่พบข้อมูลหนัง</div>

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title} ({movie.year})</h1>
      <div className="h-64 bg-gray-800 flex items-center justify-center mb-4">[โปสเตอร์]</div>
      <p className="text-gray-300 mb-2">{movie.duration}</p>
      <p className="text-gray-400 mb-6">{movie.description}</p>
      <div className="flex items-center justify-between">
        <div className="text-lg">{movie.price_usdc} USDC</div>
        <button className="bg-blue-600 px-4 py-2 rounded">ชำระเงินเพื่อรับชม</button>
      </div>
    </div>
  )
}
