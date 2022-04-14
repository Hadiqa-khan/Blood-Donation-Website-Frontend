import React from "react";
import "./Donor.css";
{/*const DonItem = [
  { text: "Blood Center :", value: "Shahrefaisal" },
  { text: "Branch :", value: "Airport" },
  { text: "Last Donated:", value: "25-2-21" },
  { text: "Weight  :", value: "55" },
  {text: "Disease : ",value:"BP"}
];*/}
function DonationInfo() {
  const Data = [
    {BloodCenter: "", Branch:"" , DateOfDonation:"",Weight :"", Disease :""}
]
  return (
    <div style={{backgroundColor:"#e3f2fd"}}>
      <form>
      <h1>Donation Information</h1>
      <table>
            <tr>
              <th>Blood Center</th>
              <th>Branch</th>
              <th>Date Of Donation</th> 
              <th>Weight</th> 
              <th>Disease</th> 
              </tr>
            {Data.map((item) => (
            <tr>
            <td>{item.BloodCenter}</td>
              <td>{item.Branch}</td>
              <td>{item.LastDonated}</td>
              <td>{item.Weight}</td>
              <td>{item.Disease}</td>
          </tr>
          ))}
        </table>
      </form>
    </div>
  );
}
export default DonationInfo;
