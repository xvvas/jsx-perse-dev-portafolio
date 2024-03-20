import PropTypes from 'prop-types';

//style
import './Containers.css'


export function ContainerNav({children, className}){
    return(
        <header className={`ContainerNav ${className ? className: ''}`}>
            {children}
        </header>
    )
}

ContainerNav.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,    
}

export function ContainerFooter({children, className}){
    return(
        <footer className={`ContainerFooter ${className ? className : ''}`}>
            {children}
        </footer>
    )
}

ContainerFooter.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}