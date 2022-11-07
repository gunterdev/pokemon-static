import { Navbar } from "@components/ui";
import Head from "next/head";
import { FCWC } from "../../types";

interface Props {
  title?: string;
}

const Layout: FCWC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Eric Clemente" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title},pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
export default Layout;
