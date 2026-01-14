const BASE_PATH = import.meta.env.DEV ? './' : '';
export const myProjects = [
    {
      id: 1,
      title: "Analytics of Scanned Prescription and Notes",
      description:
        "Engineered a full-stack MERN application for prescription analysis, demonstrating proficiency with modern web platforms and technologies.",
      subDescription: [
        "Integrated OCR and NLP techniques (tokenization/extraction) to process scanned data, achieving an 88% accuracy for printed prescriptions.",
        "Implemented a secure JWT authentication system and utilized a large language model (LLM/ChatGPTbased) to derive medical analytics (symptoms, remedies).",
        "Collaborated effectively with a team to ensure adherence to best development practices and projectdeadlines.",
      ],
      href: "https://drive.google.com/file/d/1KDivNOOHxbqpYVeOb-txdw8C9sVEUAWh/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/projects/analytics.png`,
      tags: [
        {
          id: 1,
          name: "OCR",
          path: `${BASE_PATH}assets/logos/ocr.svg`,
        },
        {
          id: 2,
          name: "NLP",
          path: `${BASE_PATH}assets/logos/nlp.svg`,
        },
        {
          id: 3,
          name: "JWT",
          path: `${BASE_PATH}assets/logos/jwt.svg`,
        },
        {
          id: 4,
          name: "MERN",
          path: `${BASE_PATH}assets/logos/mern.svg`,
        },
      ],
    },
    {
      id: 2,
      title: "Age and Gender Detection using OpenCV",
      description:
        "Developed a real-time computer vision system in Python using OpenCV to determine the age and gender of aperson from a camera feed.",
      subDescription: [
        "Utilized pre-trained Caffe models for high-speed, accurate detection, showcasing ability to implement and optimize advanced machine learning concepts.",
        "Executed the project independently, applying strong analytical thinking and problem-solving abilities to manage model integration and the data pipeline.",
        "Demonstrated foundational knowledge of image processing and algorithmic efficiency in a solo capacity, reflecting a self-motivated approach to new technologies",
      ],
      href: "https://github.com/54MMYYY/Age-Gender-Detection-Using-ML",
      logo: "",
      image: `${BASE_PATH}assets/projects/age.png`,
      tags: [
        {
          id: 1,
          name: "OpenCV",
          path: `${BASE_PATH}assets/logos/opencv.svg`,
        },
        {
          id: 2,
          name: "Caffe models",
          path: `${BASE_PATH}assets/logos/coffee.svg`,
        },
        {
          id: 3,
          name: "Python",
          path: `${BASE_PATH}assets/logos/python-5.svg`,
        },
      ],
    },
    {
      id: 3,
      title: "My Portfolio",
      description:
        "Developed an immersive 3D personal portfolio using React.js, Three.js, React‑Three‑Fiber and Drei, rendering interactive 3D models.",
      subDescription: [
        "Optimized build performance with Vite, achieving smooth 60 FPS 3D rendering and fast load times across devices.",
        "Integrated Framer Motion for scroll‑based triggers and state‑driven animations, creating a dynamic UI/UX experience.",
        "Managed loading and optimization of heavy GLTF/GLB assets and environment lighting to maintain performance.",
      ],
      href: "https://54mmyyy.github.io/Portfolio/",
      logo: "",
      image: `${BASE_PATH}assets/projects/portfolio-image.png`,
      tags: [
        {
          id: 1,
          name: "React.js",
          path: `${BASE_PATH}assets/logos/react.svg`,
        },
        {
          id: 2,
          name: "Three.js",
          path: `${BASE_PATH}assets/logos/threejs.svg`,
        },
        {
          id: 3,
          name: "Framer Motion",
          path: `${BASE_PATH}assets/logos/framer-motion.svg`,
        },
        {
          id: 4,
          name: "Email.js",
          path: `${BASE_PATH}assets/logos/emailjs.svg`,
        },
      ],
    },
    {
      id: 4,
      title: "CryptoLab | Multi-Cipher Encryption Dashboard",
      description:
        "Developed a functional interface for AES-256 (Symmetric Encryption), Caesar Cipher, and Base64 encoding using JavaScript and the CryptoJS library",
      subDescription: [
        "Engineered a dynamic system for user-defined secret keys and parameterized shifts, ensuring data integrity during the encryption/decryption lifecycle",
        "Built a responsive, terminal-themed interface using CSS grid/flexbox with restricted UI scaling to maintain layout integrity.",
        "Leveraged the Clipboard API to provide a safe, permission-based method for users to handle encrypted outputs.",
      ],
      href: "https://54mmyyy.github.io/CryptoLab/",
      logo: "",
      image: `${BASE_PATH}assets/projects/cryptolab.png`,
      tags: [
        {
          id: 1,
          name: "Encryption/Decryption",
          path: `${BASE_PATH}assets/logos/encryption-decryption.svg`,
        },
        {
          id: 2,
          name: "Caesar Cipher",
          path: `${BASE_PATH}assets/logos/caesar-cipher.svg`,
        },
        {
          id: 3,
          name: "AES-256",
          path: `${BASE_PATH}assets/logos/aes.svg`,
        },
        {
          id: 3,
          name: "Base64",
          path: `${BASE_PATH}assets/logos/base64.svg`,
        },
      ],
    },
  ];
  
  export const myCertifications = [
    {
      id: 1,
      title: "Oracle AI Foundations Associate",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1a9DttLnmvWbiJRlwUKy3KZL38z_sPPZ3/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/oracle.png`,
      tags: [
      ],
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Fundamentals (AZ-900), Reva University",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1s-Dlosfgh4OglEIb5uWxRLzOBFUmnxlR/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/az900.png`,
      tags: [
      ],
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900), Reva University",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1swcATCG-98H2INGC4s5Zy2zkBrWhP2FT/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/ai900.png`,
      tags: [
      ],
    },
    {
      id: 4,
      title: "Data Analytics Using Python, IIT Roorkee | NPTEL",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1XVJwltXv5p6fQduxgTEp2bMSrX5ua2yX/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/nptelpython.png`,
      tags: [
      ],
    },
    {
      id: 5,
      title: "Digital Engineering | NASSCOM FutureSkills Prime",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1QbDnCT478VvBcacpB2nnkPqX7luhlOi7/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/digitalengineering.png`,
      tags: [
      ],
    },
    {
      id: 6,
      title: "AWS For Beginners | Simplilearn",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1ZC-MQ8q-Cb7ihWdITrArZy1GLEkF4BJF/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/aws.png`,
      tags: [
      ],
    },
    {
      id: 7,
      title: "Introduction to Cloud Computing | Simplilearn",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1vIRqoLnB4aGNusaOZy4MOYCcZV7atotf/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/cloudcomputing.png`,
      tags: [
      ],
    },
    {
      id: 8,
      title: "Big Data Hadoop and Spark Developer Training | Simplilearn",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/1D4gJAkLNvyAfjY7XDqSmFUZsE3f4dQri/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/hadoopspark.png`,
      tags: [
      ],
    },
    {
      id: 9,
      title: "Data Structures Using C | 10Seconds , Reva University",
      description:
        "",
      subDescription: [
        "",
        "",
        "",
        "",
      ],
      href: "https://drive.google.com/file/d/11GkpBrFoJwb-XIaYGRRinVJer2XOgXgw/view?usp=sharing",
      logo: "",
      image: `${BASE_PATH}assets/certificates/dsausingc.jpg`,
      tags: [
      ],
    },
  ];

  export const mySocials = [
    {
      name: "WhatsApp",
      href: "https://wa.me/971501401675",
      icon: import.meta.env.DEV ? `${BASE_PATH}assets/socials/whatsApp.svg` : '/Portfolio/assets/socials/whatsApp.svg',
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/samsonshajigeorge55/",
      icon: import.meta.env.DEV ? `${BASE_PATH}assets/socials/linkedIn.svg` : '/Portfolio/assets/socials/linkedIn.svg',
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/54mmyyy/",
      icon: import.meta.env.DEV ? `${BASE_PATH}assets/socials/instagram.svg` : '/Portfolio/assets/socials/instagram.svg',
    },
  ];
  
  export const experiences = [
    {
      title: "IT Intern",
      job: "Al Seer, Dubai, UAE",
      date: "Nov-Dec 2023",
      contents: [
        "Gained practical exposure to diverse security tools and applications, including Fortinet FortiGate (firewall management), Mimecast (email security), SentinelOne (endpoint protection), and MobaXterm/TightVNC for secure remote access and IT support.",
        "Developed foundational knowledge of physical-level networking (cabling, hardware identification) and assisted with the operation and maintenance of audio-visual systems within corporate meeting rooms.",
        "Performed data entry and manipulation using Microsoft Excel to support department operations, demonstrating attention to detail and data integrity.",
        "Acquired minimal introductory exposure to cloud data solutions, specifically SAP Datasphere and SAP Analytics Cloud.",
      ],
    },
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
        "Completed schooling from KG1 to Grade 10 under the CBSE curriculum.",
        "Built a strong academic foundation and developed essential skills in communication, teamwork, and problem-solving during formative years.",
      ],
    },
  ];
  export const reviews = [
    {
      name: "Sunanth Vikram",
      username: "@AlphaData",
      body: "During his internship at Alpha Data, I was thoroughly impressed by his quick learning and ability to contribute effectively to our team.",
      img: `${BASE_PATH}faculty/vikram.jpeg`,
    },
    {
      name: "Prof. Nikhil S Tengli ",
      username: "Reva University",
      body: "He was an outstanding student in my AI course, consistently demonstrating a deep grasp of complex concepts and exceptional dedication.",
      img: `${BASE_PATH}faculty/nikhil.jpeg`,
    },
    {
      name: "Prof. Akram Pasha",
      username: "Reva University",
      body: "This student consistently brings enthusiasm and insightful questions to the classroom, making for a truly engaging learning environment.",
      img: `${BASE_PATH}faculty/akram.jpeg`,
    },
    {
      name: "Dr. Sanju Pillai",
      username: "Reva University",
      body: "I remember him as a highly proficient student in Computer Organization and Architecture, always excelling in technical assignments.",
      img: `${BASE_PATH}faculty/sanju.jpeg`,
    },
    {
      name: "Prof. Chaitra M H",
      username: "Reva University",
      body: "He demonstrates a remarkable talent for machine learning, tackling complex projects with both creativity and analytical rigor.",
      img: `${BASE_PATH}faculty/chaitra.webp`,
    },
    {
      name: "Prof. Sailaja Thota ",
      username: "Reva University",
      body: "A dedicated and proactive student who shows great promise in navigating challenging academic requirements.",
      img: `${BASE_PATH}faculty/sailaja.webp`,
    },
    {
      name: "Dr. Farooque Azam",
      username: "Reva University",
      body: "His work in applying machine learning models was particularly noteworthy for its efficiency and clear presentation of results.",
      img: `${BASE_PATH}faculty/farooque.jpeg`,
    },
    {
      name: "Dr. Selvan C",
      username: "Reva University",
      body: "A highly motivated individual whose commitment to learning and growth in his field is evident in all his contributions.",
      img: `${BASE_PATH}faculty/selvan.jpg`,
    },
    {
      name: "Dr. Anilkumar Ambore",
      username: "Reva University",
      body: "He quickly mastered modern web technologies, displaying the skillset of a professional developer during my course.",
      img: `${BASE_PATH}faculty/anilkumar.webp`,
    },
    {
      name: "Dr. Thirumagal E",
      username: "Reva University",
      body: "I saw impressive performance in Data Structures and Algorithms; he possesses strong analytical and problem-solving abilities.",
      img: `${BASE_PATH}faculty/thirumagal.webp`,
    },
    {
      name: "Dr. Bhavatarini N",
      username: "Reva University",
      body: "His dedication to the challenging subject of Deep Learning resulted in sophisticated and well-executed projects.",
      img: `${BASE_PATH}faculty/bhavatarini.webp`,
    },
    {
      name: "Dr. Narendra Babu C R",
      username: "Reva University",
      body: "He produced high-quality, fully functional applications in my mobile application development module.",
      img: `${BASE_PATH}faculty/narendra.png`,
    },
    {
      name: "Dr. Hemashree L",
      username: "Reva University",
      body: "As a final year project guide, I can attest to his exceptional commitment and technical skill in seeing his major work through to completion.",
      img: `${BASE_PATH}faculty/hemashree.jpg`,
    },
    {
      name: "Dr. Ashwinkumar U M",
      username: "CSE Director @Reva University",
      body: "He is recognized within the School of CSE for his proactive attitude and strong academic achievements.",
      img: `${BASE_PATH}faculty/ashwinkumar.webp`,
    },
    {
      name: "Dr. P V Bhaskar Reddy",
      username: "Reva University",
      body: "An intellectually curious and capable student whose research potential is very promising.",
      img: `${BASE_PATH}faculty/bhaskar.webp`,
    },
  ];