import { Flex, Text } from "@radix-ui/themes";
import { DOMAIN_MAP } from "../../constants";
import type { WebViewDomainKey } from "../../types";

export default function WebViewBlock({ domainKey }: { domainKey: WebViewDomainKey }) {
  return (
    <Flex direction="column" gap="2">
      <Text size="2">
        아래 메일을 웹페이지로 보시려면{" "}
        <a href={DOMAIN_MAP[domainKey].url} target="_blank" rel="noreferrer">[여기를 클릭]</a>
        하십시오.
      </Text>
    </Flex>
  );
}