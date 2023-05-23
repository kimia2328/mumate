import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h1>signed in</h1>
        <button onClick={signOut}>sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={signIn}>sign in</button>
    </>
  );
}
