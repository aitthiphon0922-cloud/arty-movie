import Header from '../components/Header'

export default function Categories() {
  return (
    <div>
      <Header onNavigate={(p)=>{ if(p==='home') window.location.href='/'}} />
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">หมวดหมู่</h1>
        <div className="flex gap-2 flex-wrap mb-6">
          <span className="px-3 py-1 bg-gray-800 rounded">Action</span>
          <span className="px-3 py-1 bg-gray-800 rounded">Sci-Fi</span>
          <span className="px-3 py-1 bg-gray-800 rounded">Drama</span>
          <span className="px-3 py-1 bg-gray-800 rounded">Comedy</span>
        </div>
        <p className="text-gray-400">รายการหนัง (ตัวอย่าง)</p>
      </main>
    </div>
  )
}
