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
    "gallery": {
        "en": "Gallery",
        "ru": "Галерея",
        "md": "Galerie"
    },
    "main-heading": {
        "en": "Quality<br>Wood Chips",
        "ru": "Топливная<br>щепа",
        "md": "Rumeguș<br>calitativ"
    },
    "about-heading": {
        "en": "About us",
        "ru": "О нас",
        "md": "Despre noi"
    },
    "about-subtitle": {
        "en": "We are a young, dynamically developing team for the production of solid fuel biomass from wood waste. We went from idea to implementation and managed to take a leading position in the country in such a short time. We recycle wood waste from seasonal pruning, renovation and reclamation of gardens on an industrial scale, turning gardening waste into energy fuel, which is used in the production of solid fuels, as well as as fuel for producing process steam, heating and other needs at enterprises in the country",
        "ru": "Мы молодая, динамично развивающаяся команда, по производству твердотопливной биомассы из древесных отходов. Мы прошли путь от идеи до воплощения и сумели в столь короткий срок занять лидирующее место в стране. Мы перерабатываем древесные отходы от сезонной обрезки, обновления и рекультивации садов в промышленных масштабах, превращая отходы садоводства в энергетическое  топливо, которое используется в производстве пеллет, брикет и прочего, а также в качестве топлива для получения технологического пара, обогрева и прочих нужд на предприятиях страны",
        "md": "Suntem o echipă tânără și dinamică pentru producția de biomasă solidă din lemn și deșeuri lemnoase. Noi am trecut de la idee la implementare și am reușit să ocupăm o poziție de frunte în țară într-un timp atât de scurt. Reciclăm deșeurile lemnoase rezultate din tăierea sezonieră, renovarea și regenerarea livezilor la scară industrială, transformând deșeurile de grădinărit în combustibil energetic, care este folosit în producția de combustibil solid, precum și ca combustibil pentru obținerea de abur de proces, încălzire și alte nevoi la întreprinderile din țară"
    },
    "services-heading": {
        "en": "Our Services",
        "ru": "Наши Услуги",
        "md": "Serviciile Noastre"
    },
    "roots": {
        "en": "Renovation and recycling<br>of old gardens",
        "ru": "Обновление и переработка<br>старых садов",
        "md": "Renovarea și reciclarea<br>livezilor vechi"
    },
    "trunks": {
        "en": "Any trunk diameter",
        "ru": "Любой диаметр ствола",
        "md": "Orice diametru al trunchiului"
    },
    "branches": {
        "en": "Annual and seasonal<br>pruning of the gardens",
        "ru": "Ежегодная и сезонная<br>обрезка сада",
        "md": "Tăierea anuală și sezonieră<br>a livezilor"
    },
    "numbers": {
        "en": "The numbers speak for themselves",
        "ru": "За нас говорят цифры",
        "md": "Numerele vorbesc pentru noi"
    },
    "tons-number":{
        "en": "Up to",
        "ru": "До", 
        "md": "Până la"
    },
    "numbers-day": {
        "en": "Per day",
        "ru": "В день",
        "md": "Pe zi"
    },
    "numbers-month": {
        "en": "Per month",
        "ru": "В месяц",
        "md": "Pe lună"
    },
    "numbers-year": {
        "en": "Per year",
        "ru": "В год",
        "md": "Pe an"
    },
    "tons": {
        "en": " tons",
        "ru": " тонн",
        "md": " tone"
    },
    "partners-heading": {
        "en": "Our Partners",
        "ru": "Наши Партнеры",
        "md": "Partenerii noștri"
    },
    "contact-us": {
        "en": "Contact us",
        "ru": "Свяжитесь с нами",
        "md": "Contactați-ne"
    },
    "call-us": {
        "en": "Write or call us and we will solve any of your problems with wood, woodland or garden. We will remove, clean, grind and take it out.",
        "ru": "Напишите или позвоните нам и мы решим любые ваши проблемы с древесиной, территорией лесным массивом или садом. Удалим, расчистим, измельчим и вывезем.",
        "md": "Scrieți-ne sau sunați-ne și vom rezolva oricare dintre problemele dvs. cu lemn, pădure sau grădină. Îl vom extrage, curăța, măcina și scoate."
    },
    "rights": {
        "en": "Copyright © 2024. Biotechpro S.R.L. All rights reserved.",
        "ru": "© 2024. Biotechpro S.R.L. Все права защищены.",
        "md": "Copyright © 2024. Biotechpro S.R.L. All rights reserved."
    },
}
const selects = document.querySelectorAll('.select-lang');
const allLangs = ['en', 'ru', 'md'];

selects.forEach(select => {
    select.addEventListener('change', function changeURLLang() {
        let lang = select.value;
        location.href = window.location.pathname + '#' + lang;
        location.reload();
    });
});

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLangs.includes(hash)) {
        location.href = window.location.pathname + '#md';
        location.reload();
    }
    selects.forEach(select => {
        select.value = hash;
    });
    for (let key in langArray) {
        document.querySelectorAll('.lng-' + key).forEach(element => {
            element.innerHTML = langArray[key][hash];
        });
    }
}

changeLanguage();
