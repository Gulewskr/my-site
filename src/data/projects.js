//TODO update jsdoc types
/**
 *  @typedef {Object} Project
 *  @property {string} name
 *  @property {string[]} techs
 *  @property {string} link
 *
 * @typedef {Object} TimelineData
 * @property {TimeData} time
 * @property {string} headerKey
 * @property {string} contentKey
 *
 * @typedef {Object} HobbyData
 * @property {string} headerKey
 * @property {string} contentKey
 *
 */

/**
 * @type {Project[]}
 */
export const PROJECTS = [
    {
        title: {
            name: 'Mobile-organizer - React Native',
            trans: {
                pl: 'Mobile-organizer - React Native',
                en: 'Mobile-organizer - React Native',
            },
        },
        techs: ['React', 'JavaScript'],
        link: 'https://github.com/Gulewskr/mobile-organizer',
        description: {
            pl: 'Aplikacja mobilnej napisana z wykorzystaniem React Native i SQLite. Nie komunikuje się ona z serwisami, a dane zapisywanie są jedynie lokalnie. Główne funkcjonalności to planowanie zadań i tworzenie notatek, wraz z wykorzystaniem kalendarza (deadline-y, ustawianie serii powtórzeń do zadania np. daily). W aplikacji użytkownik ma również opcję personalizacji z wykorzystaniem różnych motywów kolorystycznych.',
            en: 'A mobile application written using React Native and SQLite. It does not communicate with any external services, and data is stored locally only. The main functionalities include task planning and note-taking, along with calendar integration (setting deadlines, scheduling task repetitions such as daily). The application also offers user personalization options with various color themes.',
        },
    },
    {
        title: {
            name: 'Recipes Forum',
            trans: {
                pl: 'Forum z przepisami',
                en: 'Recipes Forum',
            },
        },
        techs: ['JavaScript', 'Node.js'],
        link: 'https://github.com/Gulewskr/App-RecipesForum',
        description: {
            pl: 'Projekt aplikacji webowej utwonej w oparciu o architekture klient-server. Projekt nauczył mnie podstaw projektowania i tworzenia api, jak również pozwolił rozwinąć się w kontekście tworzenia zabezpieczeń aplikacji (szyfrowanie danych, tokeny, bezpieczne przechowywanie danych itd.). Aplikacja umożliwiała m.in. dodawanie własnych przepisów z opisami i zdjęciami, czy np. komentowanie i ocenianie przepisów innych.',
            en: 'The project of a web application built on a client-server architecture. The project taught me the basics of designing and creating APIs, as well as allowed me to develop in terms of application security (data encryption, tokens, secure data storage, etc.). The application enabled features such as adding custom recipes with descriptions and photos, as well as commenting and rating other recipes.',
        },
    },
    {
        title: {
            name: "'Blockudoku'",
        },
        techs: ['Java'],
        link: 'https://github.com/Gulewskr/Blockudoku_PIO',
        description: {
            pl: 'Projekt gry napisanej przy użyciu języka java. Pomysł gry opierał się na grze mobilnej blokudoku. Projekt na zajęcia mające na celu nauke podstaw tworzenia aplikacji w zespole (równoległe dodawanie nowych funkcjonalności) jak również umiejętność pisania testów jednostkowych.',
            en: "The project of a game written in Java. The game idea was based on the mobile game 'blockudoku.' The project was for classes aimed at learning the basics of creating applications in a team (simultaneously adding new functionalities) as well as the ability to write unit tests.",
        },
    },
    {
        title: {
            name: "'Tanki Offline'",
        },
        techs: ['Java'],
        link: 'https://github.com/Gulewskr/Tanki_Offline',
        description: {
            pl: 'Kolejny projekt gry w javie. Gra bazowała na specyfikacji funkcjonalnej przedstawionej przez osobę prowadzącą zajęcia.',
            en: 'Another Java game project. The game was based on the functional specification provided by the course instructor.',
        },
    },
    {
        title: {
            name: 'Tetris',
        },
        techs: ['Java'],
        description: {
            pl: 'Kolejny projekt gry w javie utworzony na potrzeby studiów (repo niestety zostało usunięte - a szkoda fajna gra 😁)',
            en: 'Another Java game project created for academic purposes (unfortunately, the repository has been deleted - what a pity, it was a cool game 😁).',
        },
    },
];

