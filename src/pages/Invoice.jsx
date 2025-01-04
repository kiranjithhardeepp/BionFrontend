import React, { useState } from "react";
import InvoiceTemplate from "../components/InvoiceTemplate";
import InvoiceForm from "../components/InvoiceForm";

const Invoice = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    gstnId: "",
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

  const printPdf = () => {
    window.print();
  };

  return (
    <div>
      {/* Pass handleChange to InvoiceForm as a prop */}
      <InvoiceForm formData={formData} handleChange={handleChange} />

      <div className="mt-7">
        <div className="flex">
          <button
            type="button"
            onClick={addInvoiceRow}
            className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Row to Invoice
          </button>
        </div>

        {/* Render the invoice template only if there is data */}
        {invoiceDataList.length > 0 && (
          <div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={printPdf}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Print Invoice
              </button>
            </div>
            {/* Pass the entire list of invoice data to InvoiceTemplate */}
            <InvoiceTemplate dataList={invoiceDataList} formData={formData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice;
