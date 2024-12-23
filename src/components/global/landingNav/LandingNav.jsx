//react
import { useState } from "react";
//css
import "./LandingNav.css"
//util
import { BtnNav } from "@cu/interface/btns/Btns";
import { ContainerNav } from "@cu/containers/Containers";
import { navLinks } from "@/components/util/data/options";
//assets
import brand from "@ap/nav_brandImg.png"






export default function LandingNav() {


	return (
		<ContainerNav className="LandingNav">
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
		</ContainerNav>
	)
}