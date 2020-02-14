import { ASK_QUESTION, FILTER_QUESTIONS, AUTHENTICATE, LOGOUT } from "../constants/action-types";


const initialState = {
    questions: [
        {
            tittle: "hey there any idea about me?",
            answer: "yes ofcourse honey :)"
        },
        {
            tittle: "wtf brug",
            answer: "lmao"
        },
        {
            tittle: "cant see you any more",
            answer: "im mr India"
        },
        {
            tittle: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhhhhhhhhhh",
            answer: "yorning is funn"
        },
        {
            tittle: "wanna join me at 8pm in hostel canteen?",
            answer: "always ready for fun!"
        },
        {
            tittle: "hey there any idea about me?",
            answer: "yes ofcourse honey :)"
        },
        {
            tittle: "wtf brug",
            answer: "lmao"
        },
        {
            tittle: "cant see you any more",
            answer: "im mr India"
        },
        {
            tittle: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhhhhhhhhhh",
            answer: "yorning is funn"
        },
        {
            tittle: "wanna join me at 8pm in hostel canteen?",
            answer: "always ready for fun!"
        },
        {
            tittle: "hey there any idea about me?",
            answer: "yes ofcourse honey :)"
        },
        {
            tittle: "wtf brug",
            answer: "lmao"
        },
        {
            tittle: "cant see you any more",
            answer: "im mr India"
        },
        {
            tittle: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhhhhhhhhhh",
            answer: "yorning is funn"
        },
        {
            tittle: "wanna join me at 8pm in hostel canteen?",
            answer: "always ready for fun!"
        },
        {
            tittle: "hey there any idea about me?",
            answer: "yes ofcourse honey :)"
        },
        {
            tittle: "wtf brug",
            answer: "lmao"
        },
        {
            tittle: "cant see you any more",
            answer: "im mr India"
        },
        {
            tittle: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhhhhhhhhhh",
            answer: "yorning is funn"
        },
        {
            tittle: "wanna join me at 8pm in hostel canteen?",
            answer: "always ready for fun!"
        },

    ],
    notifications: { questions: [] },
    auth: true,
    user: { name: 'Pankaj Anuragi', location: 'Delhi' }
};
function rootReducer(state = initialState, action) {

    debugger;

    if (action.type == FILTER_QUESTIONS) {
        return Object.assign({}, state, {
            questions: initialState.questions.filter((question) => question.tittle.indexOf(action.payload) > -1 || question.answer.indexOf(action.payload) > -1)
        });
    }
    else if (action.type == ASK_QUESTION) {
        return Object.assign({}, state, {
            notifications: { questions: state.notifications.questions.concat(action.payload) }
        });
    }
    else if (action.type == AUTHENTICATE) {
        console.log('authenticating :', action.payload.email);
        return Object.assign({}, state, {
            auth: false,
            user: { name: 'Pankaj Anuragi', location: 'Delhi' }
        });
    }
    else if (action.type == LOGOUT) {
        debugger;
        return Object.assign({}, state, {
            auth: false,
            user: {}
        });
    }
    else
        return state;
};
export default rootReducer;