import {checkboxClick} from "./action";
import {CHECKBOX_CLICK} from "./actionTypes";

describe('checkboxClick', () => {
    it('returns checkboxClick action with action name in payload', () => {
        const checkboxName = 'anyCheckbox';
        const result = checkboxClick(checkboxName);

        expect(result).toEqual({type: CHECKBOX_CLICK, payload: checkboxName});
    })
});