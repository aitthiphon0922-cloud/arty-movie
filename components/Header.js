export default function Header({ onNavigate, user, onConnect }) {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold cursor-pointer" onClick={() => onNavigate('home')}>BlackKeyFlix</div>
          <nav className="hidden md:flex gap-4 text-gray-300">
            <button onClick={() => onNavigate('home')}>Home</button>
            <button onClick={() => onNavigate('categories')}>หมวดหมู่</button>
            <button onClick={() => onNavigate('liveapps')}>Live Apps</button>
            <button onClick={() => onNavigate('about')}>เกี่ยวกับเรา</button>
          </nav>
        </div>
        <div>
          {!user ? (
            <button className="bg-yellow-400 text-black px-3 py-1 rounded" onClick={onConnect}>เชื่อม Wallet</button>
          ) : (
            <div className="text-sm">{user.name} • {user.addrShort}</div>
          )}
        </div>
      </div>
    </header>
  )
}
