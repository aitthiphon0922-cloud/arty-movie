import Header from '../components/Header'

const LIVE_APPS = [
  { id: 'app1', name: 'Bigo Live (APK)', price_usdc: 1, size: '32 MB' },
  { id: 'app2', name: 'MICO (APK)', price_usdc: 1.5, size: '28 MB' },
  { id: 'app3', name: '19Live (APK)', price_usdc: 2, size: '40 MB' },
]

export default function LiveApps() {
  return (
    <div>
      <Header onNavigate={(p)=>{ if(p==='home') window.location.href='/'}} />
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Live Streaming Apps (.APK)</h1>
        <p className="text-gray-400 mb-4">ดาวน์โหลดไฟล์ .APK — ปลดล็อกด้วย USDC / ETH / BTC (จำลอง)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LIVE_APPS.map(a => (
            <div key={a.id} className="bg-gray-900 p-4 rounded">
              <h3 className="font-semibold">{a.name}</h3>
              <p className="text-sm text-gray-400">ขนาด: {a.size}</p>
              <div className="mt-3 flex justify-between items-center">
                <div className="text-sm">{a.price_usdc} USDC</div>
                <button className="px-3 py-1 bg-yellow-500 text-black rounded" onClick={()=>alert('จำลองปลดล็อก + ดาวน์โหลด (ต้องเชื่อม wallet และระบบจริง)')}>Unlock</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
