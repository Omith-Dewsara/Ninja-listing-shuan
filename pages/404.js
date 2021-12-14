import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		console.log("Use Effect run")
		setTimeout(() => {
			router.push("/")
		}, 3000)
	}, [])

	return (
		<>
			<Head>
		        <title> Ninja List | 404 </title>
		        <meta name="keywards" content="Ninjas" />
	      	</Head>
			<div className="not-found">
				<h1> Oooops.... </h1>
				<h2> That page cannot be found </h2>
				<p>
					Go back to the 
					<Link href="/">
						<a> Home page </a>
					</Link>
				</p>
			</div>
		</>
	)
}

export default NotFound;