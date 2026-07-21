import { useState } from "react";
import { Box, Flex, Grid, Text, IconButton, Button, Dialog } from "@radix-ui/themes";
import { CaretLeftIcon, DownloadIcon, EraserIcon, GlobeIcon, ImageIcon, DividerHorizontalIcon, ButtonIcon, ViewVerticalIcon, TextIcon, PaddingIcon, TableIcon } from "@radix-ui/react-icons";
import WebView from "./dialogs/WebViewTest";

type WebViewDomainKey = "1" | "2" | "3" | "4";

type MailBlock =
  | { id: string; type: "webView"; domainKey: WebViewDomainKey }
  | { id: string; type: "text"; text: string }
  | { id: string; type: "image"; src: string; alt?: string; href?: string }
  | { id: string; type: "spacer"; height: number }
  | { id: string; type: "divider" };

export default function Editor() {
    

const DOMAIN_MAP: Record<WebViewDomainKey, { label: string; url: string }> = {
  "1": { label: "킴스온라인", url: "https://cdn.kimsonline.co.kr" },
  "2": { label: "[MM]심포지엄", url: "https://sympo.kimsmm.kr" },
  "3": { label: "[MM]프로모션", url: "https://promo.kimsmm.kr" },
  "4": { label: "KSER", url: "https://upload.endourology.or.kr" },
};

const [mailBlocks, setMailBlocks] = useState<MailBlock[]>([]);
const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null);





  const [webViewValue, setWebViewValue] = useState("1");

  // 핸들러-웹에서보기
  const handleWebView = (value: string) => {
    setWebViewValue(value);
    // 여기에서 선택된 값을 서버에 저장하는 로직을 추가할 수 있습니다.

    // alert(`선택된 값: ${value}`);
     // 맨 위에 추가
      const domainKey = value as WebViewDomainKey;
    setMailBlocks((prev) => [
        { id: crypto.randomUUID(), type: "webView", domainKey },
        ...prev,
    ]);

  };

  // 핸들러-블록 삭제
  const handleDeleteBlock = (id: string) => {
    setMailBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  // 핸들러-블록 순서 변경(up)
  const handleMoveUp = (id: string) => {
    setMailBlocks((prev) => {
        const idx = prev.findIndex((b) => b.id === id);
        if (idx <= 0) return prev;
        const next = [...prev];
        const temp = next[idx - 1];
        next[idx - 1] = next[idx];
        next[idx] = temp;
        return next;
    });
    };
  
  // 핸들러-블록 순서 변경(down)
  const handleMoveDown = (id: string) => {
    setMailBlocks((prev) => {
        const idx = prev.findIndex((b) => b.id === id);
        if (idx === -1 || idx >= prev.length - 1) return prev;
        const next = [...prev];
        const temp = next[idx + 1];
        next[idx + 1] = next[idx];
        next[idx] = temp;
        return next;
    });
  };

  // 핸들러-저장(임시)
  const handleSaveClick = () => {
    const html = serializeDocumentToEmailHtml();

    console.log("[Email HTML]");
    console.log(html);

    alert("메일 콘텐츠 HTML을 콘솔에 출력했습니다. 개발자 도구 Console을 확인하세요.");
  };

  // 임시
  const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const serializeDocumentToEmailHtml = () => {
  const blocksHtml = mailBlocks
    .map((block) => {
      if (block.type === "webView") {
        const url = DOMAIN_MAP[block.domainKey].url;
        return [
          '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">',
          "<tr><td style=\"font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#222;padding:0 0 12px 0;\">",
          '아래 메일을 웹페이지로 보시려면 <a href="',
          escapeHtml(url),
          '" target="_blank" rel="noreferrer" style="color:#1d4ed8;text-decoration:underline;">[여기를 클릭]</a> 하십시오.',
          "</td></tr></table>",
        ].join("");
      }

      if (block.type === "text") {
        return [
          '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">',
          "<tr><td style=\"font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#222;padding:0 0 12px 0;\">",
          escapeHtml(block.text),
          "</td></tr></table>",
        ].join("");
      }

      if (block.type === "divider") {
        return [
          '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">',
          '<tr><td style="padding:12px 0;"><div style="height:1px;background:#d9d9d9;line-height:1px;font-size:0;">&nbsp;</div></td></tr>',
          "</table>",
        ].join("");
      }

      if (block.type === "spacer") {
        const h = Math.max(0, block.height);
        return [
          '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">',
          '<tr><td style="height:',
          String(h),
          "px;line-height:",
          String(h),
          'px;font-size:0;">&nbsp;</td></tr>',
          "</table>",
        ].join("");
      }

      if (block.type === "image") {
        const img = [
          '<img src="',
          escapeHtml(block.src),
          '" alt="',
          escapeHtml(block.alt ?? ""),
          '" style="display:block;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;" />',
        ].join("");

        const content = block.href
          ? ['<a href="', escapeHtml(block.href), '" target="_blank" rel="noreferrer">', img, "</a>"].join("")
          : img;

        return [
          '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">',
          '<tr><td style="padding:0 0 12px 0;">',
          content,
          "</td></tr></table>",
        ].join("");
      }

      return "";
    })
    .join("");

  return [
    "<!doctype html>",
    '<html lang="ko">',
    "<head>",
    '<meta charset="UTF-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    "<title>Email</title>",
    "</head>",
    '<body style="margin:0;padding:0;background:#f3f4f6;">',
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f4f6;border-collapse:collapse;">',
    "<tr><td align=\"center\" style=\"padding:24px;\">",
    '<table role="presentation" width="800" cellpadding="0" cellspacing="0" border="0" style="width:800px;max-width:800px;background:#ffffff;border-collapse:collapse;">',
    "<tr><td style=\"padding:24px;\">",
    blocksHtml || '<p style="font-family:Arial,sans-serif;font-size:14px;color:#666;">(empty)</p>',
    "</td></tr></table>",
    "</td></tr></table>",
    "</body></html>",
  ].join("");
};

  return (
    <>
        <Flex direction="column" height="100dvh" justify="start" align="center" overflow="hidden" style={{ backgroundColor: "var(--gray-1)" }}
              >
            <Box height="60px" width="100%">
                <Grid columns="0.35fr 10fr 1fr" height="100%" style={{ borderBottom: "1px solid var(--gray-5)" }}>
                    <Flex
                        height="100%"
                        justify="start"
                        align="center"
                        style={{ padding:"0 1rem",
                             backgroundColor: "var(--gray-12)" }}
                    >
                        <IconButton
                            variant="ghost"
                            radius="full"
                            style={{ color: "var(--gray-1)" }}
                            onClick={() => { location.href = "/" }}
                        >
                            <CaretLeftIcon width={24} height={24} />
                        </IconButton>
                    </Flex>
                    <Flex
                        height="100%"
                        justify="start"
                        align="center"
                        style={{ paddingLeft:"1rem", backgroundColor: "" }}
                    > 
                        <Text weight="bold">이메일 HTML 생성</Text>
                    </Flex>
                    <Flex
                        height="100%"
                        justify="end"
                        align="center"
                        gap="2"
                        style={{ paddingRight:"1rem", backgroundColor: "" }}
                    > 
                        <Button size="3" color="gray" variant="solid">
                            <EraserIcon width={16} height={16} />초기화
                        </Button>
                        <Button size="3" variant="solid" onClick={handleSaveClick}>
                            <DownloadIcon width={16} height={16} />저장하기(복사/파일)
                        </Button>
                    </Flex>
                </Grid>
            </Box>
            <Box width="100%" flexGrow="1" minHeight="0">
                <Grid columns="3fr 1fr" height="100%" width="auto" style={{ minHeight: 0 }}>
                    <Box style={{ borderRight: "1px solid var(--gray-5)", display: "flex", flexDirection: "column", minHeight: 0 }} >
                        {/* 상단 박스 */}
                        <Box p="4" width="100%" style={{ borderBottom: "1px solid var(--gray-5)" }}>
                            여기에 센터 버튼 넣을 예정 
                        </Box>
                        {/* 콘텐츠  */}
                        <Box style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <Box
                                width="100%"
                                style={{
                                    flex: "1 1 0",
                                    minHeight: 0,
                                    overflowY: "auto",
                                }}
                            >
                                <Flex width="100%" direction="column" justify="start" align="center" py="9">
                                    <Box width="800px" minHeight="652px" className="herecontent" style={{ border: "1px dashed var(--gray-8)", backgroundColor: "var(--gray-3)" }}>

                                        {mailBlocks.length === 0 ? (
                                            <Text size="2" color="gray">
                                                {/* 여기에 생성할 메일 내용을 작성해주세요. - 문구 수정 */}
                                                여기에 생성할 메일 내용을 작성해주세요.
                                            </Text>
                                        ) : (
                                                <Flex direction="column" gap="3">
                                                    {mailBlocks.map((block, index) => {
                                                    const isHovered = hoveredBlockId === block.id;

                                                    return (
                                                        <Box
                                                        key={block.id}
                                                        onMouseEnter={() => setHoveredBlockId(block.id)}
                                                        onMouseLeave={() => setHoveredBlockId(null)}
                                                        style={{
                                                            position: "relative",
                                                            padding: "12px",
                                                            // borderRadius: "10px",
                                                            border: isHovered ? "2px solid var(--gray-11)" : "",
                                                            backgroundColor: "white",
                                                        }}
                                                        >
                                                        {isHovered && (
                                                            <Flex gap="2" style={{ position: "absolute", top: 8, right: 8 }}>
                                                            {/* <Button
                                                                size="1"
                                                                variant="soft"
                                                                color="gray"
                                                                disabled={index === 0}
                                                                onClick={() => handleMoveUp(block.id)}
                                                            >
                                                                위로
                                                            </Button>
                                                            <Button
                                                                size="1"
                                                                variant="soft"
                                                                color="gray"
                                                                disabled={index === mailBlocks.length - 1}
                                                                onClick={() => handleMoveDown(block.id)}
                                                            >
                                                                아래로
                                                            </Button> */}
                                                            <Button
                                                                size="1"
                                                                variant="soft"
                                                                color="red"
                                                                onClick={() => handleDeleteBlock(block.id)}
                                                            >
                                                                삭제
                                                            </Button>
                                                            </Flex>
                                                        )}

                                                        {block.type === "webView" && (
                                                            <Flex direction="column" gap="2">
                                                            <Text size="2">
                                                                "아래 메일을 웹페이지로 보시려면{" "}
                                                                <a
                                                                href={DOMAIN_MAP[block.domainKey].url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                >
                                                                [여기를 클릭]
                                                                </a>
                                                                하십시오."
                                                            </Text>
                                                            {/* <Text size="1" color="gray">
                                                                도메인: {DOMAIN_MAP[block.domainKey].label}
                                                            </Text> */}
                                                            </Flex>
                                                        )}

                                                        {block.type === "text" && <Text>{block.text}</Text>}
                                                        {block.type === "divider" && (
                                                            <Box style={{ borderTop: "1px solid var(--gray-7)", height: 1 }} />
                                                        )}
                                                        {block.type === "spacer" && <Box style={{ height: block.height }} />}
                                                        {block.type === "image" && (
                                                            <img src={block.src} alt={block.alt ?? ""} style={{ maxWidth: "100%" }} />
                                                        )}
                                                        </Box>
                                                    );
                                                    })}
                                                </Flex>
                                        )}





                                    </Box>
                                </Flex>
                                
                            </Box>
                        </Box>
                    </Box>
                    <Box p="6" width="100%" style={{ }}>
                        <Box width="100%" style={{ marginBottom: "0.5rem" }}>
                            <Text weight="bold" size="3">드래그 & 드롭</Text>
                        </Box>
                        {/* 드래그 & 드롭 */}
                        <Flex width="100%" direction="row" justify="start" align="start" gap="4">
                            <Flex width="100%" direction="row" justify="start" align="start" gap="4">
                                <Grid width="100%" columns="1fr 1fr" gap="4">
                                    <Box width="100%" style={{ border: "1px solid var(--gray-5)", borderRadius: "var(--radius-3)", padding: "0.5rem" }}>
                                        <Flex direction="column" justify="center" align="center">
                                            <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                                <DividerHorizontalIcon width={18} height={18} />
                                            </Box>
                                            <Text size="2" style={{ color: "var(--gray-11)"}}>구분선</Text>
                                        </Flex>
                                    </Box>
                                     <Box width="100%" style={{ border: "1px solid var(--gray-5)", borderRadius: "var(--radius-3)", padding: "0.5rem" }}>
                                        <Flex direction="column" justify="center" align="center">
                                            <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                                <PaddingIcon width={18} height={18} />
                                            </Box>
                                            <Text size="2" style={{ color: "var(--gray-11)"}}>공백</Text>
                                        </Flex>
                                    </Box>
                                </Grid>    
                            </Flex>
                        </Flex>
                        {/* 다이얼로그 */}
                        <Box width="100%" style={{ borderTop: "1px solid var(--gray-5)", marginTop: "2rem", marginBottom: "0.5rem", paddingTop: "2rem" }}>
                            <Text weight="bold" size="3">다이얼로그 - 추가 액션</Text>
                        </Box>
                        <Flex width="100%" direction="row" justify="start" align="start" gap="4">
                            <Flex width="100%" direction="row" justify="start" align="start" gap="4">
                                <Grid width="100%" columns="1fr 1fr" gap="4">
                                     <Box width="100%" style={{ border: "1px solid var(--gray-5)", borderRadius: "var(--radius-3)", padding: "0.5rem" }}>
                                        <Flex direction="column" justify="center" align="center">
                                            <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                                <ImageIcon width={18} height={18} />
                                            </Box>
                                            <Text size="2" style={{ color: "var(--gray-11)"}}>이미지 - 링크 정보 / 옵션 삽입</Text>
                                        </Flex>
                                    </Box> 
                                    <Box width="100%" style={{ border: "1px solid var(--gray-5)", borderRadius: "var(--radius-3)", padding: "0.5rem" }}>
                                        <Flex direction="column" justify="center" align="center">
                                            <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                                <TextIcon width={18} height={18} />
                                            </Box>
                                            <Text size="2" style={{ color: "var(--gray-11)"}}>텍스트 - 글꼴 / 색상 / 크기 / 굵기</Text>
                                        </Flex>
                                    </Box>
                                    <Box width="100%" style={{ border: "1px solid var(--gray-5)", borderRadius: "var(--radius-3)", padding: "0.5rem" }}>
                                        <Flex direction="column" justify="center" align="center">
                                            <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                                <ButtonIcon width={18} height={18} />
                                            </Box>
                                            <Text size="2" style={{ color: "var(--gray-11)"}}>버튼 - 모서리 효과 / 배경색 / 글자색 / 크기</Text>
                                        </Flex>
                                    </Box>
                                    <Box width="100%" style={{ border: "1px solid var(--gray-5)", borderRadius: "var(--radius-3)", padding: "0.5rem" }}>
                                        <Flex direction="column" justify="center" align="center">
                                            <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                                <ViewVerticalIcon width={18} height={18} />
                                            </Box>
                                            <Text size="2" style={{ color: "var(--gray-11)"}}>2단 - 텍스트 / 이미지(링크) / 옵션 삽입</Text>
                                        </Flex>
                                    </Box>
                                    <Box width="100%" style={{ border: "1px solid var(--gray-5)", borderRadius: "var(--radius-3)", padding: "0.5rem" }}>
                                        <Flex direction="column" justify="center" align="center">
                                            <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                                <TableIcon width={18} height={18} />
                                            </Box>
                                            <Text size="2" style={{ color: "var(--gray-11)"}}>표 - 행열 / 표 헤더 유무 / 헤더 배경색 / 글자색 / 굵기</Text>
                                        </Flex>
                                    </Box>
                                    {/* <Flex direction="column" justify="center" align="center">
                                        <Box p="2" style={{ width: "100%", textAlign: "center", color:"var(--gray-9)" }}>
                                            <GlobeIcon width={18} height={18} />
                                        </Box>
                                        <Text size="2" style={{ color: "var(--gray-11)"}}>웹에서 보기 </Text>
                                    </Flex> */}
                                    <Dialog.Root>
                                        <Dialog.Trigger>
                                           <Button
                                                color="gray" variant="surface"
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                    padding: "0.5rem",
                                                }}
                                            >
                                                <Flex direction="column" justify="center" align="center">
                                                    <Box
                                                    p="2"
                                                    style={{
                                                        width: "100%",
                                                        textAlign: "center",
                                                        color: "var(--gray-9)",
                                                    }}
                                                    >
                                                        <GlobeIcon width={18} height={18} />
                                                    </Box>

                                                    <Text size="2" style={{ color: "var(--gray-11)" }}>
                                                    웹에서 보기
                                                    </Text>
                                                </Flex>
                                            </Button>
                                        </Dialog.Trigger>
                                        <WebView
                                            value={webViewValue}
                                            onValueChange={setWebViewValue}
                                            onConfirm={handleWebView}
                                        />
                                    </Dialog.Root>
                                </Grid>
                            </Flex>
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </Flex>
        
    
    </>
  )
}