/**
 * @type {Project[]}
 */
export const PORJECT_NOT_DONE = [
    {
        title: {
            name: 'JSON-Generator',
            trans: {
                pl: 'JSON-Generator',
                en: 'JSON-Generator',
            },
        },
        techs: ['JavaScript', 'Node.js'],
        link: 'https://github.com/Gulewskr/Patients-Generator',
        description: {
            pl: 'Projekt prostego generatora json-a, który miał służyć za tworzenie demo danych, które emitującymi prawdziwe dane zwracane przez docelowe api (baza imion, nazwisk, generowanie pesel zgodnego z datą urodzenia itd.) - podstawowa funkcjonalność pomogła znajomemu w projekcie ale projekt chcę rozwinąć gdyż uważam że może pomóc mi w przyszłości. Oprócz tego planuję dodać możliwość exportu danych w postaci skryptu sql jak i oczywiście interfejs graficzny aplikacji.',
            en: 'The project of a simple JSON generator, intended for creating demo data that mimics real data returned by the target API (database of names, surnames, generating PESEL numbers according to the date of birth, etc.). The basic functionality helped a friend in a project, but I want to expand the project because I believe it can help me in the future. In addition to that, I plan to add the ability to export data in the form of SQL scripts, as well as, of course, a graphical interface for the application.',
        },
    },
    {
        title: {
            name: 'Game shop',
            trans: {
                pl: 'Sklep z grami',
                en: 'Game shop',
            },
        },
        techs: ['C Sharp'],
        link: 'https://github.com/Gulewskr/game-shop',
        description: {
            pl: 'Projekt aplikacji opartej o .net core. Projekt na studia jednak możliwe, że w przyszłości zostanie wykorzystany pod własne potrzeby (sklep internetowy)',
            en: 'The project of an application based on .NET Core. It is a project for studies; however, it is possible that in the future it will be utilized for personal needs (an online store).',
        },
    },
    {
        title: {
            name: 'Streaming platform',
            trans: {
                pl: 'Platforma streamingowa',
                en: 'Streaming platform',
            },
        },
        techs: ['Java', 'JavaScript', 'CSS'],
        link: 'https://github.com/Gulewskr/StreamingPlatform',
        description: {
            pl: "Projekt platformy streamingowej napisany przy użyciu Javy (Spring) oraz TypeScript-u (React.js). Miał być 'kopią' Twitcha jak i innych portali streamingowych. Chciałem zagłębić się w temacie transmisji internetowych i przesyłu danych jednak finalnie projekt nie został jeszcze zrealizowany.",
            en: "The project of a streaming platform written using Java (Spring) and TypeScript (React.js). It was supposed to be a 'copy' of Twitch and other streaming portals. I wanted to delve into the topic of internet broadcasting and data transmission, but ultimately, the project has not yet been realized.",
        },
    },
];

/**
 * @type {Project[]}
 */
export const PORJECT_UNDER_DEVELOPEMENT = [
    {
        title: {
            name: 'E-lessons planner',
            trans: {
                pl: 'Planer e-korepetycji',
                en: 'E-tutoring planner',
            },
        },
        techs: ['Java', 'JavaScript', 'CSS'],
        description: {
            pl: 'Projekt zakłada utworzenie aplikacji desktopowej (Electron) jak i mobilnej (React Native), które posłużą do zarządzania i planowania informacji związanymi z prowadzeniem korepetycji - kalendarz, informacje o uczniach, notatki, historia płatności, podsumowania i przypomnienia. Aplikacja pisana na potrzeby osoby prywatnej więc na ten moment nie zakładam warstwy serwerowej a jedynie bezpośrendie wysyłanie zapytań do bazy danych (osoba z aplikacją będzie miała pełny dostęp do informacji w bazie - hardcoded config)',
            en: 'Project includes creation of desktop app (Electron) like also mobile one (React Native). The app will be used for managing and planning information related to conducting tutoring - calendar, student information, notes, payment history, summaries, and reminders. The application is being developed for a private individual, so at the moment, I do not assume a server layer, only direct querying of the database (the person using the application will have full access to the information in the database - hardcoded config).',
        },
    },
];
