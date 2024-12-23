//css
import "./BioMainContent.css"


//utils

import { ContainerMain } from "@cu/containers/Containers";
import { TypeH1, TypeSubTitle1 } from "@cu/fonts/Type";
// import { BtnArrowDown } from "@cu/interface/btns/Btns";

export default function BioMainContent() {
    return (
        <ContainerMain className="BioMainContent">
            <div className="bioMainContent__content">
                <div className=" bioMainContent__title" data-aos="fade-left" data-aos-duration="2000">
                    <TypeH1>
                        Un apasionado por la tecnología y el arte
                    </TypeH1>
                </div>
                <div className="bioMainContent__subtitle" data-aos="fade-right" data-aos-duration="2000">
                    <TypeSubTitle1>
                        Desarrollo productos que comunican grandes soluciones
                    </TypeSubTitle1>
                </div>
            </div>
            {/* 
            <div className="bioMainContent__initScroll">
                <BtnArrowDown label="Conóceme"/>
            </div>
            */}

        </ContainerMain>
    )
}