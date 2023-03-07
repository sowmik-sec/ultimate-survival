import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadPage = ({ rootElementId, downloadFileName }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "em", "a4");
      pdf.addImage(imgData, "JPEG", 10, 10);
      pdf.save(`${downloadFileName}`);
    });
  };
  return (
    <div>
      <button
        className="bg-orange-400 p-2 rounded-md"
        onClick={downloadFileDocument}
      >
        Download Course Details
      </button>
    </div>
  );
};

export default DownloadPage;
