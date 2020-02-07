import {
    ASK_QUESTION,
    FILTER_QUESTIONS,
    AUTHENTICATE,
    LOGOUT
} from "../constants/action-types";


export function askQuestion(payload) {
    return { type: ASK_QUESTION, payload }
};
export function filterQuestions(payload) {
    return { type: FILTER_QUESTIONS, payload }
};
export function authenticate(payload) {
    return { type: AUTHENTICATE, payload }
};
export function logoutUser(payload) {
    return { type: LOGOUT, payload }
};

