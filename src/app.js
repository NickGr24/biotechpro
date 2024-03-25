const langArray = {
    "home": {
        "en": "Home",
        "ru": "Главная",
        "md": "Acasă"
    },
    "about": {
        "en": "About us",
        "ru": "О нас",
        "md": "Despre noi"
    },
    "services": {
        "en": "Services",
        "ru": "Услуги",
        "md": "Servicii"
    },
    "contacts": {
        "en": "Contacts",
        "ru": "Контакты",
        "md": "Contacte"
    },
    "main-heading": {
        "en": "Quality<br>Wood Chips",
        "ru": "Качественная<br>щепа",
        "md": "Rumeguș<br>calitativ"
    },
    "about-heading": {
        "en": "About us",
        "ru": "О нас",
        "md": "Despre noi"
    },
    "about-subtitle": {
        "en": "We are a young, dynamically developing team for the production of solid fuel biomass from wood waste. In 2023, we went from idea to implementation and managed to take a leading position in the country in such a short time. We recycle wood waste from seasonal pruning, renovation and reclamation of gardens on an industrial scale, turning gardening waste into energy fuel, which is used in the production of solid fuels, as well as as fuel for producing process steam, heating and other needs at enterprises in the country",
        "ru": "Мы молодая, динамично развивающаяся команда, по производству твердотопливной биомассы из древесных отходов. Мы за 2023 год прошли путь от идеи до воплощения и сумели в столь короткий срок занять лидирующее место в стране. Мы перерабатываем древесные отходы от сезонной обрезки, обновления и рекультивации садов в промышленных масштабах, превращая отходы садоводства в энергетическое  топливо, которое используется в производстве твердого топлива, а также в качестве топлива для получения технологического пара, обогрева и прочих нужд на предприятиях страны",
        "md": ""
    },
    "services-heading": {
        "en": "Our Services",
        "ru": "Наши Услуги",
        "md": "Serviciile Noastre"
    },
    "roots": {
        "en": "Roots",
        "ru": "Корни",
        "md": "Rădăcini"
    },
    "trunks": {
        "en": "Trunks",
        "ru": "Бревна",
        "md": "Trunchiuri"
    },
    "branches": {
        "en": "Branches",
        "ru": "Ветки",
        "md": "Crengi"
    },
    "partners-heading": {
        "en": "Our Partners",
        "ru": "Наши Партнеры",
        "md": "Partenerii noștri"
    },
    "rights": {
        "en": "Copyright © 2024. Biotechpro S.R.L. All rights reserved.",
        "ru": "© 2024. Biotechpro S.R.L. Все права защищены.",
        "md": "Copyright © 2024. Biotechpro S.R.L. All rights reserved."
    },
}
const select = document.querySelector('#select-lang')
const allLangs = ['en', 'ru', 'md'  ]

select.addEventListener('change', function changeURLLang(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang
    location.reload();
})

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLangs.includes(hash)){
        location.href = window.location.pathname + '#md'
        location.reload();
    }
    select.value = hash;
    for (let key in langArray){
        document.querySelector('.lng-' + key).innerHTML = langArray[key][hash];
    }
}

changeLanguage()
