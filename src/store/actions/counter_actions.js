import { COUNTER_ADD, COUNTER_SUBSTRACT } from "./action_types";

export const counterAdd = () => {
    return {
        type: COUNTER_ADD
    };
}

export const counterSubstract = () => {
    return {
        type: COUNTER_SUBSTRACT
    };
}