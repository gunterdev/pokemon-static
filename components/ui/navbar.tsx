import { Text, useTheme } from "@nextui-org/react";
import Link from "next/link";
import { FCWC } from "../../types";

type Props = {};

const Navbar: FCWC<Props> = ({}) => {
  const { theme } = useTheme();
  console.log(theme?.colors);
  return (
    <div
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
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>

      <Text color="white" h3>
        Favoritos
      </Text>
      <Link href={"#"}>
        <a>hola</a>
      </Link>
    </div>
  );
};

export default Navbar;
