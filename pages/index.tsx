import Head from 'next/head'
import axios from "axios";

export default function Home() {
  const submit = (e: any) => {
    e.preventDefault();
    const axiosconn = axios.create({
      baseURL: "http://localhost:8100/",
    })
    axiosconn.post("server.js", "dummy string").then (
      (res) => {
        console.log(res);
      },
      (rej) => {
        console.log(rej);
      }
    )
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={submit}>
          <input type="text" name="fname" />
          <button type="submit">submit</button>
        </form>
      </main>
    </>
  )
}