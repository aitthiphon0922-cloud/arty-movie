import Header from '../components/Header'

export default function Watch() {
  return (
    <div>
      <Header onNavigate={(p)=>{ if(p==='home') window.location.href='/'}} />
      <main className="container py-8">
        <h1 className="text-2xl font-bold">Watch</h1>
        <div className="mt-4 bg-black rounded aspect-video flex items-center justify-center text-gray-400">[Player จะอยู่ที่นี่ เมื่อมี token และ signed URL]</div>
      </main>
    </div>
  )
}
