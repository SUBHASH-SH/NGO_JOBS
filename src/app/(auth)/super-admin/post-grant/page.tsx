"use client";

import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import DashboardSidebar from '../DashboardSidebar';
import { Menu } from 'lucide-react';
import Image from 'next/image';

interface GrantForm {
  title: string;
  organization: string;
  type: string;
  sector: string;
  eligible: string;
  amount: string;
  deadline: string;
  link: string;
  rfp: File | null;
  description: string;
  tags: string;
  status: string;
  featured: boolean;
}

const typeOptions = [
  "Grant", "Fellowship", "Scholarship", "Competition", "Other"
];
const statusOptions = ["Draft", "Published", "Closed"];

export default function PostGrantPage() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<GrantForm>();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rfpFile, setRfpFile] = useState<File | null>(null);
  const [rfpError, setRfpError] = useState<string>("");
  const rfpInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: GrantForm) => {
    if (rfpFile && rfpFile.size > 5 * 1024 * 1024) {
      setRfpError("File size exceeds 5MB limit.");
      return;
    }
    // TODO: Handle form submission (API call)
    alert("Grant posted! (Demo)");
    reset();
    setRfpFile(null);
    setRfpError("");
    if (rfpInputRef.current) rfpInputRef.current.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type !== "application/pdf") {
      setRfpError("Only PDF files are allowed.");
      setRfpFile(null);
      return;
    }
    if (file && file.size > 5 * 1024 * 1024) {
      setRfpError("File size exceeds 5MB limit.");
      setRfpFile(null);
      return;
    }
    setRfpFile(file);
    setRfpError("");
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] flex flex-col md:flex-row">
      {/* Mobile Topbar */}
      <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow-sm sticky top-0 z-30">
        <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md hover:bg-gray-100">
          <Menu className="w-6 h-6 text-indigo-600" />
        </button>
        <span className="font-extrabold text-lg text-gray-800">Admin Dashboard</span>
        <Image src="/images/wa.jpg" alt="User" width={36} height={36} className="rounded-full border-2 border-indigo-200" />
      </header>
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 flex flex-col p-1 md:p-2 bg-gradient-to-br from-[#f7faff] via-[#f5f7fb] to-[#f0f4fa] min-h-screen">
        <section className="bg-white/90 rounded-2xl border border-blue-100 shadow-lg shadow-blue-100/30 p-4 md:p-6 mb-6 w-full transition-all">
          <h2 className="text-lg font-extrabold mb-3 border-b border-blue-50 pb-2 text-blue-900 tracking-tight">Post Grant / Proposal Opportunity</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Grant/Proposal Title<span className="text-red-500">*</span></label>
              <input {...register("title", { required: true })} className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm" />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Issuing Organization<span className="text-red-500">*</span></label>
              <input {...register("organization", { required: true })} className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm" />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Type<span className="text-red-500">*</span></label>
              <select {...register("type", { required: true })} className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm">
                <option value="">Select</option>
                {typeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Sector / Theme</label>
              <input {...register("sector")}
                placeholder="e.g. Health, Education" className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm" />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Eligible Applicants</label>
              <textarea {...register("eligible")}
                placeholder="e.g. NGOs, Startups" className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm resize-none" rows={2} />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Total Funding / Grant Amount</label>
              <input {...register("amount")}
                placeholder="e.g. ₹5,00,000 or USD 20,000" className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm" />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Application Deadline</label>
              <input type="date" {...register("deadline")}
                className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm" />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Official Website or Application Link</label>
              <input type="url" {...register("link")}
                placeholder="https://..." className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm" />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Upload Guidelines or RFP (PDF)</label>
              <input type="file" accept="application/pdf" ref={rfpInputRef} onChange={handleFileChange} className="block w-full text-base text-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              {rfpFile && <div className="text-sm text-gray-700 mt-1">{rfpFile.name}</div>}
              {rfpError && <div className="text-sm text-red-500 mt-1">{rfpError}</div>}
              <div className="text-xs text-gray-500 mt-1">PDF only. Max size: 5MB.</div>
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Description / Summary</label>
              <textarea {...register("description")}
                className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm resize-none" rows={3} />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Tags / Keywords</label>
              <input {...register("tags")}
                placeholder="e.g. education, women, funding" className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm" />
            </div>
            <div>
              <label className="block text-base font-semibold text-blue-900 mb-1">Status</label>
              <select {...register("status")}
                className="p-2 border border-blue-100 rounded-lg w-full bg-[#f8fafc] text-base shadow-sm">
                {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("featured")}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded" id="featured" />
              <label htmlFor="featured" className="text-base text-blue-900 font-medium">Mark as Featured</label>
            </div>
            <button type="submit" className="w-full bg-[#2B7FFF] text-white font-bold py-2 rounded-lg shadow hover:bg-[#2566cc] transition-colors">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
} 