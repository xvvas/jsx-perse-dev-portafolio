//css
import "./WorkProjectsContent.css"

//utils
import { TypeBody2, TypeCaption, TypeH3, TypeH4 } from "@cu/fonts/Type";
import { BtnLink } from "@cu/interface/btns/Btns";
import { ContainerCard, ContainerSection } from "@cu/containers/Containers";
import { BtnArrowDown } from "@cu/interface/btns/Btns";

export default function WorkProjectsContent() {


	const content = [{
		title: "Mis proyectos",
		subtitle: "Desarrollo Web",
		projects: [
			{
				title: "Rodriguez Law Group",
				description: "Landing Pague realizada para la firma de abogados Rodriguez Law Group en Miami.",
				technologies: ["HTML", "CSS", "JavaScript", "React", "AOS", "Netlify"],
				link: "https://rodriguez-lawgroup.com/"
			},
			{
				title: "Print Perfect",
				description: "Es una tienda de camisetas única, porque a través del poder de la IA puedes crear tu propia camiseta simplemente describiendo lo que quieres, lanzar tu propia marca, conseguir un producto único, marcar la diferencia.",
				technologies: ["HTML", "CSS", "JavaScript", "React", "Djnago", "API Rest", "Vercel", "Render"],
				link: "https://www.printperfect.ai/"
			},
			{
				title: "NSD co",
				description: "Near Shore Design es algo más que una empresa: es una potencia creativa, un faro de innovación y un centro de excelencia en el desarrollo. Nos especializamos en el diseño y desarrollo de soluciones que no sólo son de vanguardia, sino que también están estratégicamente posicionadas para prosperar en el panorama digital en constante evolución. ",
				technologies: ["HTML", "CSS", "JavaScript", "React", "AOS", "Vercel"],
				link: "https://www.nearshoredesign.co/"
			},
		]
	},
	{
		subtitle: "Project Manager",
		projects: [
			{
				title: "Soltecnica",
				description: "SOLTÉCNICA, distribución y venta de paneles solares e inversores de las más reconocidas marcas del sector. Fabricantes cuyos productos ofrecen la máxima garantía de calidad; que han sido convenientemente testados y que cuentan entre sus clientes, con las más emblemáticas empresas constructoras y de ingeniería.",
				technologies: ["Orchard CMS", "PHP", "JQuery", "Dayvo custom tools"],
				link: "https://soltecnica.es/"
			},
			{
				title: "Inmunopharmos",
				description: "lideres en el área de toxicología, investigación y desarrollo de pruebas en plaguicidas de origen químico, bioplaguicidas, extractos vegetales, cosméticos desinfectantes, productos para tratamiento de agua, combustibles y muchas más sustancias de uso diario en la industria, en el hogar y en el área agropecuaria. ",
				technologies: ["Orchard CMS", "PHP", "JQuery", "Dayvo custom tools"],
				link: "https://inmunopharmos.com/"
			},
			{
				title: "Barlovento CO",
				description: "Empresa innovadora que ofrece servicios calificados de ingeniería y construcción, realizamos consultorías, interventorías y supervisiones técnicas, diseños arquitectónicos, estructurales, eléctricos, hidrosanitarios y de redes.",
				technologies: ["Orchard CMS", "PHP", "JQuery", "Dayvo custom tools"],
				link: "https://barloventoco.com/"
			},
			{
				title: "Tic Energy",
				description: "Tic Energy es la solución frente a las necesidades del campo de la ingeniería eléctrica convencional, energía de fuentes renovables y redes de comunicaciones necesarias para el desarrollo parcial o total de proyectos en el campo industrial, comercial e institucional tanto en el sector público como en el sector privado.",
				technologies: ["Orchard CMS", "PHP", "JQuery", "Dayvo custom tools"],
				link: "https://ticenergy.com.co/"
			}
		]
	},
	{
		subtitle: "Diseño UI",
		projects: [
			{
				title: "Rodriguez Law Group Ui Desing",
				description: "Es una firma de abogados de la ciudad de miami que requerían actualizar su landig por una más actualizada y estética, se solicitó algo minimalista, no muy cargado, con formulario de contacto y algunos llamados a la accion.",
				technologies: ["Figma"],
				link: "https://www.figma.com/community/file/1231373922080385486/prototipo-web-para-rodriguez-lawgroup"
			},
			{
				title: "Kit Cannabico",
				description: "Proyecto totalmente con el objetivo de practicar habilidades frontend, principalmente usando tecnologías de diseño CSS/HTML",
				technologies: ["Figma"],
				link: "https://www.figma.com/community/file/1125179501307371221/kit-cannabico"
			},
			{
				title: "Portafolio",
				description: "El prototipo de este portafolio",
				technologies: ["Figma"],
				link: "https://www.figma.com/community/file/1330349126286430041"
			}
		]
	}



	]



	return (
		<ContainerSection className="WorkProjectsContent">
			{content.map((item, key) => (
				<div className="workProjectsContent__section" key={key}>
					<div className="workProjectsContent__head" data-aos="fade-up" data-aos-duration="2000">
						{item.title && <TypeH3 className="workProjectsContent__title">{item.title}</TypeH3>}
						<TypeH4 className="workProjectsContent__subtitle">{item.subtitle}</TypeH4>
					</div>
					<div className="workProjectsContent__body">
						{item.projects.map((project, index) => (
							<ContainerCard key={index} className="workProjectsContent__card" animation={"fade-up"} duration={"2000"} >
								<TypeH4 className="workProjectsContent__title--card">{project.title}</TypeH4>
								<div className="workProjectsContent__technologies">
									{project.technologies.map((tech, index) => (
										<span key={index}>
											<TypeCaption>
												{tech}
											</TypeCaption>
										</span>
									))}
								</div>
								<TypeBody2 className="workProjectsContent__description">{project.description}</TypeBody2>
								<BtnLink className="workProjectsContent__btn" to={project.link} label={"ver"} />
							</ContainerCard>
						))}
					</div>
				</div>
			))}
			{/*
			<div className="workProjectsContent__initScroll">
                <BtnArrowDown label="Conóceme"/>
            </div>
			*/}

		</ContainerSection>
	)
}