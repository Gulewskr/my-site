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

//TODO dodać opisy
// + modal do wyświetlania

/**
 * @type {Project[]}
 */
export const PROJECTS = [
  {
    name: "Mobile-organizer - React Native",
    techs: ["React", "JavaScript"],
    link: "https://github.com/Gulewskr/mobile-organizer",
  },
  {
    name: "'Blockudoku'",
    techs: ["Java"],
    link: "https://github.com/Gulewskr/Blockudoku_PIO",
  },
  {
    name: "'Tanki Offline'",
    techs: ["Java"],
    link: "https://github.com/Gulewskr/Tanki_Offline",
  },
  {
    name: "Algorithms and data structures project",
    techs: ["Java"],
    link: "/404",
  },
  {
    name: "Recipes Forum",
    techs: ["JavaScript", "Node.js"],
    link: "https://github.com/Gulewskr/App-RecipesForum",
  },
  {
    name: "Tetris",
    techs: ["Java"],
    link: "https://github.com/biedrzyd/testowanie_oprogramowania1/tree/master/Tetris",
  },
  {
    name: "Simple todo app - Javafx",
    techs: ["Java"],
    link: "https://github.com/biedrzyd/testowanie_oprogramowania1/tree/master/todo-app",
  },
];

/**
 * @type {Project[]}
 */
export const PORJECT_NOT_DONE = [
  {
    name: "JSON-Generator 👷‍♂️",
    techs: ["JavaScript", "Node.js"],
    link: "https://github.com/Gulewskr/Patients-Generator",
  },
  {
    name: "Game shop 👷‍♂️ - .net core",
    techs: ["C Sharp"],
    link: "https://github.com/Gulewskr/game-shop",
  },
  {
    name: "Streaming platform 👷‍♂️ - Java Spring, TS (React)",
    techs: ["Java", "JavaScript"],
    link: "https://github.com/Gulewskr/game-shop",
  },
];

/**
 * @type {Project[]}
 */
export const PORJECT_UNDER_DEVELOPEMENT = [];
