import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    laravel,
    tailwind,
    vue,
    mysql,
    git,
    figma,
    gsap,
    radya,
    undip,
    radyaweb,
    sikp,
    saitama,
    php,
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
      title: "Frontend Developer",
      icon: mobile,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "GSAP",
      icon: php,
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
      name: "gsap",
      icon: gsap,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Universitas Diponegoro",
      icon: undip,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Jun 2023",
      points: [
        "Responsible for creating the front-end of Computer Engineering’s practical work information system",
        "Integrate data from database to client-side in practical work information system.",
        "Deploy the project to public web.",
        "Perform testing and validation to ensure the system is ready for use.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Radya Digital",
      icon: radya,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Responsible for creating the front-end of Radya Anugrah Digital's company profile website.",
        "Responsible for integrate data from database to client-side in Radya Anugrah Digital's company profile website.",
        "Responsible for configuring SEO to make the website appear top in browser searches.",
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
      name: "Radya Company Profile",
      description:
        "Radya Digital company profile that is used to provide information about Radya Digital. This website page contains home, portfolio, blog, career, and contact to support radya digital customer's needs .",
      tags: [
        {
          name: "laravel",
          color: "orange-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: radyaweb,
      source_code_link: "https://radyadigital.com/",
    },
    {
      name: "SI KP",
      description:
        "A web application that is used as a platform for organizing and recording practical work in computer engineering.",
      tags: [
        {
          name: "laravel",
          color: "orange-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: sikp,
      source_code_link: "https://si-kp.com/",
    },
    {
      name: "GSAP Scroll",
      description:
        "a web page to implement the gsap framework. Gsap is a framework to make websites more interactive and attractive..",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "gsap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: saitama,
      source_code_link: "https://transition-saitama.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };