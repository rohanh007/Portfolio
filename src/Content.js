// import images
import Hero_person from "./assets/images/Hero/hero_peronal.png";

import mongodb from "./assets/images/Skills/mongoDB.png";
import mysql from "./assets/images/Skills/mysql.png";
import redux from "./assets/images/Skills/redux-icon.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/web_development.png";
import services_logo2 from "./assets/images/Services/ui_ux.png";
import services_logo3 from "./assets/images/Services/mobile_development.png";
import services_logo4 from "./assets/images/Services/ecommerce_solution.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/swiggy.webp";
import project3 from "./assets/images/projects/technews.jpg";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "MERN Stack Developer",
    firstName: "ROHAN",
    LastName: "HOVAL",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Node js",
        para: "Building scalable and efficient web applications",
        description:[
          "Event-Driven Architecture for responsiveness",
          "Non-Blocking I/O for efficiency",
          "Express.js for streamlined development",
          "MongoDB Integration for data management" 
        ],
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Crafting interactive user interfaces with React.js",
        description:[
          "Component-Based Architecture for modularity",
          "Virtual DOM for efficient rendering",
          "Redux for state management",
          "Responsive Design for adaptability  make this into the js array" 
      ],
        logo: reactjs,
      },
      {
        name: "Redux",
        para: "Managing application state with Redux",
        description:[
          "Predictable State Management for stability",
           "Action-Driven Architecture for control",
          "Middleware Integration for async operations",
            "DevTools Integration for debugging"
      ],
        logo: redux,
      },
      {
        name: "Python",
        para: "Building versatile and efficient applications with Python",
        description:[
          "Clean & Maintainable Code for readability",
          "Extensive Library/Framework Support for versatility",
          "Integration & Automation for efficiency",
          "Cross-Domain Application for diverse solutions" 
      ],
        logo: python,
      },
    
      {
        name: "MongoDB",
        para: "Building scalable and flexible database solutions with MongoDB",
        description:[
          "Document-Oriented Storage for flexibility",
          "Query Optimization for speed",
          "Aggregation Framework for analysis",
          "Scalability & Replication for reliability",
      ],
        logo: mongodb,
      },
      {
        name: "MySQL",
        para: "Building robust relational database solutions with MySQL",
        description:[
          "Relational Data Modeling for efficiency",
          "SQL Query Optimization for performance",
          "Transaction Management for data consistency",
          "Security and Access Control for protection"
      ],
        logo: mysql,
      },
     
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Crafting custom websites and web applications tailored to your needs, using the latest technologies and best practices",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Mobile App Development",
        para: "Building intuitive and feature-rich mobile applications for iOS and Android platforms, ensuring a seamless user experience.",
        logo:services_logo3,
      },
      {
        title: "E-commerce Solutions",
        para: "Developing scalable e-commerce platforms with secure payment gateways, inventory management, and customer management features.",
        logo:services_logo4,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      // {
      //   title: "Gym Website",
      //   image: project1,
      // },
      {
        title: "Swiggy Clone",
        image: project2,
      },
      {
        title: "Tech News",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hoval.rohan.11@gmail.com",
        icon: GrMail,
        link: "mailto:hoval.rohan.11@gmail.com",
      },
      {
        text: "+91 7218006256",
        icon: MdCall,
        link: "https://wa.me/7218006256",
      },
      {
        text: "rohanhoval",
        icon: BsInstagram,
        link: "",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
