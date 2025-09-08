import { PassThrough } from "stream";

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
    let ret: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        ret.push(numbers[i] * 3);
    }
    return ret;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let ret: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        let num: number = parseInt(numbers[i]);
        if (isNaN(num)) {
            num = 0;
        }
        ret.push(num);
    }
    return ret;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let ret: number[] = [];
    for (let i = 0; i < amounts.length; i++) {
        let str: string = amounts[i];
        if (str.charAt(0) === "$") {
            str = str.slice(1);
        }
        let num: number = parseInt(str);
        if (isNaN(num)) {
            num = 0;
        }
        ret.push(num);
    }
    return ret;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let ret: string[] = [];
    for (let i = 0; i < messages.length; i++) {
        let msg: string = messages[i];
        if (msg.charAt(msg.length - 1) === "!") {
            ret.push(msg.toUpperCase());
        } else if (msg.charAt(msg.length - 1) !== "?") {
            ret.push(msg);
        }
    }
    return ret;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let ret: number = 0;
    for (let i = 0; i < words.length; i++) {
        let wrd: string = words[i];
        if (wrd.length < 4) {
            ret++;
        }
    }
    return ret;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length !== 0) {
        let check = ["red", "blue", "green"];
        for (let i = 0; i < colors.length; i++) {
            if (!check.includes(colors[i])) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length !== 0) {
        let sum: number = 0;
        let str: string = "";
        for (let i = 0; i < addends.length; i++) {
            sum += addends[i];
            str += addends[i];
            str += "+";
        }
        str = str.slice(0, str.length - 1);
        return "" + sum + "=" + str;
    } else {
        return "0=0";
    }
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
    let ret = [];
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] >= 0) {
            sum += values[i];
            ret.push(values[i]);
        } else {
            ret.push(values[i]);
            ret.push(sum);
            for (let j = i + 1; j < values.length; j++) {
                ret.push(values[j]);
            }
            return ret;
        }
    }
    ret.push(sum);
    return ret;
}
