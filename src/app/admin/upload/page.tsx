"use client";

import { useState } from "react";
import { Upload, ImageIcon, CheckCircle2, AlertCircle } from "lucide-react";

interface UploadFieldProps {
  label: string;
  suggestedSize: string;
  onUpload: (file: File) => void;
}

function UploadField({ label, suggestedSize, onUpload }: UploadFieldProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
      onUpload(file);
    }
  };

  return (
    <div className="border border-dashed border-[#B09B82]/30 p-6 bg-white hover:bg-[#FDFBF7] transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-serif-tc text-lg text-[#333333] mb-1">{label}</h3>
          <span className="text-[10px] tracking-widest text-[#B09B82] uppercase">
            建議尺寸：{suggestedSize}
          </span>
        </div>
        {preview ? (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        ) : (
          <ImageIcon className="w-5 h-5 text-[#B09B82]/40" />
        )}
      </div>

      <div className="relative aspect-video bg-zinc-50 overflow-hidden flex items-center justify-center">
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <Upload className="w-8 h-8 text-[#B09B82]/30 mx-auto mb-2" />
            <p className="text-[11px] text-[#777777]">點擊或拖曳照片至此</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function AdminUploadPage() {
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <span className="font-serif text-[11px] tracking-[0.4em] text-[#B09B82] uppercase mb-4 block">
            Employee Portal
          </span>
          <h1 className="font-serif-tc text-3xl text-[#333333]">首頁內容管理</h1>
        </header>

        <div className="space-y-12">
          {/* Section: Hero Banner */}
          <section>
            <h2 className="font-serif-tc text-xl mb-6 border-b border-[#B09B82]/20 pb-2">Hero 主視覺區</h2>
            <div className="grid grid-cols-1 gap-6">
              <UploadField 
                label="首頁大圖 (Background)" 
                suggestedSize="1920 x 1080 (橫向)" 
                onUpload={(f) => console.log("Hero Uploaded", f)}
              />
            </div>
          </section>

          {/* Section: Featured Grid */}
          <section>
            <h2 className="font-serif-tc text-xl mb-6 border-b border-[#B09B82]/20 pb-2">精選作品區 (Grid)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UploadField 
                label="作品 1 (寬幅)" 
                suggestedSize="1200 x 800" 
                onUpload={(f) => console.log("Item 1 Uploaded", f)}
              />
              <UploadField 
                label="作品 2 (直向)" 
                suggestedSize="800 x 1200" 
                onUpload={(f) => console.log("Item 2 Uploaded", f)}
              />
              <UploadField 
                label="作品 3 (正方形)" 
                suggestedSize="1000 x 1000" 
                onUpload={(f) => console.log("Item 3 Uploaded", f)}
              />
              <UploadField 
                label="作品 4 (標準)" 
                suggestedSize="1000 x 750" 
                onUpload={(f) => console.log("Item 4 Uploaded", f)}
              />
            </div>
          </section>

          {/* Section: Brand Story */}
          <section>
            <h2 className="font-serif-tc text-xl mb-6 border-b border-[#B09B82]/20 pb-2">關於品牌區</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UploadField 
                label="工藝細節圖 (Main)" 
                suggestedSize="1000 x 1250" 
                onUpload={(f) => console.log("Story Main Uploaded", f)}
              />
              <UploadField 
                label="裝飾特寫圖 (Inset)" 
                suggestedSize="600 x 800" 
                onUpload={(f) => console.log("Story Sub Uploaded", f)}
              />
            </div>
          </section>

          <footer className="pt-10 flex justify-end">
            <button 
              onClick={() => {
                setIsSaving(true);
                setTimeout(() => setIsSaving(false), 2000);
              }}
              className="px-12 py-4 bg-[#333333] text-white text-xs tracking-[0.2em] uppercase hover:bg-black transition-colors flex items-center gap-3"
            >
              {isSaving ? "存儲中..." : "確認更新所有圖片"}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
