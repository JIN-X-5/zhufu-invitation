import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="container mx-auto px-10 pb-24">
      {/* --- Hero Section --- */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,155,130,0.05)_0%,transparent_70%)] -z-10" />
        
        <Reveal>
          <span className="font-serif text-[0.7rem] tracking-[0.5em] text-[#B09B82] uppercase mb-8 block">
            Premium Wedding Design
          </span>
          <h1 className="font-serif-tc text-5xl md:text-7xl font-medium text-[#333333] mb-10">
            苧芙喜帖工作坊
          </h1>
          <button className="px-10 py-4 border border-[#B09B82] text-[#B09B82] text-[0.75rem] tracking-[0.2em] uppercase hover:bg-[#B09B82] hover:text-white transition-all duration-500">
            瀏覽所有作品
          </button>
        </Reveal>
      </section>

      {/* --- Section Header --- */}
      <Reveal className="mb-20">
        <span className="font-serif text-[11px] tracking-[0.3em] text-[#777777] mb-4 block uppercase font-light">
          01 / Collections
        </span>
        <h2 className="font-serif-tc text-4xl text-[#333333]">精選紙品系列</h2>
      </Reveal>

      {/* --- Portfolio Grid (Asymmetric) --- */}
      <div className="editorial-grid">
        {/* Item 1: Lace (Wide) */}
        <Reveal className="col-span-12 md:col-span-8 group cursor-pointer">
          <div className="overflow-hidden bg-zinc-100 aspect-[16/9] relative">
            <Image 
              src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop" 
              alt="法式典雅蕾絲喜帖"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </div>
          <div className="mt-6">
            <span className="font-serif text-[10px] tracking-[0.2em] text-[#777777] uppercase block mb-1">Stationery</span>
            <h3 className="font-serif-tc text-lg text-[#333333]">法式典雅蕾絲喜帖</h3>
          </div>
        </Reveal>

        {/* Item 2: Marriage Cert (Vertical) */}
        <Reveal className="col-span-12 md:col-span-4 md:mt-24 group cursor-pointer">
          <div className="overflow-hidden bg-zinc-100 aspect-[3/4] relative">
            <Image 
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop" 
              alt="極細紋質感書約"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </div>
          <div className="mt-6">
            <span className="font-serif text-[10px] tracking-[0.2em] text-[#777777] uppercase block mb-1">Certificate</span>
            <h3 className="font-serif-tc text-lg text-[#333333]">極細紋質感書約</h3>
          </div>
        </Reveal>

        {/* Item 3: Transparent (Glassmorphism Focus) */}
        <Reveal className="col-span-12 md:col-span-5 md:-mt-16 group cursor-pointer">
          <div className="overflow-hidden bg-zinc-100 aspect-square relative">
            <Image 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop" 
              alt="透明壓克力喜帖"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center p-10 pointer-events-none z-10">
              <div className="glass-card w-full h-full flex flex-col items-center justify-center text-center">
                <span className="font-serif-tc text-xl tracking-wider text-[#333333]">
                  透明系列<br/>
                  <span className="text-xs font-serif tracking-[0.3em] font-light uppercase opacity-60 mt-2 block">Transparent</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <span className="font-serif text-[10px] tracking-[0.2em] text-[#777777] uppercase block mb-1">Modern Series</span>
            <h3 className="font-serif-tc text-lg text-[#333333]">透明壓克力喜帖設計</h3>
          </div>
        </Reveal>

        {/* Item 4: Bottom Wide */}
        <Reveal className="col-span-12 md:col-span-7 group cursor-pointer">
          <div className="overflow-hidden bg-zinc-100 aspect-[4/3] relative">
            <Image 
              src="https://images.unsplash.com/photo-1510076857177-74700760be29?q=80&w=1200&auto=format&fit=crop" 
              alt="手工封蠟燙金信封組"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
          </div>
          <div className="mt-6">
            <span className="font-serif text-[10px] tracking-[0.2em] text-[#777777] uppercase block mb-1">Accessories</span>
            <h3 className="font-serif-tc text-lg text-[#333333]">手工封蠟燙金信封組</h3>
          </div>
        </Reveal>
      </div>

      {/* --- Craft Section --- */}
      <section className="py-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <Reveal className="relative aspect-[4/5]">
          <Image 
            src="https://images.unsplash.com/photo-1512486130939-2c4f7996006f?q=80&w=1000&auto=format&fit=crop" 
            alt="Craft Detail"
            fill
            className="object-cover w-3/4 h-full"
          />
          <div className="absolute bottom-0 right-0 w-1/2 h-3/5 border-[15px] border-[#FDFBF7] shadow-xl">
             <Image 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" 
              alt="Handmade Paper"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="max-w-md">
          <span className="font-serif text-[11px] tracking-[0.3em] text-[#777777] mb-6 block uppercase font-light">
            Our Craft
          </span>
          <h2 className="font-serif-tc text-4xl mb-8 leading-tight">關於紙張的靈魂<br/>感知時光的刻痕</h2>
          <p className="text-[#777777] mb-10 leading-relaxed font-light">
            我們追求的是紙張與人手之間的溫度觸感，每一份設計都採用頂級進口棉質紙，搭配古法燙金與手繪花卉藝術，讓文字不只是訊息，而是具有溫度的回憶。
          </p>
          <button className="px-10 py-4 border border-[#B09B82] text-[#B09B82] text-[0.75rem] tracking-[0.2em] uppercase hover:bg-[#B09B82] hover:text-white transition-all duration-500">
            了解品牌故事
          </button>
        </Reveal>
      </section>
    </main>
  );
}
