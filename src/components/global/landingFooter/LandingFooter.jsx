//css
import "./LandingFooter.css"
//utils
import { TypeOverline } from "@/components/util/fonts/Type";
import { ContainerFooter } from "@cu/containers/Containers";

export default function LandingFooter() {
    return (
        <ContainerFooter className="LandingFooter">
            <TypeOverline>
                Sitio web diseñado con NEXT.JS y con ❤️ por <strong className="landingFooter__strong">MIGUEL VASQUEZ GIRALDO</strong>
            </TypeOverline>
            <TypeOverline>
                V 0.0.1
            </TypeOverline>
        </ContainerFooter>
    )
}