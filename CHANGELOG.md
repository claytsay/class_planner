# Changelog

Logs changes. Not much else.


## 0.1.1
- Created new utility classes/functions
  - Put them into ['Utilities.js'](src/Utilities.js)
  - `TimeBlock`: a class that represents a block/period of time
  - `makeTimeBlock`: a function that creates a time block that falls within a certain week
    - Used to create `TimeBlock`s that represent college classes that occur on a weekly basis
    - Adapted to accept syntax based on [classes.berkeley.edu](https://classes.berkeley.edu)
- Changed the example data
  - Put the example data into a separate file ([`data_example.js`](src/data_example.js))
  - Augmented example data with `TimeBlock` objects
- Made the app deployable to Github Pages ([link](https://claytsay.github.io/class_planner/))
- Made a (very) rudimentary logo
  - New logo file: [`logo.svg`](src/logo.svg)
  - Renamed the React logo file to [`react_logo.svg`](src/react_logo.svg)
  - Incorporated new logo into app
- Updated the [`README.md`](./README.md)
