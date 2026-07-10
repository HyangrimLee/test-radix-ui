import { Box, Flex, Kbd } from "@radix-ui/themes";
import PageTitle from "@/components/PageTitle";

export default function KbdDemo() {
  return (
    <>
      <PageTitle title="Kbd" info="키보드 입력을 나타내는 컴포넌트입니다." />
      <Box
        width="100%"
        height="calc(100dvh - 134px)"
        overflow="hidden"
        style={{
          backgroundColor: "var(--accent-2)",
          padding: "var(--space-6)",
        }}
      >
        <Flex direction="column" gap="2" align="start">
          <Box>
            <Kbd>Shift + Tab</Kbd>
          </Box>
          <Box>
            <Kbd>Ctrl  + C</Kbd>
          </Box>
          <Box>
            <Kbd>Ctrl  + V</Kbd>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
