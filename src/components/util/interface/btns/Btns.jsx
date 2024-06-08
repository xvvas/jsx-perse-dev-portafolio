
import PropTypes from 'prop-types';
//css
import "./Btns.css"

//utils
import { TypeButton } from "@cu/fonts/Type";
import IconNavArrowDown from "@cu/icons/Icons";

export function BtnArrowDown({ className, label }) {
    return (
        <button className={`BtnArrowDown ${className}`}>
            <TypeButton>{label}</TypeButton>
            <IconNavArrowDown />
        </button>
    )
}

BtnArrowDown.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
}