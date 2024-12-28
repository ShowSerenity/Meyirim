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
        "story": "",
        "composedMusic": "Event Videos",
        "gallery": "Gallery",
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
        "story": "",
        "composedMusic": "Видео Ивентов",
        "gallery": "Галерея",
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
        "story": "",
        "composedMusic": "Оқиғалар Бейнемазмұны",
        "gallery": "Галерея",
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
}
