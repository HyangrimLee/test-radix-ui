import { Flex, Box, Link } from "@radix-ui/themes";

export default function ThemeFooter() {
  return (
    <Box width="100%" height="48px" py="6" px="4" 
         style={{ 
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "var(--accent-3)"
       }}>
      <Flex width="100%" height="100%" direction="row" gap="4" align="center" justify="start">
        <Box py="1" px="3" style={{ backgroundColor: "var(--accent-6)", borderRadius: "var(--radius-6)" }}><Link href="/" highContrast={false} underline="hover" weight="medium">Home</Link></Box>
        <Box py="1" px="3" style={{ backgroundColor: "var(--accent-6)", borderRadius: "var(--radius-6)" }}><Link href="/documents" highContrast={false} underline="hover" weight="medium">Documents</Link></Box>
        <Box py="1" px="3" style={{ backgroundColor: "var(--accent-6)", borderRadius: "var(--radius-6)" }}><Link href="/theme" highContrast={false} underline="hover" weight="medium" >Themes</Link></Box>
        <Box py="1" px="3" style={{ backgroundColor: "var(--accent-6)", borderRadius: "var(--radius-6)" }}><Link href="/headless" highContrast={false} underline="hover" weight="medium">Headless</Link></Box>
		  </Flex>
    </Box>
  )
}
