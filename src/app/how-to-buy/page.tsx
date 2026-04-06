import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function HowToBuyPage() {
  const steps = [
    {
      num: "01",
      title: "挑選款式與下單",
      desc: "在官網瀏覽您喜愛的喜帖或書約款式，點擊『立即訂購』填寫 Google 表單或聯絡 LINE 客服。",
    },
    {
      num: "02",
      title: "提供資料與校稿",
      desc: "我們會根據您的需求製作數位校稿檔，並透過 Email 或 LINE 與您確認內容排版。",
    },
    {
      num: "03",
      title: "確認印製與生產",
      desc: "定稿後進入生產流程。喜帖印製約需 7-10 個工作天，手工藝品則視複雜度而定。",
    },
    {
      num: "04",
      title: "精緻包裝與寄送",
      desc: "產品完成後會經過嚴格品檢並進行品牌包裝，隨即寄送至您的手中。",
    },
  ];

  return (
    <main className="container mx-auto px-10 pt-48 pb-24">
      <Reveal className="mb-20 text-center max-w-2xl mx-auto">
        <span className="font-serif text-[11px] tracking-[0.4em] text-[#B09B82] uppercase mb-4 block">
          Order Process
        </span>
        <h1 className="font-serif-tc text-4xl text-[#333333] mb-8">訂購流程說明</h1>
        <p className="text-[#777777] leading-relaxed">
          我們致力於提供更有溫度的服務體驗。從紙張挑選、排版校對到最終手工包裝，每一步都為您悉心打造。
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step) => (
          <Reveal key={step.num} className="group">
            <div className="border-t border-[#B09B82]/30 pt-10">
              <span className="font-serif text-3xl text-[#B09B82]/20 mb-6 block group-hover:text-[#B09B82] transition-colors">
                {step.num}
              </span>
              <h3 className="font-serif-tc text-xl text-[#333333] mb-4">{step.title}</h3>
              <p className="text-[#777777] text-sm leading-relaxed">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-32 p-16 bg-[#F2E9E1]/50 text-center">
        <h2 className="font-serif-tc text-2xl mb-6">需要更即時的諮詢？</h2>
        <p className="text-[#777777] mb-8">歡迎加入我們的官方 LINE，將有專人為您服務。</p>
        <button className="px-12 py-4 bg-[#B09B82] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#333333] transition-colors">
          前往 LINE 諮詢
        </button>
      </Reveal>
    </main>
  );
}
