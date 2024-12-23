//react
import PropTypes from 'prop-types';

//router
import { Link, useLocation } from 'react-router-dom';

//css
import "./Btns.css"

//utils
import { TypeButton } from "@cu/fonts/Type";
import { IconNavArrowDown } from "@cu/icons/Icons";
import { useState } from 'react';

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

export function BtnNav({className, label, to, onClick}){

    const location = useLocation();
    const selected = location.pathname === to ? "--selected" : "";

    return(
        <Link to={to} className={`BtnNav${selected} ${className}`} onClick={onClick}>
            <TypeButton>{label}</TypeButton>
            <div className={`btnNav__line${selected} `}></div>
        </Link>
    )
}


BtnNav.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export function BtnMenu({ modifier , isOpen,anim, setIsOpen, setAnim}){
    
    

    const handleBtn = () => {
        setAnim(!anim)
        setIsOpen(!isOpen)
    }



    return (
        <div className={`BtnMenu ${modifier}`}>
            <button className="btnMenu__btn" onClick={() => handleBtn()}>
                <div className={`btnMenu__line ${anim ? "fade-out" : "fade-in"}`}></div>
                <div className={`btnMenu__line ${anim ? "rotate-90-in-l" : "rotate-90-out-l"}`}></div>
                <div className={`btnMenu__line ${anim ? "rotate-90-in-r" : "rotate-90-out-r"}`}></div>
            </button>
        </div>
    )
  }
BtnMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    modifier: PropTypes.string,
    anim: PropTypes.bool.isRequired,
    setAnim: PropTypes.func.isRequired
}

