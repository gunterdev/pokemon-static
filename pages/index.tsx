import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout title="Listado de Pokemons">
      <h1>Home Page</h1>
      <Button color="error">Tocame</Button>
    </Layout>
  );
};

export default Home;
