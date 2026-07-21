import { Box, Button, Flex } from "@radix-ui/themes";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hovered: boolean;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
  showMove?: boolean;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onDelete: () => void;
};

export default function BlockItem({ children, hovered, canMoveUp, canMoveDown, showMove, onMoveUp, onMoveDown, onMouseEnter, onMouseLeave, onDelete }: Props) {
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "relative",
        padding: "12px",
        border: hovered ? "2px solid var(--gray-11)" : "1px solid transparent",
        backgroundColor: "white",
      }}
    >
      {hovered && (
        <Flex gap="2" style={{ position: "absolute", top: 8, right: 8 }}>
           {showMove && (
                <>
                    <Button size="1" variant="soft" disabled={!canMoveUp} onClick={onMoveUp}>위로</Button>
                    <Button size="1" variant="soft" disabled={!canMoveDown} onClick={onMoveDown}>아래로</Button>
                </>
           )}
          <Button size="1" variant="soft" color="red" onClick={onDelete}>삭제</Button>
        </Flex>
      )}
      {children}
    </Box>
  );
}