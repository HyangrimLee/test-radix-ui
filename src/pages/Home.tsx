import { Button, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <Flex gap="4" justify="center" align="center" height="100vh">
      <Button asChild>
        <Link to="/theme">radix-ui themes</Link>
      </Button>

      <Button asChild variant="soft">
        <Link to="/headless">radix-ui headless</Link>
      </Button>
    </Flex>
  );
}