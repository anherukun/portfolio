import Image from "next/image";
import LinkButton from "@components/LinkButton";

export default function Page() {
    return (
		<div style={{
			// display: 'flex',
			// flexDirection: 'column'
		}} className="flex flex-col flex-wrap">
			<div>
				<LinkButton url="#" title="Link button"/>
			</div>
			<div>
				<LinkButton url="#" title="Link button"/>
			</div>
		</div>
		
		//<h1>Hello, Next.js!</h1>
    );
  }