'use client'

import MinimalLinkButton from "@/components/MinimalLinkButton"
import MinimalButton from "@/components/MinimalButton"
import MediumPillIcon from "@/components/MediumPillIcon"
import LanguageItem from "@/components/LanguageItem"
import HabilitiesItem from "@/components/HabilitiesItem"
import ExperienceItem from "@components/ExperienceItem"
import ProfilePicture from "@components/ProfilePicture"
import ProjectEItem from "@components/ProjectItem"
import EducationItem from "@components/EducationItem"

import Icon from '@mdi/react';

import { mdiAndroid, mdiAndroidStudio, mdiBrush, mdiCodeBlockTags, mdiCodeBraces, mdiCodeBrackets, mdiConsole, mdiCube, mdiCubeOff, mdiCubeOutline, mdiDatabase, mdiDocker, mdiEmail, mdiEmailOutline, mdiFirebase, mdiGit, mdiGithub, mdiGooglePlay, mdiLinkedin, mdiMicrosoft, mdiMicrosoftExcel, mdiMicrosoftOffice, mdiMicrosoftPowerpoint, mdiMicrosoftSharepoint, mdiMicrosoftVisualStudio, mdiMicrosoftVisualStudioCode, mdiMicrosoftWindows, mdiMicrosoftWindowsClassic, mdiMicrosoftWord, mdiPackageVariant, mdiPrinterOutline, mdiTranslate, mdiWeb } from "@mdi/js";

const EXPERIENCIE = [
	{
		title: "Seguridad Fisica",
		company: "Petróleos Mexicanos",
		description: [
			"Vigilancia e inspeccion de instalaciones",
		],
		start: "2021",
		isCurrent: true,
	},
	{
		title: "Becario (Tecnologias de la Informacion)",
		company: "Petróleos Mexicanos",
		description: [
			"Desarrollo de proyecto: Sistema de gestion VISIFLEX para departamento de Recursos Humanos.",
			"Mantenimiento, reparacion y configuracion de equipo institucional.",
			"Atencion a usuarios finales en el area de soporte técnico"
		],
		start: "Marzo 2022",
		end: "Septiembre 2022",
		isCurrent: false,
	},
	{
		title: "Soporte Técnico en TI",
		company: "Petróleos Mexicanos",
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
		title: "Soporte Técnico en TI",
		company: "Petróleos Mexicanos",
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

const HABILITIES = [
	{
		title: 'Programacion',
		habItems: [
			{
				label: "MySQL",
				glyph: mdiDatabase
			},
			{
				label: "Access",
				glyph: mdiDatabase
			},
			{
				label: "Firebase",
				glyph: mdiDatabase
			},
			{
				label: ".NET Framework",
				glyph: mdiPackageVariant
			},
			{
				label: ".NET Core",
				glyph: mdiPackageVariant
			},
			{
				label: "NodeJS",
				glyph: mdiPackageVariant
			},
			{
				label: "C#",
				glyph: mdiCodeBraces
			},
			{
				label: "C++",
				glyph: mdiCodeBraces
			},
			{
				label: "Java",
				glyph: mdiCodeBraces
			},
			{
				label: "JavaScript",
				glyph: mdiCodeBraces
			},
			{
				label: "HTML",
				glyph: mdiCodeBlockTags
			},
			{
				label: "CSS",
				glyph: mdiCodeBlockTags
			},
			{
				label: "Linux Terminal",
				glyph: mdiConsole
			},
			{
				label: "MS PowerShell",
				glyph: mdiConsole
			},
			{
				label: "Git",
				glyph: mdiGit
			},
			{
				label: "Docker",
				glyph: mdiDocker
			},
			{
				label: "Visual Studio",
				glyph: mdiMicrosoftVisualStudio
			},
			{
				label: "Visual Studio Code",
				glyph: mdiMicrosoftVisualStudioCode
			},
			{
				label: "Android Studio",
				glyph: mdiAndroid
			},
		]
	},
	{
		title: 'Ofimatica',
		habItems: [
			{
				label: "MS Office 365",
				glyph: mdiMicrosoftOffice
			},
			{
				label: "MS Word",
				glyph: mdiMicrosoftWord
			},
			{
				label: "MS Excel",
				glyph: mdiMicrosoftExcel
			},
			{
				label: "MS PowerPoint",
				glyph: mdiMicrosoftPowerpoint
			},
			{
				label: "MS SharePoint",
				glyph: mdiMicrosoftSharepoint
			}
		]
	},
	{
		title: 'Diseño',
		habItems: [
			{
				label: "Blender",
				glyph: mdiCubeOutline
			},
			{
				label: "Autodesk Fusion360",
				glyph: mdiCubeOutline
			},
			{
				label: "Autodesk AutoCAD",
				glyph: mdiCubeOutline
			},
			{
				label: "Adobe Ilustrator",
				glyph: mdiBrush
			},
		]
	},
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
		description: "Aplicacion web de chequeo de asistencia para su habilitacion en el departamento de TI como quiosco interactivo",
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

const LANGUAGES = [
	{
		title: "Español",
		level: "Nativo",
	},
	{
		title: "Ingles",
		level: "Intermedio",
	}
]

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-16">
			<div className="m-x-auto flex flex-col gap-12 lg:max-w-3xl md:max-w-2xl">
				<div className="grid grid-cols-3">
					<div className="flex flex-col gap-1 col-span-2">
						<h1 className="text-3xl font-semibold">Angel Gerardo Jimenez Reyes</h1>
						<h2 className="font-medium">Ingeniero de Tecnologias de Información y Comunicación</h2>
						<div className="flex flex-row gap-1 text-gray-500 items-center">
							<Icon path={mdiWeb} size={0.75} />
							<p className="text-gray-500 text-md inline">Tuxpan, Ver. MX</p>
						</div>
						<div className="flex flex-row gap-2 my-2 no-print">
							<MinimalLinkButton url='mailto:angel.g.j.reyes@gmail.com?subject=Me interesa tu CV' glyph={mdiEmailOutline} />
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
						<ProfilePicture url='data:image/jpeg;base64,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' />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Sobre mi</h2>
					<p className="text-pretty text-gray-500">
						+3 años de experiencia en Soporte Tecnico Informático en Petróleos Mexicanos. Continuamente impulso mis conocimientos sobre la informática
						de manera autodidacta aprendiendo tecnologias mas actuales en la industria del desarrollo de software.
					</p>
					<p className="text-pretty text-gray-500">
						Me gusta poner en practica mis conocimientos adquiridos haciendo pequeños proyectos que me puedan representar un reto.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Experiencia laboral</h2>
					{EXPERIENCIE ? (
						EXPERIENCIE.map((e, index) => (
							<ExperienceItem {...e} key={index} />
						))) : ''}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Educacion</h2>
					{EDUCATION ? (
						EDUCATION.map((e, index) => (
							<EducationItem {...e} key={index} />
						))) : ''}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Habilidades - conocimientos</h2>
					<div className="flex flex-col gap-2 flex-wrap">
						{HABILITIES ? (
							HABILITIES.map((e, index) => (
								<HabilitiesItem {...e} key={index} />
							))) : ''}
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Proyectos</h2>
					{PROJECTS ? (
						PROJECTS.map((e, index) => (
							<ProjectEItem {...e} key={index} />
						))) : ''}
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Idiomas</h2>
					<div className="flex flex-row gap-2 flex-wrap">
						{LANGUAGES ? (
							LANGUAGES.map((e, index) => (
								<LanguageItem {...e} key={index} />
							))) : ''}
					</div>
				</div>
			</div>
		</main>
	);
}
