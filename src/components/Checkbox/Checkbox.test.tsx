import Checkbox from './Checkbox';
import React, {ReactElement} from "react";
import {renderWithRedux} from "../../utils";
import {act} from "react-test-renderer";


describe('Checkbox', () => {
    it('sets name prop as input id', () => {
        const checkboxName = 'anyCheckbox';

        const renderer = renderWithRedux(<Checkbox name={checkboxName} label={'anyLabel'}/>);

        const element = renderer.root.findByType('input');
        expect(element.props.id).toBe(checkboxName);
    });

    it('sets name prop as label htmlFor', () => {
        const checkboxName = 'anyCheckbox';

        const renderer = renderWithRedux(<Checkbox name={checkboxName} label={'anyLabel'}/>);

        const element = renderer.root.findByType('label');
        expect(element.props.htmlFor).toBe(checkboxName);
    });

    it('sets checked flag from store when its checked', () => {
        const initialState = {checkboxes: {anyName: true}};

        const renderer = renderWithRedux(<Checkbox name="anyName" label="anyLabel"/>, initialState);

        const element = renderer.root.findByType('input');
        expect(element.props.checked).toBe(true);
    });

    it('sets checked flag from store when it`s unchecked', () => {
        const initialState = {checkboxes: {anyName: false}};

        const renderer = renderWithRedux(<Checkbox name="anyName" label="anyLabel"/>, initialState);

        const element = renderer.root.findByType('input');
        expect(element.props.checked).toBe(false);
    });

    test.each`
    storedState | state
    ${true}     | ${'checked'}
    ${false}    | ${'unchecked'}
  `('sets checked flag from store when it`s $state', ({storedState}) => {
        const initialState = {checkboxes: {anyName: storedState}};

        const renderer = renderWithRedux(<Checkbox name="anyName" label="anyLabel"/>, initialState);

        const element = renderer.root.findByType('input');
        expect(element.props.checked).toBe(storedState);
    });

    it('changes its checked when its clicked', () => {
        const initialState = {checkboxes: {anyName: false}};

        const renderer = renderWithRedux(<Checkbox name="anyName" label="anyLabel"/>, initialState);

        const element = renderer.root.findByType('input');
        act(() => {
            element.props.onChange()
        });
        expect(element.props.checked).toBe(true);
    });
});