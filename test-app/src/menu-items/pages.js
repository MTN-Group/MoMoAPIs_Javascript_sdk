import Collections from './menuObjects/Collections'
import Remittance from './menuObjects/Remittance'
import Disbursement from './menuObjects/Disbursement'
import Sandbox from './menuObjects/Sandbox'

// assets
import {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
} from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
};
// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
  id: "pages",
  title: "Pages",
  caption: "",
  type: "group",
  children: [
    {
      id: "Collections",
      title: "Collections",
      type: "collapse",
      icon: icons.IconKey,
      children: Collections,
    },
    {
      id: "Disbursement",
      title: "Disbursements",
      type: "collapse",
      icon: icons.IconKey,
      children: Disbursement,
    },
    {
      id: "Remittance",
      title: "Remittance",
      type: "collapse",
      icon: icons.IconKey,
      children: Remittance,
    },
    {
      id: "Sandbox",
      title: "Sandbox",
      type: "collapse",
      icon: icons.IconKey,
      children: Sandbox,
    },
  ],
};
export default pages;
