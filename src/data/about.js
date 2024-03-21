/**
 *  @typedef {Object} TimeData
 *  @property {boolean} isSingleDate
 *  @property {Date} startDate
 *  @property {Date} endDate
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
 * @type {Array<TimelineData>}
 */
export const EDUCATION_DATA = [
  {
    time: {
      isSingleDate: false,
      startDate: new Date("2007-01-01"),
      endDate: new Date("2019-01-01"),
    },
    headerKey: "",
    contentKey: "about1",
  },
  {
    time: {
      isSingleDate: true,
      startDate: new Date("2019-01-01"),
      endDate: new Date(),
    },
    headerKey: "",
    contentKey: "about2",
  },
  {
    time: {
      isSingleDate: false,
      startDate: new Date(),
      endDate: new Date(),
    },
    headerKey: "aboutE",
    contentKey: "about3",
  },
  {
    time: {
      isSingleDate: false,
      startDate: new Date(),
      endDate: new Date(),
    },
    headerKey: "",
    contentKey: "about4",
  },
];

/**
 * @type {Array<TimelineData>}
 */
export const WORK_DATA = [
  {
    time: {
      isSingleDate: false,
      startDate: new Date("2022-01-02"),
      endDate: new Date(),
    },
    headerKey: "",
    contentKey: "about5",
  },
];

/**
 * @type {Array<HobbyData>}
 */
export const HOBBY_DATA = [
  {
    headerKey: "aboutHob1",
    contentKey: "",
  },
  {
    headerKey: "aboutHob2",
    contentKey: "",
  },
  {
    headerKey: "aboutHob3",
    contentKey: "",
  },
  {
    headerKey: "aboutHob4",
    contentKey: "",
  },
  {
    headerKey: "aboutHob5",
    contentKey: "",
  },
  {
    headerKey: "aboutHob6",
    contentKey: "",
  },
];
