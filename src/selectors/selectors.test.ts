import {getCheckboxState} from './selectors';

describe('getCheckboxState', () => {
    const state = {
        checkboxes: { anyName: true },
    }

    const stateWithUndefined = {
        checkboxes: { anyName: false },
    }
    it('returns current checkbox state', () => {
        const result = getCheckboxState('anyName')(state)

        expect(result).toBe(true);
    })

    it ('return false when checkbox state is undefined', () => {
        const result = getCheckboxState('anyName')(stateWithUndefined);

        expect(result).toBe(false);
    })
});