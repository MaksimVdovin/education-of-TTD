import { renderWithRedux } from 'utils'
import Checkbox from 'components/Checkbox'
import React from "react";
import LicenseAgreement from "./LicenseAgreement";
import AgreementSubmitButton from "../AgreementSubmitButton/AgreementSubmitButton";


jest.mock('components/Checkbox', () => () => null);

describe('LicenseAgreement', () => {
   it('renders checkbox with name and label', () => {
      const renderer = renderWithRedux(<LicenseAgreement />);

      const element = renderer.root.findByType(Checkbox);
      expect(element.props.name).toBe('agree');
      expect(element.props.label).toBe('Agree');
   });


   it('renders SubmitAgreementButton', () => {
      const renderer = renderWithRedux(<LicenseAgreement />)

      expect(() => renderer.root.findByType(AgreementSubmitButton)).not.toThrow()
   })
});