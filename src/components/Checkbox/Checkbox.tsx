import React from 'react'
import {getCheckboxState} from "../../selectors/selectors";
import {useDispatch, useSelector} from "react-redux";
import {checkboxClick} from "../../actions/action";

const Checkbox: React.FC<{label: string; name: string;}> = ({label, name}) => {
    const checked = useSelector(getCheckboxState(name));
    const dispatch = useDispatch();

    const handleClick = React.useCallback(() => {
        dispatch(checkboxClick(name))
    }, [dispatch, name]);
    return (
        <div className='checkbox'>
            <input id={name} type="checkbox" checked={checked} onChange={handleClick}/>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Checkbox