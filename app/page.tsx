// import './globals.css'
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import homePageLanding from "./homePageLanding.jpg"
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	// const { data: session } = useSession();
	// if (session) {
	//   return (
	//     <>
	//       <h1>signed in</h1>
	//       <button onClick={signOut}>sign out</button>
	//     </>
	//   );
	// }
	return (
		<>
			<div className="flex justify-between px-20 py-5">
				<div>
					MUMATE
				</div>
				<div className="flex justify-between gap-5">
					<Link href='/login' className="bg-blue px-6 py-2 rounded-3xl">
						sign in
					</Link>
					<Link href='#' className="px-5 py-2 border-2 border-blue rounded-3xl">
						sign up
					</Link>
				</div>
			</div>

			<div className="flex items-center justify-center my-20">
				<div>
					<h1 className="text-6xl leading-20 ">
						find your <span >soulmate</span>
						<br></br>
						with your
						<br></br>
						favourite<span className="text-blue"> music</span>
					</h1>
				</div>
				<div className="max-w-3xl">
                              <Image src={homePageLanding} alt="home page landing"/>
				</div>
			</div>
		</>
	);
}

