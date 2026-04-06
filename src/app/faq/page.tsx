import Reveal from "@/components/Reveal";

const faqs = [
  {
    category: "訂購相關",
    items: [
      { q: "喜帖最少訂購量是多少？", a: "公版喜帖最低訂購量為 50 份，客製款則視需求而定。" },
      { q: "校稿預計需要多久？", a: "我們會在提供資料後的 1-3 個工作天內完成初步校稿。" },
    ],
  },
  {
    category: "配送與包裝",
    items: [
      { q: "有提供超商取貨嗎？", a: "目前僅提供宅配寄送，確保精緻紙品不被隨意堆疊損壞。" },
      { q: "運費如何計算？", a: "本島運費固定為 150 元，訂單滿 5,000 元即享免運優惠。" },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="container mx-auto px-10 pt-48 pb-24 max-w-4xl">
      <Reveal className="mb-20 text-center">
        <span className="font-serif text-[11px] tracking-[0.4em] text-[#B09B82] uppercase mb-4 block">
          Frequently Asked Questions
        </span>
        <h1 className="font-serif-tc text-4xl text-[#333333] mb-8">常見問題</h1>
      </Reveal>

      <div className="space-y-16">
        {faqs.map((session) => (
          <Reveal key={session.category}>
            <h2 className="font-serif-tc text-2xl text-[#B09B82] border-b border-[#B09B82]/20 pb-4 mb-10">
              {session.category}
            </h2>
            <div className="space-y-10">
              {session.items.map((item) => (
                <div key={item.q} className="group">
                  <h3 className="font-serif-tc text-xl text-[#333333] mb-4 flex items-start gap-4">
                    <span className="font-serif text-[#B09B82] opacity-30">Q.</span>
                    {item.q}
                  </h3>
                  <p className="text-[#777777] leading-relaxed pl-10 text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
