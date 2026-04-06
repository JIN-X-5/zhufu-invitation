import Reveal from "@/components/Reveal";

export default function MemberLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FDFBF7] py-40 px-10">
      <Reveal className="w-full max-w-md bg-white p-12 shadow-sm border border-zinc-100">
        <header className="text-center mb-10">
          <span className="font-serif text-[11px] tracking-[0.4em] text-[#B09B82] uppercase mb-4 block">
            Member Portal
          </span>
          <h1 className="font-serif-tc text-3xl text-[#333333]">會員登入</h1>
        </header>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest text-[#777777] uppercase block">
              電子郵件 / 帳號
            </label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-zinc-200 focus:border-[#B09B82] outline-none transition-all duration-300"
              placeholder="zhufu@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] tracking-widest text-[#777777] uppercase block">
              密碼
            </label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-zinc-200 focus:border-[#B09B82] outline-none transition-all duration-300"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full py-4 bg-[#B09B82] text-white text-[11px] tracking-[0.35em] uppercase hover:bg-[#333333] transition-colors mt-4">
            確認登入
          </button>

          <footer className="pt-8 border-t border-zinc-100 flex justify-between items-center text-[11px] text-[#777777] tracking-wider">
            <a href="#" className="hover:text-[#B09B82] transition-colors">忘記密碼?</a>
            <a href="#" className="hover:text-[#B09B82] transition-colors">註冊新會員</a>
          </footer>
        </form>
      </Reveal>
    </main>
  );
}
