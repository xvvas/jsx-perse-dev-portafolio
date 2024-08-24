import { ContainerMain } from "@cu/containers/Containers";
import { TypeH1, TypeSubTitle1 } from "@/cu/fonts/Type";
import { BtnArrowDown } from "@/components/util/interface/btns/Btns";

export default function BlogMainContent() {
    return (
        <ContainerMain className="BlogMainContent">
            <div className="blogMainContent__content">
                <TypeH1>
                    Mi visión del mundo plasmada en textos
                </TypeH1>
                <TypeSubTitle1>
                    Desarrollo productos que comunican grandes soluciones
                </TypeSubTitle1>
            </div>
            <div className="blogMainContent__initScroll">
                <BtnArrowDown label="Conóceme" />
            </div>
        </ContainerMain>
    )
}