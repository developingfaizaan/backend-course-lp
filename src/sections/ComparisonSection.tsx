import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const rows = [
    { label: "Tutorial apps vs production systems", typical: false, masterclass: true },
    { label: "Basic CRUD vs system architecture", typical: false, masterclass: true },
    { label: "Local development vs cloud infrastructure", typical: false, masterclass: true },
    { label: "Single database vs distributed systems", typical: false, masterclass: true },
    { label: "Copy-paste code vs engineering principles", typical: false, masterclass: true },
    { label: "Job-ready portfolio projects", typical: "Maybe", masterclass: true },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Other Courses Teach You to Code <br />
            <span className="text-gradient-green italic">This Course Teaches You to Engineer</span>
          </h2>
        </div>

        <div className="hidden md:block glass-panel overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-8 text-sm font-bold text-white/40 uppercase tracking-widest">Feature</th>
                <th className="p-8 text-sm font-bold text-white/80 uppercase tracking-widest text-center bg-white/10">Typical Coding Course</th>
                <th className="p-8 text-sm font-bold text-backend-green uppercase tracking-widest text-center bg-backend-green/5">Backend Masterclass</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300">
                  <td className="p-8 font-medium">{row.label}</td>
                  <td className="p-8 text-center bg-white/10">
                    {row.typical === true ? <Check className="mx-auto text-green-500" /> : row.typical === false ? <X className="mx-auto text-red-500/80" /> : <span className="text-white/80">{row.typical}</span>}
                  </td>
                  <td className="p-8 text-center bg-backend-green/5">
                    <Check className="mx-auto text-backend-green" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="glass-panel p-6 space-y-4">
              <div className="font-bold text-lg border-b border-white/5 pb-4">{row.label}</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Typical Course</div>
                  <div className="flex items-center gap-2">
                    {row.typical === true ? <Check size={16} className="text-green-500" /> : row.typical === false ? <X size={16} className="text-red-500/80" /> : <span className="text-sm text-white/60">{row.typical}</span>}
                    <span className="text-xs text-white/40">{row.typical === true ? "Included" : row.typical === false ? "Missing" : ""}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-backend-green">Masterclass</div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-backend-green" />
                    <span className="text-xs text-backend-green">Mastered</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
