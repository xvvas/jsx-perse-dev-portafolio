//react
import { useState } from "react";
//css
import "./LandingNav.css"
//util
import { BtnMenu, BtnNav } from "@cu/interface/btns/Btns";
import { ContainerNav } from "@cu/containers/Containers";
import { navLinks } from "@/components/util/data/options";
//assets
import brand from "@ap/nav_brandImg.png"






export default function LandingNav() {

	const [mobileView, setMobileView] = useState(false)
	const [isOpen, setIsOpen] = useState(false)


	window.addEventListener("resize", () => {
		if (window.innerWidth <= 768) {
			setMobileView(true)
		} else {
			setMobileView(false)
		}
	})


	return (
		<ContainerNav className="LandingNav">
			{!mobileView && (
				<div className="landingNav__desktop">
					<div className="landingNav__brand">
						<img
							src={brand}

						>
						</img>
					</div>
					<nav className="landingNav__actions">
						{navLinks?.map((value, index) => (
							<BtnNav
								key={index}
								label={value.label}
								to={value.to}
							/>
						))}

					</nav>
				</div>
			)}
			{mobileView && (
				<div className="LandingNav_mobile">
					<div className="landingNav__brand">
						<img
							src={brand}

						>
						</img>
					</div>
					<div className="landingNav__menu">
						<BtnMenu
							label="Menú"
							isOpen={isOpen}
							setIsOpen={setIsOpen}
						/>
					</div>
					<nav className={`landingNav__links${isOpen ? "--open" : "--close"}`}> 
						{navLinks?.map((value, index) => (
							<BtnNav
								key={index}
								label={value.label}
								to={value.to}
								isOpen={isOpen}
								setIsOpen={setIsOpen}
							/>
						))}
					</nav>
				</div>

			)}

		</ContainerNav>
	)
}