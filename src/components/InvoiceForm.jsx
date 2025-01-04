import React from "react";

const InvoiceForm = ({ formData, handleChange }) => {
  return (
    <div className="no-print max-w-[800px] mx-auto p-4 rounded-md bg-gray-900 text-white m-2">
      <h2 className="text-center text-2xl font-bold mb-6">Invoice Form</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Description of Good */}
        <div>
          <label className="block text-sm font-medium">Shipping to Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">phone:</label>
          <input
            type="number"
            name="gstnId"
            value={formData.gstnId}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">GST Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Description of Good:
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>

        {/* HSN Code */}
        <div>
          <label className="block text-sm font-medium">HSN CODE:</label>
          <input
            type="text"
            name="hsnCode"
            value={formData.hsnCode}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium">Quantity:</label>
          <input
            type="text"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block text-sm font-medium">Unit:</label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium">Rate:</label>
          <input
            type="text"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block text-sm font-medium">Discount:</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>

        {/* Net Value */}
        <div>
          <label className="block text-sm font-medium">Net Value:</label>
          <input
            type="text"
            name="netValue"
            value={formData.netValue}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">CGST Percantage:</label>
          <input
            type="text"
            name="cgstPercentage"
            value={formData.cgstPercentage}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">CGST Amount:</label>
          <input
            type="text"
            name="cgstAmount"
            value={formData.cgstAmount}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">SGST Percantage:</label>
          <input
            type="text"
            name="sgstPercentage"
            value={formData.sgstPercentage}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">SGST Amount:</label>
          <input
            type="text"
            name="sgstAmount"
            value={formData.sgstAmount}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Total:</label>
          <input
            type="text"
            name="total"
            value={formData.total}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
