import React from 'react';
import Checkbox from "../Checkbox/Checkbox";
import AgreementSubmitButton from "../AgreementSubmitButton/AgreementSubmitButton";


const LicenseAgreement: React.FC = () => {
    return (
        <div className='main'>
            <div className={'lorem'}>Lorem impsun</div>
            <Checkbox name="agree" label="Agree" />
            <AgreementSubmitButton />
        </div>
    )
}

export default LicenseAgreement;