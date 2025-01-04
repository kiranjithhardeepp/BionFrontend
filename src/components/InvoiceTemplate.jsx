import React from "react";

const InvoiceTemplate = ({ dataList, formData }) => {
  console.log(dataList);
  return (
    <div>
      <div className="m-2 border-solid border-2 border-gray-500">
        <div className="p-2">
          <h1 className="font-bold">BION RENEWABLE ENERGY SOLAR SERVICE</h1>
          <div className="flex justify-between">
            <p>
              THADIYAMPADU P.O ,IDUKKI
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
            <div className="flex flex-col">
              <span className="font-semibold">Invoice No.:</span>
              <span className="font-semibold">Invoice Date: 12222</span>
              <span className="font-semibold">PO No:</span>
              <span className="font-semibold">PO Date:</span>
              <span className="font-semibold">Site: PHC VANNAPPURAM</span>
            </div>

            {/* Right Column */}
            <div className="flex flex-col text-right">
              <span className="font-semibold">Tr. Mode: Road</span>
              <span className="font-semibold">Veh. No.: KL37-A-2764</span>
              <span className="font-semibold">Supply Date: 04.01.2025</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <table className="w-full border-t-2 border-b-2 border-gray-500">
            <tr>
              <td className="w-1/2 align-top border-r-2 border-t-2 border-gray-500">
                <div className="text-sm text-neutral-600 p-2">
                  <p className="font-bold">Billed To:</p>
                  <p>Name: {formData.name}</p>
                  <p>Address: {formData.address}</p>
                  <p>PHONE: {formData.phone}</p>
                  <p>GSTIN/UID: {formData.gstnId}</p>
                </div>
              </td>
              <td className="w-1/2 align-top text-right border-t-2 border-gray-500">
                <div className="text-sm text-neutral-600 p-2">
                  <p className="font-bold">Shipped To:</p>
                  <p>Name: {formData.name}</p>
                  <p>Address: {formData.address}</p>
                  <p>PHONE: {formData.phone}</p>
                  <p>GSTIN/UID: {formData.gstnId}</p>
                </div>
              </td>
            </tr>
          </table>
          <table className="w-full border-collapse border-spacing-0">
            <thead>
              <tr>
                {/* Table headers */}
                <td className="border-b-2 border-r-2 pb-3 pl-3 text-center font-bold border-gray-500">
                  SL.NO
                </td>
                <td className="border-r-2 border-b-2 text-center pb-3 pl-2 font-bold border-gray-500">
                  Description of Good
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-bold border-gray-500">
                  HSN/SAC
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-bold border-gray-500">
                  Qty/ Uom
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-bold border-gray-500">
                  RATE
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-bold border-gray-500">
                  DISCOUNT
                </td>
                <td className="border-r-2 border-b-2 pb-3 pl-2 text-center font-bold border-gray-500">
                  Net Value
                </td>
                <td className="border-r-2 border-b-2 text-center border-gray-500">
                  <table className="w-full h-full border-gray-500">
                    <tbody>
                      <tr className="w-full border-b-2 font-bold border-gray-500 ">
                        CGST/SGST
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-r-2 text-center border-gray-500 w-1/4">
                          CGST %
                        </td>
                        <td className=" px-4 py-2 text-center border-r-2 border-gray-500 w-1/4">
                          Amount
                        </td>
                        <td className="px-4 py-2  border-r-2 text-center border-gray-500 w-1/4">
                          SGST %
                        </td>
                        <td className="px-4 py-2  text-center border-gray-500 w-1/4">
                          Amount
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="border-b-2 pb-3 pl-2 pr-3 text-center font-bold border-gray-500">
                  Total
                </td>
              </tr>
            </thead>

            <tbody>
              {dataList.map((data, index) => (
                <tr key={index}>
                  <td className="border-b-2 border-r-2 pb-3 pl-3 text-center border-gray-500">
                    {index + 1}
                  </td>
                  <td className="border-r-2 border-b-2 text-center pb-3 pl-2 border-gray-500">
                    {data.description}
                  </td>
                  <td className="border-r-2 border-b-2 pb-3 pl-2 border-gray-500">
                    {data.hsnCode}
                  </td>
                  <td className="border-r-2 border-b-2 pb-3 pl-2 text-center border-gray-500">
                    {data.unit}
                  </td>
                  <td className="border-r-2 border-b-2 pb-3 pl-2 text-center border-gray-500">
                    {data.rate}
                  </td>
                  <td className="border-r-2 border-b-2 pb-3 pl-2 text-center border-gray-500">
                    {data.discount}
                  </td>
                  <td className="border-r-2 border-b-2 pb-3 pl-2 text-center border-gray-500">
                    {data.netValue}
                  </td>
                  <td className="border-r-2 border-b-2 text-center border-gray-500">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr>
                          <td className="border-r-2 border-gray-500 px-4 py-2 w-1/4">
                            {data.cgstPercentage}
                          </td>
                          <td className="border-r-2 border-gray-500 px-4 py-2 w-1/4">
                            {data.cgstAmount}
                          </td>
                          <td className="border-r-2 border-gray-500 px-4 py-2 w-1/4">
                            {data.sgstPercentage}
                          </td>
                          <td className=" border-gray-500 px-4 py-2 w-1/4">
                            {data.sgstAmount}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="border-b-2 pb-3 pl-2 text-center border-gray-500">
                    {data.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="p-2 flex justify-between">
            <div>
              <h1 className="font-bold">
                Bank: SBI Idukki A/c No. 67359957055, ISFC – SBIN0070027
              </h1>
              <p>
                Certified that the particulars given above are true and correct.
              </p>
            </div>
            <div>
              <p>For BION RENEWABLE ENERGY SOLAR SERVICE</p>
            </div>
          </div>
          <div className="text-right p-2">
            <p></p>
            Authorized Signatory
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
