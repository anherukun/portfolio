import Image from "next/image";
import ExperienceItem from "@components/ExperienceItem"
import ProfilePicture from "@components/ProfilePicture"
import ProjectEItem from "@components/ProjectItem"

import { mdiDownload, mdiMicrosoft } from "@mdi/js";

const EXPERIENCIE = [
	{
		title: "Seguridad Fisica",
		description: [
			"Vigilancia e inspeccion de instalaciones",
		],
		start: "2021",
		isCurrent: true,
	},
	{
		title: "Becario (Tecnologias de la Informacion)",
		description: [
			"Desarrollo de proyecto: Sistema de gestion VISIFLEX para departamento de Recursos Humanos.",
			"Mantenimiento, reparacion y configuracion de equipo institucional.",
			"Atencion a usuarios finales en el area de soporte tecnico"
		],
		start: "Marzo 2022",
		end: "Septiembre 2022",
		isCurrent: false,
	},
	{
		title: "Soporte Tecnico en TI",
		description: [
			"Instalación y configuración de software.",
			"Mantenimiento Correctivo a equipo de computo.",
			"Atención a usuarios finales.",
		],
		start: "Enero 2022",
		end: "Enero 2022",
		isCurrent: false,
	},
	{
		title: "Soporte Tecnico en TI",
		description: [
			"Instalación y configuración de software.",
			"Mantenimiento Correctivo a equipo de computo.",
			"Atención a usuarios finales.",
		],
		start: "Enero 2019",
		end: "Febrero 2021",
		isCurrent: false,
	},
]

const PROJECTS = [
	{
		title: "Sistema de gestion VISIFLEX",
		description: "Solucion que provee un control y gestion en cada una de las funciones operativas utilizado en el departamento de RH",
		imageurl: "https://cdn.discordapp.com/attachments/1103444305055580311/1203401057384796252/Untitled.png?ex=65d0f592&is=65be8092&hm=e0793ff1fe1ba63113e9efc96bfe57bc2c16f9c876ad368a1423a104f324d2f6&",
		features: [
			{
				glyph: mdiMicrosoft,
				label: "SharePoint"
			},
			{
				glyph: mdiMicrosoft,
				label: "Power Apps"
			},
			{
				glyph: mdiMicrosoft,
				label: "Power Automate"
			},
		],
	},
	{
		title: "Aplicaicon movil buscador de gasolineras: Mi Gasolinera",
		description: "Solucion que provee un control y gestion en cada una de las funciones operativas para el departamento de RH",
		imageurl: "https://cdn.discordapp.com/attachments/1103444305055580311/1203811416960667719/Untitled-2.png?ex=65d273bf&is=65bffebf&hm=90b456ed8c07c683581ce5f83e05d1cd0fd2f7147607bb2fe2d01268b6e40cc0&",

		urls: {
			icon: mdiDownload,
			label: "Ver en Play Store",
			url: "https://play.google.com/store/apps/details?id=com.anherudev.mauigasolineraapp"
		}
	}
]

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-16">
			<div className="m-x-auto flex flex-col gap-12 lg:max-w-3xl md:max-w-2xl">
				<div className="grid grid-cols-3">
					<div className="flex flex-col col-span-2">
						<h1 className="text-2xl font-bold">Angel Gerardo Jimenez Reyes</h1>
						<h2 className="font-medium">Ingeniero de Tecnologias de Informacion y Comunicacion</h2>
					</div>
					
					<div className="ml-8">
						<ProfilePicture url='https://i.pinimg.com/originals/63/d2/23/63d22307f5da42cdcac7ecdb3aa69b60.jpg' />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Sobre mi</h2>
					<p className="text-pretty">
						+3 años de experiencia en Soporte Tecnico Informatico en Petroleos Mexicanos. Continuamente impulso mis conocimientos sobre la informatica
						de manera autodidacta aprendiendo tecnologias mas actuales en la industria del desarrollo de software.
					</p>
					<p className="text-pretty">
						Me gusta poner en practica mis conocimientos adquiridos haciendo pequeños proyectos que me puedan representar un reto.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Experiencia laboral</h2>
					{EXPERIENCIE ? (
						EXPERIENCIE.map((e, index) => (
							<ExperienceItem {...e} />
						))):''}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Proyectos</h2>
					{PROJECTS ? (
						PROJECTS.map((e, index) => (
							<ProjectEItem {...e} />
						))):''}
				</div>
			</div>
		</main>
	);
}
