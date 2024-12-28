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
          "projectTitle": "Kazakhstan's First Inclusive Concert Dedicated to Victory Day",
    "projectSubtitle": "A Historic Event Celebrating Unity and Inclusivity",
    "description": "Our third project became a significant cultural event — Kazakhstan's first inclusive concert dedicated to Victory Day. This unique concert was organized in collaboration with a military orchestra and military choir, featuring not only professional musicians but also talented performers with disabilities.\n\nWe aimed to create a platform for the expression and recognition of the abilities of people with special needs in the fields of music and art. The concert involved musicians with various health conditions, including people with hearing, vision, and mobility impairments. Each participant had the opportunity to showcase their talents and contribute to this important historical event.\n\nThe concert was not only a vivid manifestation of inclusion but also served as a reminder of the importance of unity and remembrance of the Great Patriotic War. The joint performance of patriotic compositions, solo and choir pieces, along with the participation of the military orchestra and choir, demonstrated the strength and spirit of our nation, highlighting the importance of respect and support for every individual, regardless of their abilities.\n\nThis project became a true symbol of the integration of people with disabilities into cultural and public life, reminding everyone of the significance of inclusion and equality.",
    "dateLabel": "Project Launch Date",
    "date": "May 2023",
    "moreInfo": "For more information about the concert and related events follow us on social medias or contact us directly.",
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
          "projectTitle": "Первый в Казахстане инклюзивный концерт, посвящённый Дню Победы",
    "projectSubtitle": "Историческое событие, отмечающее единство и инклюзивность",
    "description": "Наш третий проект стал значимым культурным событием — первым в Казахстане инклюзивным концертом, посвящённым Дню Победы. Этот уникальный концерт был организован совместно с военным оркестром и военным хором, в котором участвовали не только профессиональные музыканты, но и талантливые исполнители с инвалидностью.\n\nМы стремились создать платформу для выражения и признания способностей людей с особыми потребностями в области музыки и искусства. В концерте приняли участие музыканты с различными ограничениями здоровья, включая людей с нарушениями слуха, зрения и опорно-двигательного аппарата. Каждый из участников мог продемонстрировать свои таланты и внести свой вклад в важное историческое событие.\n\nКонцерт не только стал ярким проявлением инклюзии, но и напомнил о важности единства и памяти о Великой Отечественной войне. Совместное исполнение патриотических произведений, соло и хоровых номеров, а также участие военного оркестра и хора, продемонстрировало силу и дух нашей нации, а также важность уважения и поддержки каждого человека, независимо от его возможностей.\n\nЭтот проект стал настоящим символом интеграции людей с инвалидностью в культурную и общественную жизнь, напоминая всем о значимости инклюзии и равенства.",
    "dateLabel": "Дата запуска проекта",
    "date": "Май 2023",
    "moreInfo": "Для получения дополнительной информации о концерте и сопутствующих мероприятиях следите за нами в социальных сетях или свяжитесь с нами.",
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
          "projectTitle": "Қазақстандағы бірінші инклюзивті концерт, Жеңіс күніне арналады",
    "projectSubtitle": "Бірлік пен инклюзивтілікті мерекелеуге арналған тарихи оқиға",
    "description": "Үшінші жобамыз маңызды мәдени оқиғаға айналды — Қазақстандағы бірінші инклюзивті концерт, Жеңіс күніне арналады. Бұл бірегей концерт әскери оркестр мен әскери хордың ынтымақтастығы арқасында ұйымдастырылды, оған тек кәсіби музыканттар ғана емес, сонымен қатар мүгедектігі бар талантты орындаушылар да қатысты.\n\nБіз музыка мен өнер саласында ерекше қажеттіліктері бар адамдардың қабілеттерін білдіруге және мойындауға арналған алаң құруға ұмтылдық. Концертке әртүрлі денсаулық жағдайлары бар музыканттар, соның ішінде есту, көру және тірек-қимыл аппараты бұзылған адамдар қатысты. Әрбір қатысушы өздерінің таланттарын көрсетуге және маңызды тарихи оқиғаға өз үлесін қосуға мүмкіндік алды.\n\nКонцерт тек инклюзияның жарқын көрінісі ғана емес, сонымен қатар Ұлы Отан соғысы туралы еске алу мен бірліктің маңыздылығын еске салды. Патриоттық туындылардың бірлесіп орындалуы, соло және хор нөмірлері, сондай-ақ әскери оркестр мен хордың қатысуы біздің ұлттың күш-қуатын және рухын көрсетті, сондай-ақ әр адамға, оның мүмкіндіктеріне қарамастан, құрмет пен қолдау көрсетудің маңыздылығын атап өтті.\n\nБұл жоба мүгедектігі бар адамдарды мәдени және қоғамдық өмірге интеграциялаудың нағыз символына айналды, баршаға инклюзия мен теңдіктің маңыздылығын еске салды.",
    "dateLabel": "Жобаның басталу күні",
    "date": "2023 жылдың мамыры",
    "moreInfo": "Концерт және байланысты шаралар туралы қосымша ақпарат алу үшін әлеуметтік желілерде бізді бақылаңыз немесе бізбен тікелей байланысыңыз.",
      }
    };
  
    const elementsToTranslate = document.querySelectorAll('[data-lang-text]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-lang-text');
        el.textContent = translations[lang][key];
    });
  }