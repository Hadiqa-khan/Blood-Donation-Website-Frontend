import React from "react";
import "./Donor.css";

const ProfileItems = [
  { text: "First Name :", value: "Sadeem" },
  { text: "Last Name :", value: "Sattar" },
  { text: "Age :", value: "25" },
  { text: "Gender :", value: "Male" },
  { text: "Blood Group : ", value: "A" },
  { text: "Blood Sign: ", value: "+ve(1)" },
  { text: "Email :", value: "sadeemsattar@gmail.com" },
  { text: "Contact Number :", value: "03331297472" },
];
function DonarInfo() {
  return (
    <div style={{backgroundColor:"#e3f2fd"}}>
      <form>
        <table>
          <h1>Donor Information</h1>
          {ProfileItems.map((item) => (
            <tr>
              <td>{item.text}</td>
              <td>
                <input value={item.value}></input>
              </td>
            </tr>
          ))}
        </table>
      </form>
    </div>
  );
}
export default DonarInfo;
