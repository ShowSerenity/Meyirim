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
          "projectTitle": "Exhibition “Inclusive Masters of the Great Steppe”",
    "projectSubtitle": "Promoting Inclusion and Equality in the Arts",
    "description": "As part of our second project, we organized a regional exhibition of decorative and applied arts that brought together works from artists with disabilities and neurotypical authors. The exhibition, titled 'Inclusive Masters of the Great Steppe,' became a significant cultural event aimed at promoting inclusion and equality in the arts.\n\nThe project was supported by the Union of Artists of Kazakhstan, which greatly expanded opportunities for the participants and enhanced the prestige of the event. The exhibition became a unique platform for showcasing the creativity of people with disabilities who, despite physical limitations, possess incredible talent and skill. The works of artists with special needs were displayed alongside those of neurotypical authors, emphasizing the importance of interaction and mutual understanding between different groups of people in the cultural sphere.\n\nDuring the exhibition, visitors were able to see a variety of techniques and styles, ranging from traditional Kazakh art to modern forms and experimental directions. It was not only a creative process but also an important step in changing the perception of disability in society. We aimed to demonstrate that art knows no boundaries and that everyone, regardless of physical traits, can be a source of inspiration and create works that leave a mark in history.\n\nThe exhibition attracted a wide audience, including art experts, cultural figures, and local residents, and served as a vivid example of inclusion in the cultural sphere. We are proud to have provided artists with disabilities with a unique opportunity to showcase their work and contribute to the broader understanding of inclusion through art.",
    "dateLabel": "Project Launch Date",
    "date": "July 2022",
    "moreInfo": "For more details about the exhibition and related events follow us on social medias or contact us directly.",
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
          "projectTitle": "Выставка “Инклюзивные мастера Великой степи”",
    "projectSubtitle": "Продвижение инклюзии и равенства в искусстве",
    "description": "В рамках второго проекта мы организовали областную выставку декоративно-прикладного искусства, которая объединила работы художников с инвалидностью и нормотипичных авторов. Выставка, получившая название “Инклюзивные мастера Великой степи”, стала важным культурным событием, направленным на продвижение инклюзии и равенства в сфере искусства.\n\nПроект был поддержан Союзом художников Казахстана, что значительно расширило возможности для участников и повысило престиж мероприятия. Выставка стала уникальной платформой для демонстрации творчества людей с инвалидностью, которые, несмотря на физические ограничения, обладают невероятным талантом и мастерством. Работы художников с особыми потребностями были представлены рядом с произведениями нормотипичных авторов, что подчеркнуло важность взаимодействия и взаимопонимания между различными группами людей в культурной сфере.\n\nВ рамках выставки зрители могли увидеть разнообразие техник и стилей: от традиционного казахского искусства до современных форм и экспериментальных направлений. Это был не только творческий процесс, но и важный шаг в изменении восприятия инвалидности в обществе. Мы стремились показать, что искусство не имеет ограничений и что каждый человек, независимо от его физических особенностей, может стать источником вдохновения и создавать произведения, которые оставляют след в истории.\n\nВыставка привлекла внимание широкой аудитории, включая искусствоведов, культурных деятелей и местных жителей, и послужила ярким примером инклюзии в сфере культуры. Мы гордимся тем, что смогли предоставить художникам с инвалидностью уникальную возможность заявить о себе, а также содействовать расширению общественного понимания инклюзии через искусство.",
    "dateLabel": "Дата запуска проекта",
    "date": "Июль 2022",
    "moreInfo": "Для получения дополнительной информации о выставке и сопутствующих мероприятиях следите за нами в социальных сетях или свяжитесь с нами.",
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
          "projectTitle": "Көрме “Ұлы даладағы инклюзивті шеберлер”",
          "projectSubtitle": "Өнер саласында инклюзия мен теңдікті ілгерілету",
          "description": "Екінші жобамыз аясында біз мүгедектігі бар және нормотипті авторлардың туындыларын біріктірген декоративті-қолданбалы өнердің облыстық көрмесін ұйымдастырдық. 'Ұлы даладағы инклюзивті шеберлер' атты көрме өнер саласында инклюзия мен теңдікті ілгерілетуге бағытталған маңызды мәдени оқиғаға айналды.\n\nЖоба Қазақстан Суретшілер одағының қолдауымен жүзеге асты, бұл қатысушылар үшін мүмкіндіктерді айтарлықтай кеңейтіп, іс-шараның беделін арттырды. Көрме мүгедектігі бар адамдардың шығармашылығын көрсету үшін ерекше алаңға айналды, олар физикалық шектеулерге қарамастан, таңғажайып талант пен шеберлікке ие. Арнайы қажеттіліктері бар суретшілердің жұмыстары нормотипті авторлардың туындыларымен қатар қойылды, бұл мәдени саладағы әртүрлі топтар арасындағы өзара әрекеттесу мен түсіністіктің маңыздылығын атап өтті.\n\nКөрмеде келушілер дәстүрлі қазақ өнерінен бастап заманауи формалар мен эксперименттік бағыттарға дейін әртүрлі техника мен стильдерді көре алды. Бұл тек шығармашылық процесс қана емес, қоғамдағы мүгедектікті қабылдауды өзгерту үшін маңызды қадам болды. Біз өнердің шектеулері жоқ екенін және әр адам, оның физикалық ерекшеліктеріне қарамастан, шабыт көзі бола алатынын және тарихта із қалдыратын туындылар жасай алатынын көрсетуге тырыстық.\n\nКөрме кең аудиторияны, оның ішінде өнертанушыларды, мәдениет қайраткерлерін және жергілікті тұрғындарды тартты, сондай-ақ мәдениет саласындағы инклюзияның жарқын мысалы болып қызмет етті. Біз мүгедектігі бар суретшілерге өз туындыларын көрсету үшін ерекше мүмкіндік ұсынғанымызға және өнер арқылы инклюзия туралы қоғамның түсінігін кеңейтуге үлес қосқанымызға мақтанамыз.",
          "dateLabel": "Жобаның басталу күні",
          "date": "2022 жылдың шілдесі",
          "moreInfo": "Көрме және байланысты шаралар туралы қосымша ақпарат алу үшін әлеуметтік желілерде бізді бақылаңыз немесе бізбен тікелей байланысыңыз.",
      }
    };
  
    const elementsToTranslate = document.querySelectorAll('[data-lang-text]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-lang-text');
        el.textContent = translations[lang][key];
    });
  }