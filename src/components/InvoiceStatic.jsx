import React from "react";

const InvoiceStatic = ({ formData, handleChange }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 w-full max-w-md rounded-md shadow-md p-6">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Shipping Details
        </h2>
        <form className="space-y-4">
          {/* Shipping to Name */}
          <div>
            <label className="block text-sm font-medium text-white">
              Shipping to Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-white">
              Address:
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter address"
            ></textarea>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-white">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          {/* GST Number */}
          <div>
            <label className="block text-sm font-medium text-white">
              GST Number:
            </label>
            <input
              type="text"
              name="gstnId"
              value={formData.gstnId}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter GST number"
            />
          </div>

          {/* Invoice Date */}
          <div>
            <label className="block text-sm font-medium text-white">
              Invoice Date:
            </label>
            <input
              type="date"
              name="invoiceDate"
              value={formData.invoiceDate}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PO No */}
          <div>
            <label className="block text-sm font-medium text-white">
              PO No:
            </label>
            <input
              type="text"
              name="poNo"
              value={formData.poNo}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter PO number"
            />
          </div>

          {/* PO Date */}
          <div>
            <label className="block text-sm font-medium text-white">
              PO Date:
            </label>
            <input
              type="date"
              name="poDate"
              value={formData.poDate}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Site */}
          <div>
            <label className="block text-sm font-medium text-white">
              Site:
            </label>
            <input
              type="text"
              name="site"
              value={formData.site}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter site"
            />
          </div>

          {/* Vehicle No */}
          <div>
            <label className="block text-sm font-medium text-white">
              Vehicle No:
            </label>
            <input
              type="text"
              name="vehicleNo"
              value={formData.vehicleNo}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter vehicle number"
            />
          </div>

          {/* Supply Date */}
          <div>
            <label className="block text-sm font-medium text-white">
              Supply Date:
            </label>
            <input
              type="date"
              name="supplyDate"
              value={formData.supplyDate}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Total Amount in English */}
          <div>
            <label className="block text-sm font-medium text-white">
              Total Amount (in English):
            </label>
            <input
              type="text"
              name="totalAmountEnglish"
              value={formData.totalAmountEnglish}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter total amount in English"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-3 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceStatic;
