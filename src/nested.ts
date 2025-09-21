import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let ret: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].published) {
            ret.push(questions[i]);
        }
    }

    return ret;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let ret: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (
            questions[i].body ||
            questions[i].expected ||
            questions[i].options.length
        ) {
            ret.push(questions[i]);
        }
    }

    return ret;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id === id) {
            return questions[i];
        }
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let ret: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id !== id) {
            ret.push(questions[i]);
        }
    }

    return ret;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let ret: string[] = [];
    for (let i = 0; i < questions.length; i++) {
        ret.push(questions[i].name);
    }

    return ret;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let ret: number = 0;
    for (let i = 0; i < questions.length; i++) {
        ret += questions[i].points;
    }

    return ret;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let ret: number = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].published) {
            ret += questions[i].points;
        }
    }

    return ret;
}
/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let ret: string = "id,name,options,points,published";
    for (let i = 0; i < questions.length; i++) {
        ret += "\n";
        ret += questions[i].id;
        ret += ",";
        ret += questions[i].name;
        ret += ",";
        ret += questions[i].options.length;
        ret += ",";
        ret += questions[i].points;
        ret += ",";
        ret += questions[i].published;
    }

    return ret;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ret: Answer[] = [];
    for (let i = 0; i < questions.length; i++) {
        const x: Answer = {
            questionId: questions[i].id,
            text: "",
            submitted: false,
            correct: false,
        };
        ret.push(x);
    }

    return ret;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const deepCopies: Question[] = questions.map(
        (question: Question): Question => ({ ...question }),
    );
    for (let i = 0; i < deepCopies.length; i++) {
        deepCopies[i].published = true;
    }
    return deepCopies;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length) {
        const type: string = questions[0].type;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].type !== type) {
                return false;
            }
        }
        return true;
    }
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const deepCopies: Question[] = questions.map(
        (question: Question): Question => ({ ...question }),
    );
    let question: Question = makeBlankQuestion(id, name, type);
    deepCopies.push(question);
    return deepCopies;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const deepCopy: Question[] = questions.map(
        (question: Question): Question => ({ ...question }),
    );
    for (let i = 0; i < deepCopy.length; i++) {
        if (deepCopy[i].id === targetId) {
            deepCopy[i].name = newName;
        }
    }
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    const deepCopy: Question[] = questions.map(
        (question: Question): Question => ({ ...question }),
    );
    for (let i = 0; i < deepCopy.length; i++) {
        if (deepCopy[i].id === targetId) {
            deepCopy[i].type = newQuestionType;
            if (newQuestionType !== "multiple_choice_question") {
                deepCopy[i].options = [];
            }
        }
    }
    return deepCopy;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const deepCopy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
    for (let i = 0; i < deepCopy.length; i++) {
        if (deepCopy[i].id === targetId) {
            if (targetOptionIndex === -1) {
                let arr: string[] = deepCopy[i].options;
                arr.push(newOption);
                deepCopy[i].options = arr;
            } else {
                deepCopy[i].options[targetOptionIndex] = newOption;
            }
        }
    }
    return deepCopy;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const deepCopy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
    for (let i = 0; i < deepCopy.length; i++) {
        if (deepCopy[i].id === targetId) {
            const copy: Question = duplicateQuestion(newId, deepCopy[i]);
            deepCopy.splice(i + 1, 0, copy);
        }
    }
    return deepCopy;
}
