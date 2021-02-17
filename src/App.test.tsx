import React from 'react';
import App from './App';
import {renderWithRedux} from "./utils";
import LicenseAgreement from "./components/LicenseAgreement/LicenseAgreement";
jest.mock('components/LicenseAgreement', () => () => null)

// look here for next education render(), screenByText, toBeInTheDocument

test('renders LicenseAgreement', () => {
  const renderer = renderWithRedux(<App />)

  expect(() => renderer.root.findByType(LicenseAgreement)).not.toThrow()
})
