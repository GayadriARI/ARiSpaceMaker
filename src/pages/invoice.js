import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { PDFDocument } from "pdf-lib";
import ST from "../assets/ST.png";
import ARI from "../assets/ari.png";
import "./invoice.css";

function Invoice() {
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = 0;
      const imgY = 0;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  // const previewPDF = async () => {
  //   const input = document.getElementById("pdf-content");

  //   const canvas = await html2canvas(input);
  //   const imgData = canvas.toDataURL("image/png");

  //   const pdfDoc = await PDFDocument.create();
  //   const page = pdfDoc.addPage([canvas.width, canvas.height]);
  //   const pngImage = await pdfDoc.embedPng(imgData);

  //   const { width, height } = page.getSize();
  //   page.drawImage(pngImage, {
  //     x: 0,
  //     y: 0,
  //     width,
  //     height,
  //   });

  //   const pdfBytes = await pdfDoc.save();

  //   const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

  //   const blobUrl = URL.createObjectURL(pdfBlob);
  //   window.open(blobUrl, "_blank");
  // };
  return (
    <div>
      <div id="pdf-content">
        <div className="App" ref={pdfRef}>
          <img
            src={ST}
            alt="sample"
            style={{ marginTop: "10px", marginLeft: "-69%", width: "12%" }}
          />

          <div
            className="invoice-container"
            style={{ marginLeft: "-70%", marginTop: "2%" }}
          >
            <div className="address">
              <div className="from-address">
                <div
                  className="invoice-details"
                  style={{ margin: "15px auto 0 auto", marginLeft: "150px" }}
                >
                  <h2
                    style={{
                      marginLeft: "32%",
                      color: "#254A9A",
                      fontSize: "16px",
                    }}
                  >
                    <b>INVOICE</b>
                  </h2>
                  <p style={{ fontSize: "14px" }}>
                    <b>Invoice Number : </b> INV1-20553001
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    <b>Invoice Details : </b> WB-CCUI-1004-2122
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    <b>InvoiceDate : </b> September 8, 2023
                  </p>
                </div>
                <h3
                  style={{
                    color: "#254A9A",
                    marginTop: 10,
                    fontSize: "14px",
                    marginLeft: "150px",
                  }}
                >
                  Sold By:
                </h3>
                <div
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    marginLeft: "150px",
                  }}
                >
                  <p>
                    <b>Company Name : </b>Automotive Robotics
                  </p>
                  <p>
                    <b>Landmark : </b>Sholinganallur,Tek Meadows Campus
                  </p>
                  <p>
                    <b>State & City : </b>Tamil Nadu,Chennai
                  </p>
                  <p>
                    <b>Zip Code : </b>600119
                  </p>
                  <p>
                    <b>Contact : </b>XXXXXX
                  </p>
                  <p>
                    <b>Mail Address : </b>XXXX@gmail.com
                  </p>
                </div>
              </div>
              <div className="to-address">
                <h3
                  style={{
                    color: "#254A9A",
                    marginLeft: 900,
                    marginTop: -214,
                    fontSize: "14px",
                  }}
                >
                  Shipping Address:
                </h3>
                <p style={{ marginLeft: 900, fontSize: "14px" }}>
                  <b>Company Name : </b>Saint-Gobain
                </p>
                <p style={{ marginLeft: 900, fontSize: "14px" }}>
                  <b>Landmark : </b>Rukmani Lakshmipathi Rd,Egmore
                </p>
                <p style={{ marginLeft: 900, fontSize: "14px" }}>
                  <b>State & City : </b>Tamil Nadu,Chennai
                </p>
                <p style={{ marginLeft: 900, fontSize: "14px" }}>
                  <b>Zip Code : </b>600008
                </p>
                <p style={{ marginLeft: 900, fontSize: "14px" }}>
                  <b>Contact : </b>XXXXXX
                </p>
                <p style={{ marginLeft: 900, fontSize: "14px" }}>
                  <b>Mail Address : </b>XXXX@gmail.com
                </p>
              </div>
            </div>
            <div>
              <table className="Heading">
                <thead>
                  <tr style={{ color: "#254A9A" }}>
                    <th>S.NO</th>
                    <th>Profile Name</th>
                    <th>Code</th>
                    <th>Color</th>
                    <th>Cross-Section</th>
                    <th>Length</th>
                    <th>Pcs</th>
                    <th>Billing Qty</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CW TOP HUNG EX FAN PROV</td>
                    <td>5b00133</td>
                    <td>White</td>
                    <td>No Image</td>
                    <td>4.6</td>
                    <td>3</td>
                    <td>12,500</td>
                    <td>Mtr</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>CMT RIGHT-SIDE HUNG DOOR</td>
                    <td>QH65G8H3</td>
                    <td>White</td>
                    <td>No Image</td>
                    <td>5.2</td>
                    <td>6</td>
                    <td>21,380</td>
                    <td>Mtr</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <b>Total</b>
                    </td>
                    <td>
                      <b>9</b>
                    </td>
                    <td>
                      <b>33,880</b>
                    </td>
                    <td>
                      <b>Mtr</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ marginTop: "8px" }}>
            <button className="Button1" onClick={downloadPDF}>
              Download
            </button>
            <img
              src={ARI}
              alt="sample"
              style={{
                marginTop: "25px",
                float: "right",
                width: "65px",
                marginRight: "2%",
              }}
            />
            {/* <button className="Button" onClick={previewPDF}>
          Preview
        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invoice;
