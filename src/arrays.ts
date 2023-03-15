/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let bookEnd: number[];
    bookEnd = [...numbers];
    if (numbers.length > 1) {
        bookEnd = [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length == 1) {
        bookEnd = [numbers[0], numbers[0]];
    } else {
        bookEnd = [];
    }
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let intString = numbers.map((number: string): number => Number(number));
    intString = intString.map((number: number): number =>
        isNaN(number) ? (number = 0) : number
    );

    return intString;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let noDollars: number[] = [];
    amounts = amounts.map((num: string): string =>
        num.charAt(0) == "$" ? num.substring(1) : num
    );
    noDollars = stringsToIntegers(amounts);
    return noDollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    );
    newMessages = newMessages.map((word: string): string =>
        word[word.length - 1] == "!" ? word.toUpperCase() : word
    );
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const isShort = (word: string): boolean => word.length < 4;
    const shortWords = words.filter(isShort);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let copyColors = [...colors];
    copyColors = copyColors.filter((color: string): boolean => color != "red");
    copyColors = copyColors.filter((color: string): boolean => color != "blue");
    copyColors = copyColors.filter(
        (color: string): boolean => color != "green"
    );
    return copyColors.length == 0 ? true : false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    } else {
        const sum = addends.reduce((a, b) => a + b, 0);
        return (
            sum +
            "=" +
            addends.map((number: number): string => number.toString()).join("+")
        );
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
    const copyValues = [...values];

    const checkNeg = values.findIndex(
        (negValue: number): boolean => negValue < 0
    );

    if (checkNeg == -1) {
        const notNeg = values.reduce(
            (currTotal: number, currValue: number) => currTotal + currValue,
            0
        );
        copyValues.splice(values.length, 0, notNeg);
        return copyValues;
    } else if (checkNeg == 0) {
        copyValues.splice(checkNeg + 1, 0, 0);
        return copyValues;
    } else {
        const negValue = values.reduceRight(
            (currTotal: number, currValue: number) => currTotal + currValue,
            values[checkNeg]
        );
        copyValues.splice(checkNeg + 1, 0, negValue);
        return copyValues;
    }
}
