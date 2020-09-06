import img1 from "../assets/images/home/Man-PNG-Pic.jpg";
import img2 from "../assets/images/home/255-2559295_men-robert-negoita.jpg";
import img3 from "../assets/images/home/woman-smiling-png-1.jpg";
import img4 from "../assets/images/home/364-3645348_about-us-executive-suit-for-women.jpg";
import img5 from "../assets/images/home/340-3400395_guy-left-call-center-man-png.jpg";
import img6 from "../assets/images/home/edu-women.jpg";

// Services
import icon1 from "../assets/images/home/stock-market.svg";
import icon2 from "../assets/images/home/team-management.svg";
import icon3 from "../assets/images/home/strategy.svg";
import icon4 from "../assets/images/home/list.svg";
import icon5 from "../assets/images/home/audit.svg";
import icon6 from "../assets/images/home/talk.svg";

// market card
import market1 from "../assets/images/Loesungen_Marktforschung.jpg";
import market2 from "../assets/images/Marktanalysen&Prognosen.jpg";
import market3 from "../assets/images/askStatista.jpg";

export const profileCardImg = [img1, img2, img3, img4, img5, img6];
export const listProfile = [
  {
    icon: img1,
    profileName: "Market Analysis",
    jobTitle: "Co-Founder & CTO",
  },
  {
    icon: img2,
    profileName: "Found Management",
    jobTitle: "Executive Cosultant",
  },
  {
    icon: img3,
    profileName: "Jennifer Bailey",
    jobTitle: "Safety Consultant",
  },
  {
    icon: img4,
    profileName: "Frida Logan",
    jobTitle: "Economic Asistant",
  },
  {
    icon: img5,
    profileName: "Nick Osmani",
    jobTitle: "Programmer",
  },
  {
    icon: img6,
    profileName: "Eden Walker",
    jobTitle: "Consultant",
  },
];
export const serviceCardImg = [icon1, icon2, icon3, icon4, icon5, icon6];

export const listServices = [
  {
    icon: icon1,
    title: "Market Analysis",
    desc: "We support your business with fact- based market resarch ",
  },
  {
    icon: icon2,
    title: "Found Management",
    desc: "We support your business with fact  based market resarch",
  },
  {
    icon: icon3,
    title: "PR & Marketing",
    desc: "We support your business with fact  based market resarch",
  },
  {
    icon: icon4,
    title: "Business Planing",
    desc: "We support your business with fact  based market resarch",
  },
  {
    icon: icon5,
    title: "Audit",
    desc: "We support your business with fact  based market resarch",
  },
  {
    icon: icon6,
    title: "Consulting",
    desc: "We support your business with fact  based market resarch",
  },
];

export const marketList = [
  {
    img: market1,
    title: "Market Resarch",
    desc:
      "As a full-service market research firm, we help you find the answers to your questions about consumers, brands and products. Each year, weconduct more than a million interviews, while collecting and analyzing data ",
    btn: [{ name: "read more", to: "/#" }],
  },
  {
    img: market2,
    title: "Market Analyses & Forecasts",
    desc:
      "What's the size of your market segment? How are markets developing? What are the trends behind these developments? For many years, we have specialized in building market models and developing forecasting methods. ",
    btn: [{ name: "read more", to: "/#" }],
  },
  {
    img: market3,
    title: "Business Planing And Consulting?",
    desc:
      "What's the size of your market segment? How are markets developing? What are the trends behind these developments? For many years, we have specialized in building market models and developing forecasting methods. ",
    btn: [
      { name: "solution", to: "/#" },
      { name: "contact us", to: "/contact" },
    ],
  },
];
