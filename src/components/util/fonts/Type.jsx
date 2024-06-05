//react
import PropTypes from 'prop-types';

//css
import "./Type.css"

//H Type

export function TypeH1({children, className}){
    return(
        <h1 className={`typeH1 ${className ? className : ""}`}>
            {children}
        </h1>
    )
}

TypeH1.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export function TypeH2({children, className}){
    return(
        <h2 className={`typeH2 ${className ? className : ""}`}>
            {children}
        </h2>
    )
}

TypeH2.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export function TypeH3({children, className}){
    return(
        <h3 className={`typeH3 ${className ? className : ""}`}>
            {children}
        </h3>
    )
}

TypeH3.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}



export function TypeH4({children, className}){
    return(
        <h4 className={`typeH4 ${className ? className : ""}`}>
            {children}
        </h4>
    )
}

TypeH4.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}



export function TypeH5({children, className}){
    return(
        <h5 className={`typeH5 ${className ? className : ""}`}>
            {children}
        </h5>
    )
}

TypeH5.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}



export function TypeH6({children, className}){
    return(
        <h6 className={`typeH6 ${className ? className : ""}`}>
            {children}
        </h6>
    )
}

TypeH6.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

//Subtitle Type

export function TypeSubTitle1({children, className}){
    return(
        <p className={`typeSubTitle1 ${className ? className : ""}`}>
            {children}
        </p>
    )
}

TypeSubTitle1.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export function TypeSubTitle2({children, className}){
    return(
        <p className={`typeSubTitle2 ${className ? className : ""}`}>
            {children}
        </p>
    )
}

TypeSubTitle2.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

//Body types

export function TypeBody1({children, className}){
    return(
        <p className={`typeBody1 ${className ? className : ""}`}>
            {children}
        </p>
    )
}

TypeBody1.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}


export function TypeBody2({children, className}){
    return(
        <p className={`typeBody2 ${className ? className : ""}`}>
            {children}
        </p>
    )
}

TypeBody2.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

//Special Types

export function TypeButton({children, className}){
    return(
        <p className={`typeButton ${className ? className : ""}`}>
            {children}
        </p>
    )
}

TypeButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}


export function TypeCaption({children, className}){
    return(
        <p className={`typeCaption ${className ? className : ""}`}>
            {children}
        </p>
    )
}

TypeCaption.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export function TypeOverline({children, className}){
    return(
        <p className={`typeOverline ${className ? className : ""}`}>
            {children}
        </p>
    )
}

TypeOverline.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}


