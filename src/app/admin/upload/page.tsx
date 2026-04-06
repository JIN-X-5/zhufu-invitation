"use client";

import { useState, useEffect } from "react";
import { Upload, ImageIcon, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface UploadFieldProps {
  label: string;
  suggestedSize: string;
  onFileSelect: (file: File) => void;
  status: "idle" | "uploading" | "success" | "error";
}

function UploadField({ label, suggestedSize, onFileSelect, status }: UploadFieldProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
      onFileSelect(file);
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
        {status === "success" ? (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        ) : status === "uploading" ? (
          <Loader2 className="w-5 h-5 text-[#B09B82] animate-spin" />
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
  const [categories, setCategories] = useState<{id: string, name: string}[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categoryId: "",
    file: null as File | null,
  });
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("*");
      if (data) setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleUpload = async () => {
    if (!formData.file || !formData.name || !formData.categoryId) {
      alert("請補全商品名稱、分類與圖片資訊");
      return;
    }

    setIsSaving(true);
    setUploadStatus("uploading");

    try {
      // 1. Upload to Storage
      const fileExt = formData.file.name.split(".").pop();
      const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, formData.file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from("product-images")
        .getPublicUrl(filePath);

      // 3. Save to Database
      const { error: dbError } = await supabase.from("products").insert({
        name: formData.name,
        price: formData.price ? parseFloat(formData.price) : null,
        category_id: formData.categoryId,
        image_url: publicUrl,
        description: "", // Can be expanded later
      });

      if (dbError) throw dbError;

      setUploadStatus("success");
      alert("上架成功！");
      // Reset form
      setFormData({ name: "", price: "", categoryId: "", file: null });
    } catch (error: any) {
      console.error(error);
      setUploadStatus("error");
      alert("上架失敗：" + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 text-center">
          <span className="font-serif text-[11px] tracking-[0.4em] text-[#B09B82] uppercase mb-4 block">
            Employee Portal
          </span>
          <h1 className="font-serif-tc text-3xl text-[#333333]">快速上架系統</h1>
        </header>

        <div className="space-y-10 bg-white p-10 shadow-sm border border-zinc-100">
          <section className="space-y-6">
            <div>
              <label className="text-[10px] tracking-widest text-[#777777] uppercase block mb-2">商品名稱</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-zinc-200 focus:border-[#B09B82] outline-none transition-all"
                placeholder="例如：法式優雅蕾絲喜帖"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] tracking-widest text-[#777777] uppercase block mb-2">價格 (選填)</label>
                <input 
                  type="number" 
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full px-4 py-3 border border-zinc-200 focus:border-[#B09B82] outline-none transition-all"
                  placeholder="65"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest text-[#777777] uppercase block mb-2">所屬分類</label>
                <select 
                  value={formData.categoryId}
                  onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                  className="w-full px-4 py-3 border border-zinc-200 focus:border-[#B09B82] outline-none transition-all bg-white"
                >
                  <option value="">請選擇</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <UploadField 
              label="商品主圖" 
              suggestedSize="1000 x 1200 (或 1:1)" 
              status={uploadStatus}
              onFileSelect={(file) => setFormData({...formData, file})}
            />
          </section>

          <button 
            onClick={handleUpload}
            disabled={isSaving}
            className="w-full py-5 bg-[#333333] text-white text-xs tracking-[0.3em] uppercase hover:bg-black transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                正在上傳中...
              </>
            ) : "確認上架並發布至首頁"}
          </button>
        </div>
      </div>
    </div>
  );
}
