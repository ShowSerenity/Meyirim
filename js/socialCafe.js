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
          "projectTitle": "Social Café and Semi-Finished Goods Workshop",
    "projectSubtitle": "Creating Opportunities for Employment and Inclusion for People with Disabilities",
    "description": "Our first project, the social café, became an important step towards creating an inclusive environment for people with disabilities. The opening of the café was not only a business initiative but also a social platform providing employment opportunities and integrating young people with various disabilities into the workforce.\n\nYoung people with disabilities worked at the café, including those with hearing impairments who served as kitchen assistants and waiters. We also provided a job for a young woman with a mobility impairment who handled accounting and administrative duties. This experience not only helped develop professional skills but also boosted the employees' confidence in their abilities.\n\nAdditionally, a semi-finished goods workshop was opened within the café, where various ready-made products were produced. Young people with hearing impairments and deaf individuals worked in this workshop, which allowed them to develop skills in the manufacturing field. The workshop became an important part of the café, providing products not only for the establishment but also distributing goods locally.\n\nThe project became a true example of successful inclusion, where every employee, regardless of health conditions, found their place in the team, received payment for their work, and grew professionally. We are proud to have created such a platform for people with disabilities, helping them unlock their potential and successfully integrate into society. There are videos and a documentary film was made about us.",
    "dateLabel": "Project Launch Date",
    "date": "March 2021",
    "moreInfo": "For more information about the project follow us on social medias or contact us directly.",
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
          "projectTitle": "Социальное кафе и цех полуфабрикатов",
    "projectSubtitle": "Создание возможностей для трудоустройства и инклюзии людей с инвалидностью",
    "description": "Наш первый проект, социальное кафе, стал важным шагом на пути к созданию инклюзивной среды для людей с инвалидностью. Открытие кафе стало не только бизнес-инициативой, но и социальной платформой, предоставляющей возможности для трудоустройства и интеграции молодых людей с различными видами инвалидности в рабочую среду.\n\nВ кафе трудились молодые люди с инвалидностью, включая ребят с нарушениями слуха, которые выполняли обязанности помощников поваров и официантов. Мы также обеспечили работу для девушки с нарушением опорно-двигательного аппарата, которая занималась бухгалтерией и административной частью. Этот опыт позволил не только развивать профессиональные навыки, но и повысить уверенность сотрудников в своих силах.\n\nКроме того, на базе кафе был открыт цех полуфабрикатов, где производились различные готовые продукты. В этом цехе трудились слабослышащие и глухие молодые люди, что дало им возможность развить свои навыки в производственной сфере. Цех стал важной частью кафе, обеспечивая продуктами не только само заведение, но и распространяя продукцию на местном уровне.\n\nПроект стал настоящим примером успешной инклюзии, где каждый сотрудник, несмотря на особенности здоровья, мог найти свое место в коллективе, получать оплату за труд и развиваться профессионально. Мы гордимся тем, что смогли создать такую платформу для людей с инвалидностью, помогая им раскрывать свой потенциал и успешно интегрироваться в общество. Здесь есть ролики и про нас снимали документальный фильм.",
    "dateLabel": "Дата запуска проекта",
    "date": "Март 2021",
    "moreInfo": "Для получения дополнительной информации о проекте следите за нами в социальных сетях или свяжитесь с нами.",
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
          "projectTitle": "Әлеуметтік кафе және жартылай дайын тағамдар цехы",
    "projectSubtitle": "Мүгедектігі бар адамдарға жұмыс және инклюзия мүмкіндіктерін құру",
    "description": "Біздің алғашқы жобамыз, әлеуметтік кафе, мүгедектігі бар адамдар үшін инклюзивті ортаны құруға маңызды қадам болды. Кафе ашылуы тек бизнес-инициатива емес, жұмысқа орналастыру және түрлі мүгедектік түрлерімен жастарды жұмыс ортасына интеграциялауға арналған әлеуметтік платформа болды.\n\nКафеде мүгедектігі бар жастар жұмыс істеді, соның ішінде есту қабілеті бұзылғандар, олар аспазшы көмекшілері мен даяшы болып жұмыс істеді. Біз сондай-ақ тірек-қимыл аппараты бұзылған қызға бухгалтерлік есеп және әкімшілік жұмыстарды атқару мүмкіндігін ұсындық. Бұл тәжірибе тек кәсіби дағдыларды дамытуға ғана емес, қызметкерлердің өз қабілеттеріне деген сенімін арттыруға да көмектесті.\n\nСонымен қатар, кафеде жартылай дайын тағамдар цехы ашылды, онда әртүрлі дайын өнімдер өндірілді. Бұл цехта есту қабілеті бұзылған және глухой жастар жұмыс істеді, бұл оларға өндірістік салада дағдыларын дамытуға мүмкіндік берді. Цех кафе үшін өнімдер ғана емес, сонымен қатар жергілікті деңгейде өнімдер тарату үшін маңызды бөліктен біріне айналды.\n\nЖоба табысты инклюзияның нағыз үлгісіне айналды, онда әрбір қызметкер, денсаулық жағдайларына қарамастан, топта өз орнын тауып, еңбекақы алып, кәсіби тұрғыдан дамуға мүмкіндік алды. Біз мүгедектігі бар адамдар үшін мұндай платформаны құра алатындығымызға мақтанамыз, олардың потенциалын ашуға және қоғамға сәтті интеграциялануға көмектесеміз. Бұл туралы видеолар мен құжаттық фильмдер де бар.",
    "dateLabel": "Жобаның басталу күні",
    "date": "2021 жылдың наурызы",
    "moreInfo": "Жоба туралы қосымша ақпарат алу үшін әлеуметтік желілерде бізді бақылаңыз немесе бізбен тікелей байланысыңыз.",
      }
    };
  
    const elementsToTranslate = document.querySelectorAll('[data-lang-text]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-lang-text');
        el.textContent = translations[lang][key];
    });
  }