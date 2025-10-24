import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function InquiryRevisiMahasiswa() {
  const [nim, setNim] = useState("");
  const [jenis, setJenis] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  const handleInquiry = () => {
    if (!nim || !jenis) {
      setError("⚠️ Silakan masukkan NIM dan pilih jenis sidang.");
      setPdfUrl(null);
      return;
    }

    const filePath = `/files/${jenis.toLowerCase()}/${nim}.pdf`;

    fetch(filePath, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setPdfUrl(filePath);
          setError(null);
        } else {
          setPdfUrl(null);
          setError(`❌ File ${jenis} dengan NIM ${nim} tidak ditemukan.`);
        }
      })
      .catch(() => {
        setPdfUrl(null);
        setError("🚫 Terjadi kesalahan dalam memuat file.");
      });
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center transition-colors duration-700 p-6 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-900"
      }`}
    >
      {/* Background Animated Aurora */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            darkMode
              ? "radial-gradient(circle at 20% 20%, rgba(128,0,128,0.4), transparent 60%)"
              : "radial-gradient(circle at 20% 20%, rgba(0,0,255,0.2), transparent 60%)",
            darkMode
              ? "radial-gradient(circle at 80% 60%, rgba(0,128,255,0.4), transparent 70%)"
              : "radial-gradient(circle at 80% 60%, rgba(128,0,255,0.2), transparent 70%)",
            darkMode
              ? "radial-gradient(circle at 50% 90%, rgba(255,0,255,0.3), transparent 70%)"
              : "radial-gradient(circle at 50% 90%, rgba(0,255,255,0.3), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{ filter: "blur(120px)" }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30"
          style={{
            background: darkMode ? "#6b21a8" : "#60a5fa",
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, repeatType: "mirror" }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl z-10"
      >
        <Card
          className={`shadow-2xl rounded-3xl overflow-hidden border backdrop-blur-lg transition-all duration-700 ${
            darkMode ? "bg-gray-900/70 border-gray-700" : "bg-white/80 border-gray-200"
          }`}
        >
          <div
            className={`text-center py-6 ${
              darkMode
                ? "bg-gradient-to-r from-purple-800 to-blue-700 text-white"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            }`}
          >
            <h1 className="text-3xl font-bold tracking-wide">
              Inquiry Revisi Mahasiswa
            </h1>
            <p className="text-sm opacity-90 mt-1">
              Sistem Pengecekan Dokumen Proposal & Skripsi
            </p>
          </div>

          <CardContent className="p-8 space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <label className="font-semibold">Masukkan NIM Mahasiswa</label>
              <Input
                placeholder="Contoh: 12345678"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                className={`mt-2 border-gray-300 focus:ring-2 ${
                  darkMode ? "bg-gray-800 text-white focus:ring-purple-400" : "focus:ring-blue-500"
                }`}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <label className="font-semibold">Pilih Jenis Sidang</label>
              <Select onValueChange={(v) => setJenis(v)}>
                <SelectTrigger
                  className={`mt-2 border-gray-300 focus:ring-2 ${
                    darkMode ? "bg-gray-800 text-white focus:ring-purple-400" : "focus:ring-purple-500"
                  }`}
                >
                  <SelectValue placeholder="Pilih jenis dokumen" />
                </SelectTrigger>
                <SelectContent className={darkMode ? "bg-gray-800 text-white" : "bg-white"}>
                  <SelectItem value="proposal">Proposal</SelectItem>
                  <SelectItem value="skripsi">Skripsi</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Button
                onClick={handleInquiry}
                className={`w-full font-semibold py-2 rounded-xl shadow-md transition-all ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-700 to-blue-700 hover:opacity-90"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                }`}
              >
                🔍 Tampilkan Dokumen
              </Button>
            </motion.div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center font-medium border rounded-lg py-2 mt-3 ${
                  darkMode
                    ? "text-red-400 bg-red-950/40 border-red-800"
                    : "text-red-600 bg-red-50 border-red-200"
                }`}
              >
                {error}
              </motion.p>
            )}

            {pdfUrl && jenis === "proposal" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 border-2 border-gray-200 rounded-2xl overflow-hidden h-[600px] shadow-inner"
              >
                <iframe
                  src={pdfUrl}
                  title="Proposal PDF"
                  width="100%"
                  height="100%"
                  className="rounded-xl"
                ></iframe>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
