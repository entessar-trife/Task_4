import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import type { ReactNode } from "react";

interface Footer {
  title: string;
  links?: string[]
  social?: boolean
  desc?: string,
  footerIcons?: ReactNode[];
}

export const FooterData: Footer[] = [
  {
    title: "Service",
    links: [
      "Payment & Tax",
      "Features",
      "View Booking",
      "Support"
    ]
  },
  {
    title: "About",
    links: [
      "About us",
      "News",
      "Pricing",
      "New Property"
    ]
  },
  {
    title: "Our Location",
    desc: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
    social: true,
    footerIcons: [
      <FaFacebookF />,
      <FaTwitter />,
      <FaLinkedinIn />
    ]
  }
]

