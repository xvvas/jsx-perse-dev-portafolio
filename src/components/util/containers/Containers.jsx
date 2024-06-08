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

export function ContainerMain({children, className}){
    return(
        <main className={`ContainerMain ${className ? className : ''}`}>
            {children}
        </main>
    )
}



ContainerMain.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export function ContainerSection({children, className}){
    return(
        <section className={`ContainerMain ${className ? className : ''}`}>
            {children}
        </section>
    )
}

ContainerSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export function ContainerCard({children, className}){
    return(
        <div className={`ContainerCard ${className ? className : ''}`}>
            {children}
        </div>
    )
}