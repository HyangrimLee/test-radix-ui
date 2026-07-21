import { Box, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import type { MailBlock } from "../types";
import BlockItem from "./BlockItem";
import WebViewBlock from "./blocks/WebViewBlock";

type Props = {
  blocks: MailBlock[];
  onDeleteBlock: (id: string) => void;
};

export default function BlockList({ blocks, onDeleteBlock }: Props) {
  const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null);

  if (blocks.length === 0) {
    return <Text size="2" color="gray">여기에 생성할 메일 내용을 작성해주세요.</Text>;
  }

  return (
    <Flex direction="column" gap="3">
      {blocks.map((block) => (
        <BlockItem
          key={block.id}
          hovered={hoveredBlockId === block.id}
          onMouseEnter={() => setHoveredBlockId(block.id)}
          onMouseLeave={() => setHoveredBlockId(null)}
          onDelete={() => onDeleteBlock(block.id)}
        >
          {block.type === "webView" && <WebViewBlock domainKey={block.domainKey} />}
          {/* {block.type === "text" && <TextBlock text={block.text} />} */}
          {block.type === "divider" && <Box style={{ borderTop: "1px solid var(--gray-7)", height: 1 }} />}
          {block.type === "spacer" && <Box style={{ height: block.height }} />}
          {block.type === "image" && <img src={block.src} alt={block.alt ?? ""} style={{ maxWidth: "100%" }} />}
        </BlockItem>
      ))}
    </Flex>
  );
}