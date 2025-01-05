import React from "react";

const InvoiceTemplate = ({ dataList, invoiceNumber }) => {
  console.log(dataList);
  return (
    <div className="p-4">
      <div className="m-2 border-solid border-2 border-gray-500">
        <div className="p-2">
          <h1 className="font-bold text-lg">
            BION RENEWABLE ENERGY SOLAR SERVICE
          </h1>
          <div className="flex justify-between">
            <p className="text-sm">
              THADIYAMPADU P.O, IDUKKI
              <br />
              KERALA-685602
              <br />
              PH: 9496444207
              <br />
              GSTIN/UID: 32BLFPR6377E1ZY
            </p>
            <h1 className="font-bold">TAX INVOICE (B2B) – CASH</h1>
          </div>
        </div>
        <div className="p-2 w-full border-t-2 border-gray-500">
          <div className="flex justify-between">
            {/* Left Column */}
            <div className="flex flex-col text-sm">
              <span className="font-semibold">Invoice No: {invoiceNumber}</span>
              <span className="font-semibold">
                Invoice Date:{dataList[0].invoiceDate}
              </span>
              <span className="font-semibold">PO No: {dataList[0].poNo}</span>
              <span className="font-semibold">
                PO Date:{dataList[0].poDate}
              </span>
              <span className="font-semibold">Site: {dataList[0].site}</span>
            </div>

            {/* Right Column */}
            <div className="flex flex-col text-right text-sm mt-4 md:mt-0">
              <span className="font-semibold">Tr. Mode: Road</span>
              <span className="font-semibold">
                Veh. No: {dataList[0].vehicleNo}
              </span>
              <span className="font-semibold">
                Supply Date: {dataList[0].supplyDate}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <table className="w-full border-b-2 bo border-gray-500 text-sm">
            <tr>
              <td className="w-1/2 align-top border-r-2 border-t-2 border-gray-500">
                <div className="p-2">
                  <p className="font-bold">Billed To:</p>
                  <p>Name: {dataList[0].name}</p>
                  <p>Address: {dataList[0].address}</p>
                  <p>PHONE: {dataList[0].phone}</p>
                  <p>GSTIN/UID: {dataList[0].gstnId}</p>
                </div>
              </td>
              <td className="w-1/2 align-top border-t-2 border-gray-500 text-right">
                <div className="p-2">
                  <p className="font-bold">Shipped To:</p>
                  <p>Name: {dataList[0].name}</p>
                  <p>Address: {dataList[0].address}</p>
                  <p>PHONE: {dataList[0].phone}</p>
                  <p>GSTIN/UID: {dataList[0].gstnId}</p>
                </div>
              </td>
            </tr>
          </table>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-spacing-0 text-xs md:text-sm">
              <thead>
                <tr>
                  {[
                    "SL.NO",
                    "Description of Good",
                    "HSN/SAC",
                    "Qty/ Uom",
                    "RATE",
                    "DISCOUNT",
                    "Net Value",
                    "CGST/SGST",
                    "Total",
                  ].map((header, idx) => (
                    <td
                      key={idx}
                      className={`${
                        idx === 7
                          ? "border-b-2 border-r-2 text-center border-gray-500"
                          : "border-b-2 border-r-2 text-center  font-bold border-gray-500"
                      }`}
                    >
                      {idx === 7 ? (
                        <table className="w-full">
                          <thead>
                            <tr>
                              <td
                                colSpan={2}
                                className="border-b-2 border-r-2 border-gray-500 font-bold text-center"
                              >
                                CGST
                              </td>
                              <td
                                colSpan={2}
                                className="border-b-2 border-gray-500 font-bold text-center"
                              >
                                SGST
                              </td>
                            </tr>
                            <tr>
                              <td className="border-r-2 border-gray-500 font-semibold text-center">
                                CGST %
                              </td>
                              <td className="border-r-2 border-gray-500 font-semibold text-center">
                                Amount
                              </td>
                              <td className="border-r-2 border-gray-500 font-semibold text-center">
                                SGST %
                              </td>
                              <td className="font-semibold text-center">
                                Amount
                              </td>
                            </tr>
                          </thead>
                        </table>
                      ) : (
                        header
                      )}
                    </td>
                  ))}
                </tr>
              </thead>

              <tbody>
                {dataList.map((data, index) => (
                  <tr key={index}>
                    <td className="border-b-2 border-r-2 text-center border-gray-500">
                      {index + 1}
                    </td>
                    <td className="border-r-2 border-b-2 text-center border-gray-500">
                      {data.description}
                    </td>
                    <td className="border-r-2 border-b-2 text-center border-gray-500">
                      {data.hsnCode}
                    </td>
                    <td className="border-r-2 border-b-2 text-center border-gray-500">
                      {data.unit}
                    </td>
                    <td className="border-r-2 border-b-2 text-center border-gray-500">
                      {data.rate}
                    </td>
                    <td className="border-r-2 border-b-2 text-center border-gray-500">
                      {data.discount}
                    </td>
                    <td className="border-r-2 border-b-2 text-center border-gray-500">
                      {data.netValue}
                    </td>
                    <td className="border-r-2 border-b-2 text-center border-gray-500">
                      <table className="w-full border-collapse">
                        <tbody>
                          <tr>
                            <td className="border-r-2 text-center border-gray-500">
                              {data.cgstPercentage}
                            </td>
                            <td className="border-r-2 text-center border-gray-500">
                              {data.cgstAmount}
                            </td>
                            <td className="border-r-2 text-center border-gray-500">
                              {data.sgstPercentage}
                            </td>
                            <td className="text-center border-gray-500">
                              {data.sgstAmount}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="border-b-2 text-center border-gray-500">
                      {data.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <table className="w-full border-collapse border-spacing-0 text-sm border">
            <tbody>
              <tr>
                <td className="w-[70%] border-r-2 border-b-2 border-gray-500 p-2 text-right font-bold">
                  Total
                </td>
                <td className="p-2 text-center border-b-2 border-gray-500">
                  ₹ {dataList[0].totalAmountNumber}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="border-b-2 p-2 text-center border-gray-500"
                >
                  INR {dataList[0].totalAmountEnglish} ONLY
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 flex justify-between text-xs md:text-sm">
          <div>
            <h1 className="font-bold">
              Bank: SBI Idukki A/c No. 67359957055, ISFC – SBIN0070027
            </h1>
            <p>
              Certified that the particulars given above are true and correct.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p>For BION RENEWABLE ENERGY SOLAR SERVICE</p>
          </div>
        </div>
        <div className="text-right p-2">
          <p>Authorized Signatory</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
