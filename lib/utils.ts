import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getHeaders = (data: any) => {
  const headers = new Set();
  const extractHeaders = (obj: any, prefix = "") => {
    Object.entries(obj).forEach(([key, value]) => {
      const headerKey = `${prefix}${key}`.replace(/\./g, " ");
      if (value && typeof value === "object") {
        extractHeaders(value, `${prefix}${key}.`);
      } else {
        headers.add(headerKey);
      }
    });
  };

  data?.forEach((item: any) => extractHeaders(item));
  return Array.from(headers);
};

const formatValue = (header: any, obj: any) => {
  const keys = header.split(".");
  let value = obj;

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined || value === null) break;
  }

  return value === undefined ? "" : JSON.stringify(value);
};

export const generateCSV = (data: any, filename: string) => {
  const headers = getHeaders(data);
  const csvRows = [];

  csvRows.push(headers.join(","));
  data?.forEach((item: any) => {
    const values = headers.map((header) => formatValue(header, item));
    csvRows.push(values.join(","));
  });

  const csvContent = csvRows.join("\n");
  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
