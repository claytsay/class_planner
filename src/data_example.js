import { TimeBlock, makeTimeBlock } from "./Utilities.js";

/**
 * Sample data
 */
export const Courses = [
  {
    name: "CHEM 4B",
    section: 1,
    times: [
      makeTimeBlock("M", "10:00", "10:59"),
      makeTimeBlock("W", "10:00", "10:59"),
      makeTimeBlock("F", "10:00", "10:59")
    ]
  },
  {
    name: "CHMENG 40",
    section: 1,
    times: [
      makeTimeBlock("Tu", "08:00", "08:59")
    ]
  },
  {
    name: "MATH 54",
    section: 1,
    times: [
      makeTimeBlock("M", "11:00", "11:59"),
      makeTimeBlock("W", "11:00", "11:59"),
      makeTimeBlock("F", "11:00", "11:59")
    ]
  },
  {
    name: "PHYSICS 7B",
    section: 3,
    times: [
      makeTimeBlock("M", "13:00", "13:59"),
      makeTimeBlock("W", "13:00", "13:59"),
      makeTimeBlock("F", "13:00", "13:59")
    ]
  },
  {
    name: "COMPSCI 61B",
    section: 1,
    times: [
      makeTimeBlock("M", "15:00", "15:59"),
      makeTimeBlock("W", "15:00", "15:59"),
      makeTimeBlock("F", "15:00", "15:59")
    ]
  }
];
