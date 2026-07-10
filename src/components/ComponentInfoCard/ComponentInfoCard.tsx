
import { Avatar, Box, Card, Flex, Link, Text } from "@radix-ui/themes";

interface ComponentInfoCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ComponentInfoCard(props: ComponentInfoCardProps) {
    return (
        <Link href={props.href} underline="none">
            <Card size="1">
                <Flex gap="3" align="start">
                <Avatar
                    size="3"
                    radius="full"
                    color="lime"
                    fallback={props.title[0]}
                />

                <Box>
                    <Text as="div" size="2" weight="bold">
                    {props.title}
                    </Text>

                    <Text as="div" size="2" color="gray">
                    {props.description}
                    </Text>
                </Box>
                </Flex>
            </Card>
        </Link>
  );
}
