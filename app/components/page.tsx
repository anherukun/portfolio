import Image from "next/image";
import LinkButton from "@components/LinkButton";
import IconLinkButton from "@components/IconLinkButton";
import Pill from "@components/Pill"
import PillIcon from "@components/PillIcon"
import ExperienceItem from "@components/ExperienceItem"
import ProfilePicture from "@components/ProfilePicture"
import ProjectItem from "@components/ProjectItem"

import { mdiAndroid, mdiCheckboxMultipleMarkedCircleOutline, mdiCodeBraces, mdiDatabase, mdiEmail, mdiEmailOutline, mdiFirebase, mdiGithub, mdiGooglePlay, mdiLinkedin, mdiMicrosoft, mdiMicrosoftWindows, mdiMicrosoftWindowsClassic, mdiPrinterOutline, mdiWeb } from "@mdi/js";


const EXPERIENCIE = [
	{
		title: "Seguridad Fisica",
		company: "Petróleos Mexicanos",
		description:[
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
			"Atencion a usuarios finales en el area de soporte tecnico"
		],
		start: "Marzo 2022",
		end: "Septiembre 2022",
		isCurrent: false,
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
]

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen">
			<div>
				<section className="grid py-24 gap-8 mx-auto lg:max-w-3xl md:max-w-2xl">
					<article className="h-fit flex flex-col gap-2">
						<h1 className="mb-2 text-xl bg-gray-100 p-2 rounded-xl">&lt;LinkButton /&gt;</h1>
						<div className="flex gap-2 ml-8">
							<LinkButton url="#" label="Link button" />
							<LinkButton url="#" label="Link button" />
						</div>
					</article>

					<article className="h-fit flex flex-col gap-2">
						<h1 className="mb-2 text-xl bg-gray-100 p-2 rounded-xl">&lt;IconLinkButton /&gt;</h1>
						<div className="flex gap-2 ml-8">
							<IconLinkButton url="#" label="Link button" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
						</div>
					</article>

					<article className="h-fit flex flex-col gap-2">
						<h1 className="mb-2 text-xl bg-gray-100 p-2 rounded-xl">&lt;Pill /&gt;</h1>
						<div className="flex gap-3 ml-8">
							<Pill label="Pill 1" />
							<Pill label="Pill 2" />
							<Pill label="Pill 3" />
						</div>
					</article>

					<article className="h-fit flex flex-col gap-2">
						<h1 className="mb-2 text-xl bg-gray-100 p-2 rounded-xl">&lt;PillIcon /&gt;</h1>
						<div className="flex gap-3 ml-8">
							<PillIcon label="Pill icon 1" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
							<PillIcon label="Pill icon 2" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
							<PillIcon label="Pill icon 3" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
						</div>
					</article>

					<article className="h-fit flex flex-col gap-2">
						<h1 className="mb-2 text-xl bg-gray-100 p-2 rounded-xl">&lt;ExperienceItem /&gt;</h1>
						<div>
							<ExperienceItem {...EXPERIENCIE[0]} />
							<ExperienceItem {...EXPERIENCIE[1]} />
						</div>
					</article>

					<article className="h-fit flex flex-col gap-2">
						<h1 className="mb-2 text-xl bg-gray-100 p-2 rounded-xl">&lt;ProjectItem /&gt;</h1>
						<div>
							<ProjectItem {...PROJECTS[0]} />
							<ProjectItem {...PROJECTS[1]} />
						</div>
					</article>
					
					<article className="h-fit flex flex-col gap-2">
						<h1 className="mb-2 text-xl bg-gray-100 p-2 rounded-xl">&lt;ProfilePicture /&gt;</h1>
						<div className="ml-8">
							<ProfilePicture url='https://i.pinimg.com/originals/63/d2/23/63d22307f5da42cdcac7ecdb3aa69b60.jpg' />
						</div>
					</article>
				</section>
			</div>


			<h1>Hello, Next.js!</h1>
		</div>

	);
}