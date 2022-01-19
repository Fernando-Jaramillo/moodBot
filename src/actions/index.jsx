import axios from "axios";

export function updateMood(payload){
    return{
        type: "UPDATE_MOOD",
        payload
    }
}

export function getQuote(quoteBody) {
    return async function (dispatch) {
        try {
            let json = await axios.post(
                "https://automation.uselab.com/api/fe-test/mood",
                quoteBody
            );
            return dispatch({
                type: "GET_QUOTE",
                payload: json.data.data.text
            })
        } catch (err) {
            console.log(err);
        }
    };
}

export function restartQuote(){
    return{
        type: "RESTART_QUOTE",
        payload: ""
    }
}
