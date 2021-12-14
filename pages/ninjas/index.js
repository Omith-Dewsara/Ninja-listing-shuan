import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: {
			ninjas: data
		}
	}
}

const Ninjas = ({ ninjas }) => {
	return (
		<>
			<Head>
		        <title> Ninja List | Ninjas </title>
		        <meta name="keywards" content="Ninjas" />
		    </Head>
			<div>
				<h1> All Ninjas </h1>
				{
					ninjas.map(ninja => (
						<div className={styles.single} >
							<Link 
								key={ninja.id}
								href={`/ninjas/${ninja.id}`}
							>
								<a className=""> 
									<h3> { ninja.name } </h3>
								</a>
							</Link>
						</div>
					))
				}
			</div>
		</>
	)
}

export default Ninjas;