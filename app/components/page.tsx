import Image from "next/image";
import LinkButton from "@components/LinkButton";
import IconLinkButton from "@components/IconLinkButton";
import Pill from "@components/Pill"
import PillIcon from "@components/PillIcon"

import { mdiCheckboxMultipleMarkedCircleOutline } from "@mdi/js";

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen">
			<div>
				<section className="grid py-24 gap-8 mx-auto lg:max-w-3xl md:max-w-2xl">
					<article className="h-fit">
						<h1 className="mb-2">&lt;LinkButton /&gt;</h1>
						<div className="flex gap-2 ml-8">
							<LinkButton url="#" label="Link button" />
							<LinkButton url="#" label="Link button" />
						</div>
					</article>

					<article className="h-fit">
						<h1 className="mb-2">&lt;IconLinkButton /&gt;</h1>
						<div className="flex gap-2 ml-8">
							<IconLinkButton url="#" label="Link button" glyph={mdiCheckboxMultipleMarkedCircleOutline} />
						</div>
					</article>

					<article className="h-fit">
						<h1 className="mb-2">&lt;Pill /&gt;</h1>
						<div className="flex gap-3 ml-8">
							<Pill label="Pill 1" />
							<Pill label="Pill 2" />
							<Pill label="Pill 3" />
						</div>
					</article>

					<article className="h-fit">
						<h1 className="mb-2">&lt;PillIcon /&gt;</h1>
						<div className="flex gap-3 ml-8">
							<PillIcon label="Pill icon 1" glyph={mdiCheckboxMultipleMarkedCircleOutline}/>
							<PillIcon label="Pill icon 2" glyph={mdiCheckboxMultipleMarkedCircleOutline}/>
							<PillIcon label="Pill icon 3" glyph={mdiCheckboxMultipleMarkedCircleOutline}/>
						</div>
					</article>
				</section>
			</div>
			

			<h1>Hello, Next.js!</h1>
		</div>

	);
}