import Header from '../components/Header'

export default function Profile() {
  return (
    <div>
      <Header onNavigate={(p)=>{ if(p==='home') window.location.href='/'}} />
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">โปรไฟล์</h1>
        <p className="text-gray-400">(ข้อมูลผู้ใช้, ประวัติการชำระ และดาวน์โหลด APK จะแสดงที่นี่ เมื่อเชื่อมกับ backend)</p>
      </main>
    </div>
  )
}
