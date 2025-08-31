import { useState } from "react";
import { Plus, Link as LinkIcon, Copy, Edit, Trash } from "lucide-react";

export default function Links() {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Mon Portfolio",
      url: "https://monportfolio.com",
      clicks: 120,
    },
    {
      id: 2,
      title: "LinkedIn",
      url: "https://linkedin.com/in/moi",
      clicks: 45,
    },
  ]);

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Links</h1>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
          <Plus size={18} /> Add new link
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500">Total Links</p>
          <h2 className="text-xl font-bold">{links.length}</h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500">Total Clicks</p>
          <h2 className="text-xl font-bold">
            {links.reduce((sum, link) => sum + link.clicks, 0)}
          </h2>
        </div>
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <p className="text-gray-500">Most Popular</p>
          <h2 className="text-sm font-bold">
            {links[0]?.title || "No link"}
          </h2>
        </div>
      </div>

      {/* Links List */}
      <div className="space-y-4">
        {links.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed">
            <p className="text-gray-500">No links yet. Add your first link!</p>
          </div>
        ) : (
          links.map((link) => (
            <div
              key={link.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow"
            >
              <div className="flex items-center gap-4">
                <LinkIcon className="text-gray-500" size={20} />
                <div>
                  <p className="font-semibold">{link.title}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm"
                  >
                    {link.url}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <p className="text-gray-500">{link.clicks} clicks</p>
                <button className="text-gray-500 hover:text-black">
                  <Copy size={18} />
                </button>
                <button className="text-gray-500 hover:text-black">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
