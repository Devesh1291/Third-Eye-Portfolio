import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "NEWS-O-MANIAC",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2022 - January 2023",
      points: [
        "Recat based project that works with news API to fetch the data and display'sthese news on my website",
       " Displays the news in short and attractive format.",
       " I have added different categories in it. So one can read in accordance to his requirement.",
      ],
    },
    {
      title: "Cinema Central",
      // company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Most attractive and eye catchy movies website using pure HTML, CSS, AND JAVASCRIPT.",
        "I also added Night or dark mode.",
        "The website's design is typically visually appealing, with high-quality images and videos used to showcase movie content.",
      ],
    },
    {
      title: "Upcycle Tech",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "An e-waste resell website project aims to promote the reselling of electronic waste (e-waste) and reduce the amount of waste that ends up in landfills.",
        "The website provides a platform for individuals and businesses to sell their used electronics and gadgets.",
        "Users can create accounts to manage their listings and purchases, as well as leave feedback for buyers and sellers.",
      ],
    },
    {
      title: "Portfolio Website",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "The most impressive 3d portfolio website that uses 3d graphics and animations to bring their content to life.",
        "I designed this website using very powerfull and popular librarary such asThreeJS, React Three Fiber, Framer Motion.",
        "The website is optimized for mobile devices.",
        "A contact page makes it easy for potential clients and employers to get in touch.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Excel",
      description:
        "I have successfully completed the coarse offered by Great Learning.",
      tags: [
        {
          name: "Excel For Intermediate Level",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: carrent,
      // source_code_link: "https://github.com/",
    },
    {
      name: "ReactJS",
      description:
        "A Wonderfull bootcamp that covers all the basics of React.JS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css , HTML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Javascript",
      description:
        "I have successfully completed the coarse offered by Great Learning.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML , CSS",
          color: "green-text-gradient",
        },
        {
          name: "TaiwindCss, Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      // source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  