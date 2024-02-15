'use client'

import MinimalLinkButton from "@/components/MinimalLinkButton"
import MinimalButton from "@/components/MinimalButton"
import ExperienceItem from "@components/ExperienceItem"
import ProfilePicture from "@components/ProfilePicture"
import ProjectEItem from "@components/ProjectItem"
import EducationItem from "@components/EducationItem"

import Icon from '@mdi/react';

import { mdiAndroid, mdiCodeBraces, mdiDatabase, mdiEmail, mdiEmailOutline, mdiFirebase, mdiGithub, mdiGooglePlay, mdiLinkedin, mdiMicrosoft, mdiMicrosoftWindows, mdiMicrosoftWindowsClassic, mdiPrinterOutline, mdiWeb } from "@mdi/js";

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
			"Diseño e implementacion de sistema: Checador de asistencia"
		],
		start: "Enero 2019",
		end: "Febrero 2021",
		isCurrent: false,
	},
]

const EDUCATION = [
	{
		title: "Ingenieria en Tecnologias de la Informacion y Comunicacion",
		school: "Universidad Interamericana para el Desarrollo",
		exp: 2023,
		profesionId: "Documento en tramite..."
	},
	{
		title: "Tecnico en Computacion",
		school: "Instituto Tecnico del Golfo de Mexico",
		exp: 2017,
		profesionId: "10178776"
	}
]

const PROJECTS = [
	{
		title: "Sistema de gestion VISIFLEX",
		description: "Solucion que provee un control y gestion en cada una de las funciones operativas para el departamento de RH",
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
		title: "Aplicacion movil buscador de gasolineras: Mi Gasolinera",
		description: "Aplicación de productividad y economía diseñada para facilitar la búsqueda de gasolineras en México y ayudar a los usuarios a ahorrar tiempo y dinero a la hora de comprar combustible",
		imageurl: "https://cdn.discordapp.com/attachments/1103444305055580311/1203811416960667719/Untitled-2.png?ex=65d273bf&is=65bffebf&hm=90b456ed8c07c683581ce5f83e05d1cd0fd2f7147607bb2fe2d01268b6e40cc0&",
		features: [
			{
				glyph: mdiFirebase,
				label: "Firebase"
			},
			{
				glyph: mdiCodeBraces,
				label: ".NET 7"
			},
			{
				glyph: mdiCodeBraces,
				label: ".NET MAUI"
			},
			{
				glyph: mdiAndroid,
				label: "Android"
			},
		],
		urls: [
			{
				icon: mdiGooglePlay,
				label: "Ver en Play Store",
				url: "https://play.google.com/store/apps/details?id=com.anherudev.mauigasolineraapp"
			},
		]
	},
	{
		title: "Sistema interno: Checador de asistencia",
		description: "Aplicacion web de chequeo de asistencia para su habilitacion en el departamento de TI como kiosco interactivo",
		imageurl: "https://cdn.discordapp.com/attachments/1103444305055580311/1207393393928577024/chechador.png?ex=65df7bb9&is=65cd06b9&hm=de37508e63f7bca2801bc5dafe5f35c7b7b6bcb37045936ceeeec97823f1af86&",
		features: [
			{
				glyph: mdiCodeBraces,
				label: ".NET Framework (ASP.NET MVC)"
			},
			{
				glyph: mdiDatabase,
				label: "MySQL"
			},
			{
				glyph: mdiCodeBraces,
				label: "HTML 5"
			},
			{
				glyph: mdiCodeBraces,
				label: "CSS"
			},
			{
				glyph: mdiCodeBraces,
				label: "Javascript"
			},
		],
		urls: [
			{
				icon: mdiGithub,
				label: "Ver codigo en Github",
				url: "https://github.com/anherukun/ControlAccesoChecadorKioskoASP"
			}
		]
	},
	{
		title: "Aplicacion movil: Smart Control BT",
		description: "Aplicacion para la utilizacion de dispositivos embebidos basados en arduino utilizando el estandar de comunicacion de Bluetooth",
		imageurl: "https://cdn.discordapp.com/attachments/1103444305055580311/1207400448898764892/smartcontrol-bt.png?ex=65df824b&is=65cd0d4b&hm=f601375ada4d219f47be4f8f6b85a02cdeb68f718982579f8d53ddffd4489e38&",
		features: [
			{
				glyph: mdiCodeBraces,
				label: ".NET"
			},
			{
				glyph: mdiMicrosoftWindowsClassic,
				label: "Windows Phone"
			},
			{
				glyph: mdiCodeBraces,
				label: "Java"
			},
			{
				glyph: mdiAndroid,
				label: "Android"
			},
		],
		urls: [
			{
				icon: mdiMicrosoftWindows,
				label: "Ver app en Windows Store",
				url: "https://apps.microsoft.com/detail/9WZDNCRD1KZ3?hl=en-US&gl=US"
			},
			{
				icon: mdiGooglePlay,
				label: "Ver app en Play Store",
				url: "https://play.google.com/store/apps/details?id=angelg.smartcontrolbt"
			}
		]
	}
]

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-16">
			<div className="m-x-auto flex flex-col gap-12 lg:max-w-3xl md:max-w-2xl">
				<div className="grid grid-cols-3">
					<div className="flex flex-col col-span-2">
						<h1 className="text-3xl font-semibold">Angel Gerardo Jimenez Reyes</h1>
						<h2 className="font-medium">Ingeniero de Tecnologias de Informacion y Comunicacion</h2>
						<div className="flex flex-row gap-1 text-gray-500 items-center">
							<Icon path={mdiWeb} size={0.75} />
							<p className="text-gray-500 text-md inline">Tuxpan, Ver. MX</p>
						</div>
						<div className="flex flex-row gap-2 my-2 no-print">
							<MinimalLinkButton url='mailto:angel.gerardo.jimenezr@pemex.com?subject=Me interesa tu CV' glyph={mdiEmailOutline} />
							<MinimalLinkButton url='https://github.com/anherukun' glyph={mdiGithub} />
							<MinimalLinkButton url='https://www.linkedin.com/in/ajir96/' glyph={mdiLinkedin} />
							

							<div className='flex gap-2 items-center rounded-lg transition ease-in-out bg-gray-200 hover:bg-gray-500 w-fit h-fit'>
								<button className='font-medium text-gray-500 hover:text-gray-100 text-sm px-2 py-2' onClick={() => window.print()}><Icon path={mdiPrinterOutline} size={1} /></button>
							</div>
						</div>
						<div className="flex flex-row flex-wrap gap-2 my-2 printable text-gray-500 text-xs">
							<a href='mailto:angel.gerardo.jimenezr@pemex.com?subject=Me interesa tu CV'>● angel.gerardo.jimenezr@pemex.com</a>
							<p>● github.com/anherukun</p>
							<p>● linkedin.com/in/ajir96</p>
						</div>
					</div>

					<div className="ml-8 flex justify-end">

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
						))) : ''}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Educacion</h2>
					{EDUCATION ? (
						EDUCATION.map((e, index) => (
							<EducationItem {...e} />
						))) : ''}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Proyectos</h2>
					{PROJECTS ? (
						PROJECTS.map((e, index) => (
							<ProjectEItem {...e} />
						))) : ''}
				</div>
			</div>
		</main>
	);
}
