// Get all elements with the class "project-block"
const projectBlocks = document.querySelectorAll(".project-block");

// Add a click event listener to each project block
projectBlocks.forEach((block) => {
    block.addEventListener("click", function () {
        // Get the URL from the "data-url" attribute of the clicked block
        const url = block.getAttribute("data-url");

        // Open the URL in the current window
        window.location.href = url;
    });
});

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
          "ourProjects": "Our Projects",
          "description": "Welcome to our projects porfolio. Here you’ll find a list of what we accomplished. Explore our<br> projects to learn more about what we do.",
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
          "ourProjects": "Наши Проекты",
          "description": "Добро пожаловать в портфолио наших проектов. Здесь вы найдете список того, что мы сделали. Изучите наши<br> проекты, чтобы узнать больше о том, что мы делаем.",
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
          "ourProjects": "Біздің Жобалар",
          "description": "Біздің жобалар портфолиосына қош келдіңіз. Мұнда сіз біз орындаған істердің тізімін таба аласыз. Біз не<br> істейтініміз туралы көбірек білу үшін жобаларымызды зерттеңіз.",
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
    const storyTextElement = document.querySelector('p[data-lang-text="description"]');
    if (storyTextElement) {
        storyTextElement.innerHTML = translations[lang]["description"];
    }
  }
  