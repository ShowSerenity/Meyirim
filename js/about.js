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
          "aboutTitle": "About",
          "storyTitle": "Our Journey: Empowering Lives and Building Futures",
          "storyText": "The Public Association of Disabled People 'Meirim' supports people with disabilities in Kazakhstan, creating conditions for their active and dignified life.<br> Our mission is to contribute to the building of an inclusive society, where every person with a disability has equal opportunities for self-realization and full participation in social life. Our goals include: Creating equal opportunities for people with disabilities, providing comprehensive help and support, implementing socially inclusive projects, and improving the quality of life for participants and their integration into society.",
          "aboutUsTitle": "About Us",
          "aboutUs": "We are a public association dedicated to supporting individuals with disabilities.",
          "contactUs": "Contact Us",
          "address": "Taldykorgan, Zhetysu region, Karatal microdistrict, 6A",
      },
      ru: {
          "home": "Главная",
          "about": "О Нас",
          "contacts": "Контакты",
          "projects": "Проекты",
          "aboutTitle": "О нас",
          "storyTitle": "Наш Путь: Расширение Возможностей и Строительство Будущего",
          "storyText": "Общественное объединение инвалидов «Мейірім» поддерживает людей с инвалидностью в Казахстане, создавая условия для их активной и достойной жизни.<br> Наша миссия — способствовать построению инклюзивного общества, где каждый человек с инвалидностью имеет равные возможности для самореализации и полноценного участия в социальной жизни. Наши цели: создание равных возможностей для людей с инвалидностью, оказание комплексной помощи и поддержки, реализация социально-инклюзивных проектов и повышение качества жизни участников и их интеграция в общество.",
          "aboutUsTitle": "О Нас",
          "aboutUs": "Мы — общественное объединение, занимающееся поддержкой людей с ограниченными возможностями.",
          "contactUs": "Контактные Данные",
          "address": "Талдыкорган, область Жетысу, микрорайон Каратал, 6А",
      },
      kz: {
          "home": "Басты Бет",
          "about": "Біз Туралы",
          "contacts": "Контактілер",
          "projects": "Жобалар",
          "aboutTitle": "Біз туралы",
          "storyTitle": "Біздің Сапарымыз: Өмірлерді Қуаттандыру және Болашақтар Құру",
          "storyText": "«Мейірім» мүгедектер қоғамы Қазақстандағы мүгедек адамдарды қолдап, олардың белсенді және қадірлі өмір сүруіне жағдай жасауға бағытталған.<br> Біздің миссиямыз — инклюзивті қоғам құруға үлес қосу, онда әрбір мүгедек адам өзін-өзі жүзеге асыруға және әлеуметтік өмірге толық қатысуға тең мүмкіндік алады. Біздің мақсаттарымыз: мүгедектерге тең мүмкіндіктер жасау, кешенді көмек көрсету, әлеуметтік-инклюзивті жобаларды жүзеге асыру және қатысушылардың өмір сапасын арттыру мен оларды қоғамға интеграциялау.",
          "aboutUsTitle": "Біз Туралы",
          "aboutUs": "Біз мүгедектігі бар адамдарға көмек көрсетуге арналған қоғамдық ұйымбыз.",
          "contactUs": "Байланыс Ақпараттары",
          "address": "Талдықорган, Жетысу облысы, Қаратал ауданы, 6А",
      }
    };
  
    const elementsToTranslate = document.querySelectorAll('[data-lang-text]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-lang-text');
        el.textContent = translations[lang][key];
    });
     // Handle content with HTML
     const storyTextElement = document.querySelector('.about-container p[data-lang-text="storyText"]');
     if (storyTextElement) {
         storyTextElement.innerHTML = translations[lang]["storyText"];
     }
  }
  