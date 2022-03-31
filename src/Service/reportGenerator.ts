import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface dataProps {
  func_name: string;
  size: number;
  runtime: number;
}

function generatePDF(Data: dataProps[]) {
  const doc = new jsPDF("l", "mm", "a4");

  const tableColumn: string[][] = [
    [
      "id",
      "Size of array",
      "Merge Sort",
      "Bubble Sort",
      "Insertion Sort",
      "Selection Sort",
    ],
  ];
  const tableRows: string[][] = [];

  Data.forEach((items, index) => {
    var arr: string[] = [];
    switch (items.func_name) {
      case "Merge Sort":
        arr = [
          `${index + 1}`,
          `${items.size}`,
          `${items.runtime} ms`,
          "-",
          "-",
          "-",
        ];
        break;

      case "Bubble Sort":
        arr = [
          `${index + 1}`,
          `${items.size}`,
          "-",
          `${items.runtime} ms`,
          "-",
          "-",
        ];
        break;
      case "Insertion Sort":
        arr = [
          `${index + 1}`,
          `${items.size}`,
          "-",
          "-",
          `${items.runtime} ms`,
          "-",
        ];
        break;
      case "Selection Sort":
        arr = [
          `${index + 1}`,
          `${items.size}`,
          "-",
          "-",
          "-",
          `${items.runtime} ms`,
        ];
        break;
    }
    tableRows.push(arr);
  });

  autoTable(doc, {
    head: tableColumn,
    body: tableRows,
    didDrawCell: (data) => {},
    startY: 20,
  });
  doc.text("Report Runtime", 14, 15);
  doc.save(`report_runtime.pdf`);
}

export default generatePDF;
