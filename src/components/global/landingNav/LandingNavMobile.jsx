//react
import { useState } from "react";
//css
import "./LandingNavMobile.css"
//util
import { BtnMenu, BtnNav } from "@cu/interface/btns/Btns";
import { ContainerNav } from "@cu/containers/Containers";
import { navLinks } from "@/components/util/data/options";
//assets
import brand from "@ap/nav_brandImg.png"


export default function LandingNavMobile() {


    const [isOpen, setIsOpen] = useState(false)


    return (
        <ContainerNav className={`LandingNavMobile${isOpen ? "--open" : "--close"}`}>
            <div className="landingNavMobile__head">
                <div className="landingNavMobile__brand">
                    <img
                        src={brand}
                    >
                    </img>
                </div>
                <div className="landingNavMobile__menu">
                    <BtnMenu
                        label="Menú"
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
            </div>
            <nav className={`landingNavMobile__links${isOpen ? "--open" : "--close"}`}>
                {navLinks?.map((value, index) => (
                    <BtnNav
                        key={index}
                        label={value.label}
                        to={value.to}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        onClick={() => setIsOpen(false)}
                    />
                ))}
            </nav>
        </ContainerNav>


    )
}