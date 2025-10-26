const PUBLIC_BASE_URL = import.meta.env.BASE_URL;
export const myProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
      subDescription: [
        "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
        "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
        "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
        "Added payment systems, localization, and product filtering for functionality improvements.",
      ],
      href: "",
      logo: "",
      image: PUBLIC_BASE_URL + "/assets/projects/accessories.jpg",
      tags: [
        {
          id: 1,
          name: "C#",
          path: PUBLIC_BASE_URL + "/assets/logos/csharp.svg",
        },
        {
          id: 2,
          name: ".Net",
          path: PUBLIC_BASE_URL + "/assets/logos/dotnet.svg",
        },
        {
          id: 3,
          name: "Ef Core",
          path: PUBLIC_BASE_URL + "/assets/logos/efcore.png",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: PUBLIC_BASE_URL + "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Authentication & Authorization System",
      description:
        "A secure authentication and authorization system using Auth0 for seamless user management.",
      subDescription: [
        "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
        "Implemented role-based access control (RBAC) for fine-grained user permissions.",
        "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
        "Connected to a secure SQLite database for user data storage.",
      ],
      href: "",
      logo: "",
      image: PUBLIC_BASE_URL + "/assets/projects/auth-system.jpg",
      tags: [
        {
          id: 1,
          name: "Auth0",
          path: PUBLIC_BASE_URL + "/assets/logos/auth0.svg",
        },
        {
          id: 2,
          name: "React",
          path: PUBLIC_BASE_URL + "/assets/logos/react.svg",
        },
        {
          id: 3,
          name: "SQLite",
          path: PUBLIC_BASE_URL + "/assets/logos/sqlite.svg",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: PUBLIC_BASE_URL + "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 3,
      title: "Blazor Web App",
      description:
        "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
      subDescription: [
        "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
        "Implemented API interactions using .NET Core for a robust backend.",
        "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
        "Integrated SQLite for efficient client-side database storage.",
      ],
      href: "",
      logo: "",
      image: PUBLIC_BASE_URL + "/assets/projects/blazor-app.jpg",
      tags: [
        {
          id: 1,
          name: "Blazor",
          path: PUBLIC_BASE_URL + "/assets/logos/blazor.svg",
        },
        {
          id: 2,
          name: ".NET Core",
          path: PUBLIC_BASE_URL + "/assets/logos/dotnetcore.svg",
        },
        {
          id: 3,
          name: "SQLite",
          path: PUBLIC_BASE_URL + "/assets/logos/sqlite.svg",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: PUBLIC_BASE_URL + "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 4,
      title: "C++ Game Engine",
      description:
        "A lightweight C++ game engine designed for 2D and 3D game development.",
      subDescription: [
        "Built a powerful rendering engine using OpenGL and C++.",
        "Developed a physics engine with collision detection and particle effects.",
        "Implemented a scripting system for easy game customization.",
        "Optimized performance with multi-threading and efficient memory management.",
      ],
      href: "",
      logo: "",
      image: PUBLIC_BASE_URL + "/assets/projects/game-engine.jpg",
      tags: [
        {
          id: 1,
          name: "C++",
          path: PUBLIC_BASE_URL + "/assets/logos/cplusplus.svg",
        },
        {
          id: 2,
          name: "C#",
          path: PUBLIC_BASE_URL + "/assets/logos/csharp.svg",
        },
        {
          id: 3,
          name: "Git",
          path: PUBLIC_BASE_URL + "/assets/logos/git.svg",
        },
        {
          id: 4,
          name: "Microsoft",
          path: PUBLIC_BASE_URL + "/assets/logos/microsoft.svg",
        },
      ],
    },
    {
      id: 5,
      title: "WordPress Custom Theme",
      description:
        "A fully customizable WordPress theme optimized for performance and SEO.",
      subDescription: [
        "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
        "Integrated Tailwind CSS for modern styling and UI enhancements.",
        "Optimized SEO and page speed using Vite.js for fast builds.",
        "Implemented custom widgets and plugin compatibility for extended functionality.",
      ],
      href: "",
      logo: "",
      image: PUBLIC_BASE_URL + "/assets/projects/wordpress-theme.jpg",
      tags: [
        {
          id: 1,
          name: "WordPress",
          path: PUBLIC_BASE_URL + "/assets/logos/wordpress.svg",
        },
        {
          id: 2,
          name: "HTML5",
          path: PUBLIC_BASE_URL + "/assets/logos/html5.svg",
        },
        {
          id: 3,
          name: "CSS3",
          path: PUBLIC_BASE_URL + "/assets/logos/css3.svg",
        },
        {
          id: 4,
          name: "Vite.js",
          path: PUBLIC_BASE_URL + "/assets/logos/vitejs.svg",
        },
      ],
    },
    {
      id: 6,
      title: "Online Learning Platform",
      description:
        "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
      subDescription: [
        "Built using Blazor WebAssembly for a seamless SPA experience.",
        "Implemented video streaming with Azure Media Services.",
        "Added a quiz system with dynamic question generation and real-time grading.",
        "Integrated Stripe API for secure payment processing.",
      ],
      href: "",
      logo: "",
      image: PUBLIC_BASE_URL + "/assets/projects/elearning.jpg",
      tags: [
        {
          id: 1,
          name: "Blazor",
          path: PUBLIC_BASE_URL + "/assets/logos/blazor.svg",
        },
        {
          id: 2,
          name: "Azure",
          path: PUBLIC_BASE_URL + "/assets/logos/azure.svg",
        },
        {
          id: 3,
          name: "Stripe",
          path: PUBLIC_BASE_URL + "/assets/logos/stripe.svg",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: PUBLIC_BASE_URL + "/assets/logos/tailwindcss.svg",
        },
      ],
    },
  ];
  
  export const mySocials = [
    {
      name: "WhatsApp",
      href: "https://wa.me/971501401675",
      icon: PUBLIC_BASE_URL + "/assets/socials/whatsApp.svg",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/samsonshajigeorge/",
      icon: PUBLIC_BASE_URL + "/assets/socials/linkedIn.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/54mmyyy/",
      icon: PUBLIC_BASE_URL + "/assets/socials/instagram.svg",
    },
  ];
  
  export const experiences = [
    {
      title: "RPA Intern",
      job: "Alpha Data, Dubai, UAE",
      date: "Jul-Aug 2023",
      contents: [
        "I completed an enriching internship at Alpha Data, where I had the opportunity to delve into the field of Robotic Process Automation(RPA).",
        " Additionally, I achieved two important certifications: ",
        "1. <a href='https://drive.google.com/file/d/1ziaE7nKx0A2bYB1zyZlvNcfSGzHHBdVB/view?usp=drivesdk'><u>UiPath Sales Certification</u></a> ",
        "2. <a href='https://drive.google.com/file/d/1wva44RnYDvc7S4w8KL13Ecq44kToPGgc/view?usp=drivesdk'><u>UiPath Presales Certification</u></a>",
        "These certifications equipped me with the skills to effectively navigate and contribute to the growing field of automation and AI solutions.",
      ],
    },
    {
      title: "BTech in Computer Science Engineering",
      job: "REVA University, Bangalore, India",
      date: "2021-2025",
      contents: [
        "Completed a Bachelor of Technology in Computer Science and Engineering, gaining a strong foundation in software development and system design.",
        "Developed proficiency in C, Python, and Java, with hands-on experience in DSA, OOP and DBMS like SQL.",
        "Explored advanced topics such as AI, ML, Deep Learning, Reinforcement Learning, and NLP.",
        "Gained practical knowledge in Web Technologies, Agile and DevOps practices, Cloud Computing, Big Data, and Modern Databases like MongoDB.",
        "For my final year project, engineered a full-stack MERN application for prescription analysis using OCR, NLP, and AI, achieving 88% accuracy and integrating secure JWT authentication with LLM-based medical analytics.",
      ],
    },
    {
      title: "Mar Dionysius School, Kerala, India",
      job: "Class 11 & 12",
      date: "2019-2021",
      contents: [
        "Completed higher secondary education under the CBSE curriculum with a focus on the Science stream (PCMB).",
        "Developed a strong analytical foundation and curiosity for technology, which later guided my pursuit of Computer Science Engineering.",
      ],
    },
    {
      title: "The Indian High School, Dubai, UAE",
      job: "Class 10",
      date: "2007-2019",
      contents: [
        "Completed schooling from KG1 to Grade 10 under the CBSE curriculum at The Indian High School, Dubai.",
        "Built a strong academic foundation and developed essential skills in communication, teamwork, and problem-solving during formative years.",
      ],
    },
  ];
  export const reviews = [
    {
      name: "Sunanth Vikram",
      username: "@AlphaData",
      body: "During his internship at Alpha Data, I was thoroughly impressed by his quick learning and ability to contribute effectively to our team.",
      img: PUBLIC_BASE_URL + "faculty/vikram.jpeg",
    },
    {
      name: "Prof. Nikhil S Tengli ",
      username: "Reva University",
      body: "He was an outstanding student in my AI course, consistently demonstrating a deep grasp of complex concepts and exceptional dedication.",
      img: PUBLIC_BASE_URL + "faculty/nikhil.jpeg",
    },
    {
      name: "Prof. Akram Pasha",
      username: "Reva University",
      body: "This student consistently brings enthusiasm and insightful questions to the classroom, making for a truly engaging learning environment.",
      img: PUBLIC_BASE_URL + "faculty/akram.jpeg",
    },
    {
      name: "Dr. Sanju Pillai",
      username: "Reva University",
      body: "I remember him as a highly proficient student in Computer Organization and Architecture, always excelling in technical assignments.",
      img: PUBLIC_BASE_URL + "faculty/sanju.jpeg",
    },
    {
      name: "Prof. Chaitra M H",
      username: "Reva University",
      body: "He demonstrates a remarkable talent for machine learning, tackling complex projects with both creativity and analytical rigor.",
      img: PUBLIC_BASE_URL + "faculty/chaitra.webp",
    },
    {
      name: "Prof. Sailaja Thota ",
      username: "Reva University",
      body: "A dedicated and proactive student who shows great promise in navigating challenging academic requirements.",
      img: PUBLIC_BASE_URL + "faculty/sailaja.webp",
    },
    {
      name: "Dr. Farooque Azam",
      username: "Reva University",
      body: "His work in applying machine learning models was particularly noteworthy for its efficiency and clear presentation of results.",
      img: PUBLIC_BASE_URL + "faculty/farooque.jpeg",
    },
    {
      name: "Dr. Selvan C",
      username: "Reva University",
      body: "A highly motivated individual whose commitment to learning and growth in his field is evident in all his contributions.",
      img: PUBLIC_BASE_URL + "faculty/selvan.jpg",
    },
    {
      name: "Dr. Anilkumar Ambore",
      username: "Reva University",
      body: "He quickly mastered modern web technologies, displaying the skillset of a professional developer during my course.",
      img: PUBLIC_BASE_URL + "faculty/anilkumar.webp",
    },
    {
      name: "Dr. Thirumagal E",
      username: "Reva University",
      body: "I saw impressive performance in Data Structures and Algorithms; he possesses strong analytical and problem-solving abilities.",
      img: PUBLIC_BASE_URL + "faculty/thirumagal.webp",
    },
    {
      name: "Dr. Bhavatarini N",
      username: "Reva University",
      body: "His dedication to the challenging subject of Deep Learning resulted in sophisticated and well-executed projects.",
      img: PUBLIC_BASE_URL + "faculty/bhavatarini.webp",
    },
    {
      name: "Dr. Narendra Babu C R",
      username: "Reva University",
      body: "He produced high-quality, fully functional applications in my mobile application development module.",
      img: PUBLIC_BASE_URL + "faculty/narendra.png",
    },
    {
      name: "Dr. Hemashree L",
      username: "Reva University",
      body: "As a final year project guide, I can attest to his exceptional commitment and technical skill in seeing his major work through to completion.",
      img: PUBLIC_BASE_URL + "faculty/hemashree.jpg",
    },
    {
      name: "Dr. Ashwinkumar U M",
      username: "CSE Director @Reva University",
      body: "He is recognized within the School of CSE for his proactive attitude and strong academic achievements.",
      img: PUBLIC_BASE_URL + "faculty/ashwinkumar.webp",
    },
    {
      name: "Dr. P V Bhaskar Reddy",
      username: "Reva University",
      body: "An intellectually curious and capable student whose research potential is very promising.",
      img: PUBLIC_BASE_URL + "faculty/bhaskar.webp",
    },
  ];