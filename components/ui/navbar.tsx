import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FCWC } from "../../types";

interface Props {}

const Navbar: FCWC<Props> = ({}) => {
  const { theme } = useTheme();
  return (
    <nav
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png"
        alt="Icono App"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white" h3>
        Favoritos
      </Text>
      <Link href={"#"}>
        <a>hola</a>
      </Link>
    </nav>
  );
};

export default Navbar;
