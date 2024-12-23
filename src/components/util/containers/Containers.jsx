import PropTypes from "prop-types";

//style
import "./Containers.css"


export function ContainerNav({children, className}){
    return(
        <header className={`ContainerNav ${className ? className: ""}`}>
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
        <footer className={`ContainerFooter ${className ? className : ""}`}>
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
        <main className={`ContainerMain ${className ? className : ""}`}>
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
        <section className={`ContainerSection ${className ? className : ""}`}>
            {children}
        </section>
    )
}

ContainerSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export function ContainerCard({children, className, animation = null, duration = null}){
    return(
        <div className={`ContainerCard ${className ? className : ""}`} data-aos={animation} data-aos-duration={duration}>
            {children}
        </div>
    )
}

ContainerCard.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    animation: PropTypes.string,
    duration: PropTypes.string
}