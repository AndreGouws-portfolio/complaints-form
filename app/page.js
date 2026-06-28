"use client";
import { useState } from "react";

export default function ComplaintsForm() {
  const [formData, setFormData] = useState({
    controlNumber: "",
    registrationNumber: "",
    surname: "",
    name: "",
    physicalAddress: "",
    homePhone: "",
    workPhone: "",
    email: "",
    cellNo: "",
    typeOfComplaint: "",
    dayAndTime: "",
    description: "",
    reportedTo: "",
    locationOfComplaint: "",
    date: "",
    time: "",
    officialName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.print();
  };

  const handleReset = () => {
    setFormData({
      controlNumber: "", registrationNumber: "", surname: "", name: "",
      physicalAddress: "", homePhone: "", workPhone: "", email: "",
      cellNo: "", typeOfComplaint: "", dayAndTime: "", description: "",
      reportedTo: "", locationOfComplaint: "", date: "", time: "", officialName: "",
    });
    setSubmitted(false);
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", maxWidth: 800, margin: "40px auto", padding: "40px", border: "2px solid #000", background: "#fff" }}>
      <style>{`
        @media print { .no-print { display: none !important; } }
        input, textarea { font-family: Arial, sans-serif; font-size: 13px; }
        .field-row { display: flex; align-items: flex-start; marginBottom: 12px; gap: 8px; }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ width: 60, height: 60, border: "1px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#999" }}>LOGO</div>
          <div>
            <div style={{ fontSize: 22, fontWeight: "bold" }}>COMMUNITY SAFETY</div>
            <div style={{ fontSize: 16, fontWeight: "bold" }}>REGION 3 SECTOR 1</div>
            <div style={{ fontSize: 14, fontWeight: "bold" }}>BY-LAW POLICING</div>
            <div style={{ fontSize: 14, fontWeight: "bold" }}>COMPLAINTS FORM</div>
          </div>
          <div style={{ width: 60, height: 60, border: "1px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#999" }}>LOGO</div>
        </div>
      </div>

      <div style={{ textAlign: "center", fontSize: 11, borderTop: "1px solid #000", borderBottom: "1px solid #000", padding: "8px 0", marginBottom: 20 }}>
        Note: complainant may remain anonymous, however he/she must be informed that it may lead to difficulties with the investigation and no feedback can be provided.
      </div>

      <form onSubmit={handleSubmit}>
        {/* Complainant Details */}
        {[
          { label: "CONTROL NUMBER (OB):", name: "controlNumber" },
          { label: "REGISTRATION NUMBER (FILE):", name: "registrationNumber" },
          { label: "SURNAME OF COMPLAINANT:", name: "surname" },
          { label: "NAME OF COMPLAINANT:", name: "name" },
          { label: "PHYSICAL ADDRESS OF COMPLAINANT:", name: "physicalAddress" },
        ].map(({ label, name }) => (
          <div key={name} style={{ display: "flex", alignItems: "center", marginBottom: 10, gap: 8 }}>
            <label style={{ fontWeight: "bold", fontSize: 12, whiteSpace: "nowrap", minWidth: 260 }}>{label}</label>
            <input
              type="text" name={name} value={formData[name]} onChange={handleChange}
              style={{ flex: 1, borderBottom: "1px solid #000", border: "none", borderBottom: "1px solid #000", outline: "none", padding: "2px 4px", fontSize: 13 }}
            />
          </div>
        ))}

        <div style={{ marginTop: 16 }}>
          {[
            { label: "HOME PHONE NO:", name: "homePhone" },
            { label: "WORK PHONE NO:", name: "workPhone" },
            { label: "E-MAIL:", name: "email", type: "email" },
            { label: "CELL NO:", name: "cellNo" },
          ].map(({ label, name, type }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", marginBottom: 10, gap: 8 }}>
              <label style={{ fontWeight: "bold", fontSize: 12, whiteSpace: "nowrap", minWidth: 180 }}>{label}</label>
              <input
                type={type || "text"} name={name} value={formData[name]} onChange={handleChange}
                style={{ flex: 1, border: "none", borderBottom: "1px solid #000", outline: "none", padding: "2px 4px", fontSize: 13 }}
              />
            </div>
          ))}
        </div>

        {/* Particulars */}
        <div style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, textDecoration: "underline", margin: "24px 0 16px", textTransform: "uppercase" }}>
          PARTICULARS OF COMPLAINT
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: 16, gap: 8 }}>
          <label style={{ fontWeight: "bold", fontSize: 12, whiteSpace: "nowrap" }}>TYPE OF COMPLAINT</label>
          <span style={{ fontSize: 11, fontStyle: "italic", whiteSpace: "nowrap" }}>(eg. Noise, Illegal business ext.)</span>
          <input
            type="text" name="typeOfComplaint" value={formData.typeOfComplaint} onChange={handleChange}
            style={{ flex: 1, border: "none", borderBottom: "1px solid #000", outline: "none", padding: "2px 4px", fontSize: 13 }}
          />
        </div>

        {[
          { label: "DAY AND TIME THAT THE OFFENCE OCCURS", eg: "(eg. Every Friday night at 02h00)", name: "dayAndTime", rows: 2 },
          { label: "DESCRIPTION OF COMPLAINT:", name: "description", rows: 4 },
          { label: "WAS THE COMPLAINT REPORTED TO ANOTHER DEPARTMENT/SECTION?", eg: "(If yes specify)", name: "reportedTo", rows: 2 },
          { label: "LOCATION OF COMPLAINT:", name: "locationOfComplaint", rows: 2 },
        ].map(({ label, eg, name, rows }) => (
          <div key={name} style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: "bold", fontSize: 12, display: "block", marginBottom: 4 }}>
              {label} {eg && <span style={{ fontSize: 11, fontStyle: "italic", fontWeight: "normal" }}>{eg}</span>}
            </label>
            <textarea
              name={name} value={formData[name]} onChange={handleChange} rows={rows}
              style={{ width: "100%", resize: "vertical", border: "1px solid #ccc", outline: "none", padding: "4px", fontSize: 13, boxSizing: "border-box" }}
            />
          </div>
        ))}

        {/* Date, Time, Official */}
        <div style={{ display: "flex", alignItems: "center", gap: 40, marginTop: 20, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <label style={{ fontWeight: "bold", fontSize: 12 }}>DATE:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange}
              style={{ border: "none", borderBottom: "1px solid #000", outline: "none", padding: "2px 4px", fontSize: 13 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <label style={{ fontWeight: "bold", fontSize: 12 }}>TIME:</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange}
              style={{ border: "none", borderBottom: "1px solid #000", outline: "none", padding: "2px 4px", fontSize: 13 }} />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, gap: 8 }}>
          <label style={{ fontWeight: "bold", fontSize: 12, whiteSpace: "nowrap" }}>NAME OF OFFICIAL WHO RECEIVED THE COMPLAINT:</label>
          <input type="text" name="officialName" value={formData.officialName} onChange={handleChange}
            style={{ flex: 1, border: "none", borderBottom: "1px solid #000", outline: "none", padding: "2px 4px", fontSize: 13 }} />
        </div>

        {/* Buttons */}
        <div className="no-print" style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
          <button type="submit" style={{ padding: "10px 28px", background: "#1a3a6b", color: "#fff", border: "none", borderRadius: 4, fontWeight: "bold", fontSize: 14, cursor: "pointer" }}>
            🖨️ Print / Submit
          </button>
          <button type="button" onClick={handleReset} style={{ padding: "10px 28px", background: "#e53e3e", color: "#fff", border: "none", borderRadius: 4, fontWeight: "bold", fontSize: 14, cursor: "pointer" }}>
            🔄 Clear Form
          </button>
        </div>
      </form>

      {submitted && (
        <div className="no-print" style={{ marginTop: 20, padding: 16, background: "#f0fff4", border: "1px solid #68d391", borderRadius: 4, textAlign: "center" }}>
          ✅ Form submitted! Print dialog should have opened.
        </div>
      )}
    </main>
  );
}
