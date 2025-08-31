import { useState } from "react";
import axios from "axios";

export default function UploadCV() {
  const [file, setFile] = useState<File | null>(null);
  const [cvData, setCvData] = useState<any>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("cv", file);

    try {
      const res = await axios.post("http://localhost:3001/v1/cv/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCvData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={handleUpload}
      >
        Upload CV
      </button>

      {cvData && (
        <pre className="bg-gray-100 p-4 rounded max-h-96 overflow-y-auto">
         {cvData }
        </pre>
      )}
    </div>
  );
}
