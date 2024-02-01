import Image from "next/image";
import LinkButton from "@components/LinkButton";
import IconLinkButton from "@components/IconLinkButton";
import Pill from "@components/Pill"
import PillIcon from "@components/PillIcon"
import ExperienceItem from "@components/ExperienceItem"

import { mdiCheckboxMultipleMarkedCircleOutline } from "@mdi/js";

const EXPERIENCIE = [
	{
		title: "Creador de Contenido − Twitch",
		description:
			"Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
		url: "https://twitch.tv/midudev",
		start: "2021",
		isCurrent: true,
	},
	{
		title: "Principal Frontend Engineer  − Adevinta Spain",
		description:
			"Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
		start: "Septiembre 2022",
		end: "2025",
		isCurrent: false,
	},
]

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen">
			<div>
				<section className="grid py-24 gap-8 mx-auto lg:max-w-3xl md:max-w-2xl">
					<article className="h-fit">
						<h1 className="mb-2 text-xl">&lt;LinkButton /&gt;</h1>
						<div className="flex gap-2 ml-8">
							<LinkButton url="#" label="Link button" />
							<LinkButton url="#" label="Link button" />
						</div>
					</article>

					<article className="h-fit">
						<h1 className="mb-2 text-xl">&lt;IconLinkButton /&gt;</h1>
						<div className="flex gap-2 ml-8">
							<IconLinkButton url="#" label="Link button" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
						</div>
					</article>

					<article className="h-fit">
						<h1 className="mb-2 text-xl">&lt;Pill /&gt;</h1>
						<div className="flex gap-3 ml-8">
							<Pill label="Pill 1" />
							<Pill label="Pill 2" />
							<Pill label="Pill 3" />
						</div>
					</article>

					<article className="h-fit">
						<h1 className="mb-2 text-xl">&lt;PillIcon /&gt;</h1>
						<div className="flex gap-3 ml-8">
							<PillIcon label="Pill icon 1" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
							<PillIcon label="Pill icon 2" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
							<PillIcon label="Pill icon 3" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
						</div>
					</article>

					<article className="h-fit">
						<h1 className="mb-2 text-xl">&lt;ExperienceItem /&gt;</h1>
						<div>
							<ExperienceItem {...EXPERIENCIE[0]} />
							<ExperienceItem {...EXPERIENCIE[1]} />
						</div>
					</article>
				</section>
			</div>


			<h1>Hello, Next.js!</h1>
		</div>

	);
}