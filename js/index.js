const translations = {
    ru: {
      title: "Мейірім",
      subtitle: "Поддерживаем людей с ограниченными возможностями через защиту их прав и предоставление возможностей",
      "about-heading": "О Нас",
      "about-text": "Мейірім стремится поддерживать людей с ограниченными возможностями, защищать их права и реализовывать различные проекты.",
      footer: "&copy; 2024 Мейірім. Все права защищены."
    },
    en: {
      title: "Meyirim",
      subtitle: "Supporting Disabled Individuals Through Advocacy and Opportunities",
      "about-heading": "About Us",
      "about-text": "Meyirim is committed to supporting disabled individuals by advocating for their rights and running impactful projects.",
      footer: "&copy; 2024 Meyirim. All Rights Reserved."
    },
    kk: {
      title: "Мейірім",
      subtitle: "Мүмкіндігі шектеулі жандардың құқығын қорғап, мүмкіндік жасау",
      "about-heading": "Біз туралы",
      "about-text": "Мейірім - мүмкіндігі шектеулі жандарды қолдауға бағытталған, олардың құқықтарын қорғап, түрлі жобаларды жүзеге асыратын ұйым.",
      footer: "&copy; 2024 Мейірім. Барлық құқықтар қорғалған."
    }
};
  
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}
  


  