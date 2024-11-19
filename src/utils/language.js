const translations = {
    en: {
      about: "about",
      projects: "projects",
      contact: "contact",
      web_title: "WEB",
      hero_description: "Hi, I’m Daulet, a web developer passionate about creating engaging and user-friendly web experiences.",
      contact_button: "Contact",
      about_title: "About",
      about_paragraph_1: "Hi, I’m Daulet, a full-stack web developer and recent graduate from SDU University (2024). I specialize in creating custom websites that are both functional and user-friendly.",
      about_paragraph_2: "As a freelancer, I work with clients to bring their ideas to life through clean, efficient code. In addition to coding, I maintain YouTube, TikTok, and Instagram channels where I share my work process, tips, and insights into the world of web development. If you need a website or want to connect, feel free to reach out—I’d love to help!",
      my_stack: "My Stack:"
    },
    ru: {
      about: "о нас",
      projects: "проекты",
      contact: "контакт",
      web_title: "ВЕБ",
      hero_description: "Привет, я Даулет, веб-разработчик, увлеченный созданием интересных и удобных веб-опытов.",
      contact_button: "Контакт",
      about_title: "Обо мне",
      about_paragraph_1: "Привет, я Даулет, full-stack веб-разработчик и недавний выпускник SDU University (2024). Я специализируюсь на создании индивидуальных сайтов, которые являются функциональными и удобными.",
      about_paragraph_2: "Будучи фрилансером, я работаю с клиентами, чтобы воплотить их идеи в жизнь с помощью чистого и эффективного кода. Помимо разработки, я веду каналы на YouTube, TikTok и Instagram, где делюсь процессом работы, советами и инсайтами в мир веб-разработки. Если вам нужен сайт или хотите связаться, не стесняйтесь обратиться — буду рад помочь!",
      my_stack: "Мой стек:"
    },
    kk: {
      about: "туралы",
      projects: "жобалар",
      contact: "байланыс",
      web_title: "ВЕБ",
      hero_description: "Сәлем, мен Даулетпін, веб-әзірлеуші, қызықты және пайдаланушыға ыңғайлы веб-қосымшалар жасауға құштармын.",
      contact_button: "Байланысу",
      about_title: "Мен туралы",
      about_paragraph_1: "Сәлем, мен Даулетпін, full-stack веб-әзірлеуші және SDU университетінің (2024) жаңа түлегі. Мен функционалды және ыңғайлы арнайы веб-сайттар жасауда маманданамын.",
      about_paragraph_2: "Фрилансер ретінде мен клиенттермен жұмыс істеймін, олардың идеяларын таза әрі тиімді код арқылы жүзеге асыруға көмектесемін. Сонымен қатар, мен YouTube, TikTok және Instagram арналарыма веб-әзірлеу процесім, кеңестерім және түсініктеріммен бөлісемін. Егер сізге веб-сайт қажет болса немесе байланысқыңыз келсе, менімен хабарласыңыз — көмектесуге қуаныштымын!",
      my_stack: "Менің стегім:"
    }
  };
  
  const translate = (language) => {
    // const elements = document.querySelectorAll('[data-key]');
    // elements.forEach(element => {
    //   const key = element.getAttribute('data-key');
    //   if (translations[language] && translations[language][key]) {
    //     element.textContent = translations[language][key];
    //   }
    // });

    console.log(language)
  }
  
export default translate;
  