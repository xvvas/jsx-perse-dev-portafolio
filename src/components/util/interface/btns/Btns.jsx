//react
import PropTypes from 'prop-types';

//router
import { Link, useLocation } from 'react-router-dom';

//css
import "./Btns.css"

//utils
import { TypeButton } from "@cu/fonts/Type";
import { IconNavArrowDown } from "@cu/icons/Icons";

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

export function BtnOutline({ className, label }) {
    return (
        <button className={`BtnOutline ${className}`}>
            <TypeButton>{label}</TypeButton>
        </button>
    )
}

BtnOutline .propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
}

export function BtnLink({ className, label, to }) {
    return (
        <Link to={to} className={`BtnLink ${className}`}>
            <TypeButton>{label}</TypeButton>
        </Link>
    )
}

BtnLink .propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export function BtnNav({className, label, to}){

    const location = useLocation();
    const selected = location.pathname === to ? "--selected" : "";

    return(
        <Link to={to} className={`BtnNav${selected} ${className}`}>
            <TypeButton>{label}</TypeButton>
            <div className={`btnNav__line${selected} `}></div>
        </Link>
    )
}