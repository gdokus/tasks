/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let ret: number[] = [];
    if (numbers.length) {
        ret.push(numbers[0]);
        ret.push(numbers[numbers.length - 1]);
    }
    return ret;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let ret: number[] = numbers.map((num: number): number => num * 3);
    return ret;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    function numconv(num: string): number {
        let ret: number = parseInt(num);
        if (isNaN(ret)) {
            return 0;
        } else {
            return ret;
        }
    }
    return numbers.map((num: string): number => numconv(num));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    function numconv(num: string): number {
        let ret = parseInt(num);
        if (num.charAt(0) === "$") {
            ret = parseInt(num.slice(1));
        }
        if (isNaN(ret)) {
            return 0;
        }
        return ret;
    }
    return amounts.map((num: string): number => numconv(num));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    function conv(msg: string): string {
        if (msg.charAt(msg.length - 1) === "!") {
            return msg.toUpperCase();
        }
        return msg;
    }
    return messages
        .filter((msg: string): boolean => !(msg.charAt(msg.length - 1) === "?"))
        .map((msg: string): string => conv(msg));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const check = ["red", "green", "blue"];
    return colors.every((c: string): boolean => check.includes(c));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (currentTotal: number, n: number): number => (currentTotal += n),
        0,
    );
    let str = "";
    if (addends.length) {
        str = addends.join("+");
    } else {
        str = "0";
    }
    return "" + sum + "=" + str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNeg = values.findIndex((x) => x < 0);
    if (firstNeg === -1 && values.length) {
        const sum = values.reduce(
            (run: number, x: number): number => (run += x),
        );
        return [...values, sum];
    } else if (!values.length) {
        return [0];
    }
    let sum = 0;
    if (!(firstNeg === 0)) {
        sum = values
            .slice(0, firstNeg)
            .reduce((run: number, x: number): number => (run += x));
    }
    return [
        ...values.slice(0, firstNeg + 1),
        sum,
        ...values.slice(firstNeg + 1, values.length),
    ];
}
