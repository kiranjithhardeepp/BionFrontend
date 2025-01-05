import React, { useState } from "react";
import InvoiceTemplate from "../components/InvoiceTemplate";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceStatic from "../components/InvoiceStatic";

const Invoice = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    gstnId: "",
    invoiceDate: "",
    poNo: "",
    poDate: "",
    site: "",
    vehicleNo: "",
    supplyDate: "",
    totalAmountEnglish: "",
    totalAmountNumber: "",
    description: "",
    hsnCode: "",
    qty: "",
    unit: "",
    rate: "",
    discount: "",
    netValue: "",
    cgstPercentage: "",
    cgstAmount: "",
    sgstPercentage: "",
    sgstAmount: "",
    total: "",
  });

  const [invoiceDataList, setInvoiceDataList] = useState([]); // Array to store all rows of invoice data
  const [invoiceNumber, setInvoiceNumber] = useState(""); // State to store the generated invoice number

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Add new row of invoice data to the list
  const addInvoiceRow = () => {
    setInvoiceDataList((prevData) => [...prevData, formData]);
    setFormData({
      name: "",
      address: "",
      phone: "",
      gstnId: "",
      invoiceDate: "",
      poNo: "",
      poDate: "",
      site: "",
      vehicleNo: "",
      supplyDate: "",
      totalAmountEnglish: "",
      totalAmountNumber: "",
      description: "",
      hsnCode: "",
      qty: "",
      unit: "",
      rate: "",
      discount: "",
      netValue: "",
      cgstPercentage: "",
      cgstAmount: "",
      sgstPercentage: "",
      sgstAmount: "",
      total: "",
    }); // Reset form after adding the row
  };

  // Function to generate a random invoice number
  const generateInvoiceNumber = () => {
    const timestamp = Date.now().toString(36); // Convert to base-36 (alphanumeric)
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase(); // Random string
    const newInvoiceNumber = `BION${timestamp.toUpperCase()}${randomPart}`;
    setInvoiceNumber(newInvoiceNumber); // Set the generated invoice number
  };

  const printPdf = () => {
    window.print();
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    // Perform further actions with formData, like sending it to the InvoiceTemplate
  };

  return (
    <div className="p-2">
      {/* Pass handleChange to InvoiceForm as a prop */}
      <InvoiceStatic
        formData={formData} // Pass the shipping details here
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <InvoiceForm formData={formData} handleChange={handleChange} />

      <div className="mt-7">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              generateInvoiceNumber(); // Generate the invoice number
            }}
            className="no-print text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate Invoice Number
          </button>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={addInvoiceRow}
            className="no-print ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Invoice
          </button>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              generateInvoiceNumber(); // Generate invoice number before printing
              printPdf(); // Trigger print
            }}
            className="no-print text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Print Invoice
          </button>
        </div>

        {/* Render the invoice template only if there is data */}
        {invoiceDataList.length > 0 && (
          <div>
            {/* Pass the invoice number and data list to the InvoiceTemplate */}
            <InvoiceTemplate
              dataList={invoiceDataList}
              invoiceNumber={invoiceNumber}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice;
