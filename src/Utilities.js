/**
 * TimeBlock: Represents a block of time.
 */
export class TimeBlock {
    /**
     * Constructs a TimeBlock based on two Date objects that indicate start and end.
     * @param {Date} start the start time of the block
     * @param {Date} end the end time of the block
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    /**
     * Determines if two TimeBlocks overlap with one another.
     * @param {TimeBlock} timeBlock 
     */
    overlapsWith(timeBlock) {
        let isBefore = 
            this.start.valueOf() < timeBlock.start.valueOf() &&
            this.end.valueOf() < timeBlock.start.valueOf();
        let isAfter = 
            this.start.valueOf() > timeBlock.start.valueOf() &&
            this.end.valueOf() > timeBlock.start.valueOf();
        return isBefore || isAfter;
    }

    toString() {
        return this.start.toDateString() + " – " + this.end.toDateString();
    }
}

/**
 * Makes a TimeBlock within a certain reference week.
 * Eases "manual" construction of TimeBlocks based on the
 * classes.berkeley.edu format of date/time. Should not be used
 * for reasons other than testing.
 * 
 * TODO: Support Sunday and Saturday?
 * @param {string} day day of week that block occurs on (e.g. "M")
 * @param {string} startTime block start time in 24-hour format (e.g. "13:00")
 * @param {string} endTime block end time in 24-hour format
 */
export function makeTimeBlock(day, startTime, endTime) {
    let numDay = 0;
    switch (day) {
        case "M":
            numDay = 14;
            break;
        case "Tu":
            numDay = 15;
            break;
        case "W":
            numDay = 16;
            break;
        case "Th":
            numDay = 17;
            break;
        case "F":
            numDay = 18;
            break;
    }

    let startTimeArr = startTime.split(":").map((x) => parseInt(x));
    let endTimeArr = endTime.split(":").map((x) => parseInt(x));

    let startDate = new Date(Date.UTC(2000, 7, numDay, startTimeArr[0], startTimeArr[1]));
    let endDate = new Date(Date.UTC(2000, 7, numDay, endTimeArr[0], endTimeArr[1]));
    
    return new TimeBlock(startDate, endDate);
}
