document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.querySelector('.language-button');
    const languageList = document.querySelector('.language-list');
    const languageOptions = document.querySelectorAll('.language-option');
  
    languageButton.addEventListener('click', () => {
        languageList.classList.toggle('hidden');
        languageList.classList.toggle('visible');
    });
  
    languageOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const selectedLang = event.target.dataset.lang;
            const selectedLangText = event.target.textContent;
            languageButton.textContent = selectedLangText;
  
            // Hide the dropdown
            languageList.classList.add('hidden');
            languageList.classList.remove('visible');
  
            // Change the URL hash
            window.location.hash = selectedLang;
  
            // Update the text on the page based on the selected language
            updatePageLanguage(selectedLang);
        });
    });
  
    // Check the hash on page load and update the language accordingly
    const hash = window.location.hash.substring(1);
    if (hash) {
        const matchingOption = document.querySelector(`.language-option[data-lang="${hash}"]`);
        if (matchingOption) {
            matchingOption.click();
        }
    }
  });
  
  function updatePageLanguage(lang) {
    const translations = {
      en: {
          "home": "Home",
          "about": "About",
          "contacts": "Contacts",
          "projects": "Projects",
          "aboutUsTitle": "About Us",
          "aboutUs": "We are a public association dedicated to supporting individuals with disabilities. Our mission is to provide services, create a supportive community, and promote equal opportunities for people with disabilities.",
          "contactUs": "Contact Us",
          "address": "Taldykorgan, Zhetysu region, Karatal microdistrict, 6A",
          "projectTitle": "Inclusive Information Portal #DeFactoFM",
    "projectSubtitle": "Creating Equal Opportunities Through Media",
    "description": "On December 20, 2020, the Public Union launched a unique project — the Inclusive Information Portal #DeFactoFM. This project marked a new step in creating equal opportunities for people with disabilities and non-disabled individuals, bringing them together as correspondents, interviewers, and content creators.\n\nThe core idea of the portal is to show that media inclusion can be natural and productive, with diverse perspectives helping to form a deeper understanding of the world around us.\n\nTo implement the project, we launched a YouTube channel and are actively growing on popular social media platforms such as Facebook, Instagram, TikTok, and VKontakte. These platforms feature a variety of programs, from news stories and inspiring interviews to social experiments.\n\nOne of the key programs on the portal is our original show \"Mendey bol\" (Be Me), which allows viewers to literally \"walk in the shoes\" of a person with a disability, understanding the challenges and achievements they face in everyday life. This program helps break stereotypes, fosters empathy, and supports integration.\n\n#DeFactoFM is not just a media platform, but a space for inspiration, dialogue, and positive change in society. We believe that through projects like this, every person, regardless of their physical abilities, can be heard.",
    "dateLabel": "Project Launch Date",
    "date": "December 20, 2020",
    "moreInfo": "For more details about our programs and initiatives follow us on social medias or contact us directly.",
      },
      ru: {
          "home": "Главная",
          "about": "О Нас",
          "contacts": "Контакты",
          "projects": "Проекты",
          "aboutUsTitle": "О Нас",
          "aboutUs": "Мы — общественное объединение, занимающееся поддержкой людей с ограниченными возможностями. Наша миссия — предоставлять услуги, создавать поддерживающее сообщество и способствовать равным возможностям для людей с инвалидностью.",
          "contactUs": "Контактные Данные",
          "address": "Талдыкорган, область Жетысу, микрорайон Каратал, 6А",
          "projectTitle": "Инклюзивный информационный портал #DeFactoFM",
    "projectSubtitle": "Создание равных возможностей через медиа",
    "description": "20 декабря 2020 года Общественное объединение запустило уникальный проект — Инклюзивный информационный портал #DeFactoFM. Этот проект стал новой ступенью в создании равных возможностей для людей с инвалидностью и нормотипичных людей, объединяя их в качестве корреспондентов, интервьюеров и создателей контента.\n\nОсновная идея портала — показать, что инклюзия в медиа может быть естественной и продуктивной, а разнообразие взглядов помогает формировать более глубокое понимание окружающего мира.\n\nДля реализации проекта мы запустили YouTube-канал и активно развиваемся в популярных социальных сетях: Facebook, Instagram, TikTok и ВКонтакте. На этих платформах выходят разнообразные программы: от информационных сюжетов и вдохновляющих интервью до социальных экспериментов.\n\nОдним из ключевых направлений портала стала наша авторская программа «Мендей бол» (Побудь мной). Она позволяет зрителям буквально «примерить на себя» роль человека с инвалидностью, узнать, с какими трудностями и достижениями он сталкивается в повседневной жизни. Эта программа помогает разрушать стереотипы, развивает эмпатию и способствует интеграции.\n\n#DeFactoFM — это не просто медиа, а платформа для вдохновения, диалога и положительных изменений в обществе. Мы верим, что благодаря таким проектам каждый человек, независимо от физических возможностей, может быть услышан.",
    "dateLabel": "Дата запуска проекта",
    "date": "20 декабря 2020 года",
    "moreInfo": "Для получения дополнительной информации о наших программах и инициативах следите за нами в социальных сетях или свяжитесь с нами.",
      },
      kz: {
          "home": "Басты Бет",
          "about": "Біз Туралы",
          "contacts": "Контактілер",
          "projects": "Жобалар",
          "aboutUsTitle": "Біз Туралы",
          "aboutUs": "Біз мүгедектігі бар адамдарға көмек көрсетуге арналған қоғамдық ұйымбыз. Біздің мақсатымыз — қызметтер ұсыну, қолдау көрсететін қоғам құру және мүгедектігі бар адамдар үшін тең мүмкіндіктерді қамтамасыз ету.",
          "contactUs": "Байланыс Ақпараттары",
          "address": "Талдықорган, Жетысу облысы, Қаратал ауданы, 6А",
          "projectTitle": "Инклюзивті ақпараттық портал #DeFactoFM",
    "projectSubtitle": "Медиа арқылы тең мүмкіндіктер жасау",
    "description": "2020 жылдың 20 желтоқсанында Қоғамдық бірлестік ерекше жоба — Инклюзивті ақпараттық портал #DeFactoFM-ді іске қосты. Бұл жоба мүгедектігі бар адамдар мен нормотиптік адамдар үшін тең мүмкіндіктер жасау жолында жаңа қадам болды, оларды корреспонденттер, интервьюерлер және контент жасаушылар ретінде біріктірді.\n\nПорталдың негізгі идеясы — медиа саласындағы инклюзияның табиғи әрі өнімді болатынын көрсету, ал әртүрлі көзқарастар әлемді тереңірек түсінуге көмектеседі.\n\nЖобаны жүзеге асыру үшін біз YouTube арнасын ашып, Facebook, Instagram, TikTok және ВКонтакте сияқты танымал әлеуметтік желілерде белсенді түрде дамып келеміз. Бұл платформаларда әртүрлі бағдарламалар шығып тұрады: ақпараттық сюжеттер мен шабыттандыратын сұхбаттардан бастап, әлеуметтік эксперименттерге дейін.\n\nПорталдың негізгі бағдарламаларының бірі — біздің авторлық бағдарламамыз «Мендей бол» (Побудь мной). Бұл бағдарлама көрермендерге мүгедектігі бар адамның рөлін «көзге елестетіп көруге» мүмкіндік береді, олардың күнделікті өмірде қандай қиындықтар мен жетістіктерге тап болатынын білуге мүмкіндік береді. Бұл бағдарлама стереотиптерді жоюға, эмпатияны дамытуға және интеграцияны қолдауға көмектеседі.\n\n#DeFactoFM — бұл тек медиа ғана емес, қоғамдағы оң өзгерістер үшін шабыт, диалог және алаң. Біз осындай жобалардың арқасында әрбір адам, оның физикалық мүмкіндіктеріне қарамастан, естілетінін сенеміз.",
    "dateLabel": "Жобаның басталу күні",
    "date": "2020 жылдың 20 желтоқсаны",
    "moreInfo": "Біздің бағдарламалар мен бастамалар туралы қосымша ақпарат алу үшін әлеуметтік желілерде бізді бақылаңыз немесе бізбен тікелей байланысыңыз.",
      }
    };
  
    const elementsToTranslate = document.querySelectorAll('[data-lang-text]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-lang-text');
        el.textContent = translations[lang][key];
    });
  }