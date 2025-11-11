import Header from '../components/Header'

export default function About() {
  return (
    <div>
      <Header onNavigate={(p)=>{ if(p==='home') window.location.href='/'}} />
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">เกี่ยวกับ BlackKeyFlix</h1>
        <p className="text-gray-400">แพลตฟอร์มทดลองรับชำระด้วยคริปโต — จ่ายแล้วดูได้ทันที</p>
      </main>
    </div>
  )
}
