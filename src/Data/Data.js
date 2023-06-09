// Sidebars Imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// sidebar
export const SidebarData = [
  { id: 0, icon: UilEstate, heading: "Dashboard", path: "/" },
  { id: 1, icon: UilClipboardAlt, heading: "Orders", path: "/orders" },
  { id: 2, icon: UilUsersAlt, heading: "Customers", path: "/customers" },
  { id: 3, icon: UilPackage, heading: "Products", path: "/products" },
  { id: 4, icon: UilChart, heading: "Analytics", path: "/analytics" },
];

export const registerFormData = [
  {
    id: "fName",
    name: "fName",
    placeholder: "First Name",
    type: "text",
    for: "fName",
    lable: "First Name",
  },
  {
    id: "lName",
    name: "lName",
    placeholder: "Last Name",
    type: "text",
    for: "lname",
    lable: "Last Name",
  },
  {
    id: "cNum",
    name: "cNum",
    placeholder: "Contac Number",
    type: "text",
    for: "cNum",
    lable: "Contac Number",
  },
  {
    id: "email",
    name: "email",
    placeholder: "email",
    type: "email",
    for: "email",
    lable: "Email",
  },
  {
    id: "password",
    name: "password",
    placeholder: "password",
    type: "password",
    for: "password",
    lable: "Password",
  },
  {
    id: "cPpassword",
    name: "cPpassword",
    placeholder: "Confirm Password",
    type: "cPpassword",
    for: "cPpassword",
    lable: "Confirm Password",
  },
];
