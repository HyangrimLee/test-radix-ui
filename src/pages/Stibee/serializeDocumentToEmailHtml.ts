import { DOMAIN_MAP } from "./constants";
import type { MailBlock } from "./types";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export function serializeDocumentToEmailHtml(blocks: MailBlock[]) {
  const blocksHtml = blocks
    .map((block) => {
      if (block.type === "webView") {
        const url = DOMAIN_MAP[block.domainKey].url;
        return `<p style="margin:0 0 12px 0;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#222;">
          아래 메일을 웹페이지로 보시려면 <a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">[여기를 클릭]</a> 하십시오.
        </p>`;
      }

      if (block.type === "text") {
        return `<p style="margin:0 0 12px 0;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#222;">
          ${escapeHtml(block.text)}
        </p>`;
      }

      if (block.type === "divider") {
        return `<hr style="border:none;border-top:1px solid #d9d9d9;margin:12px 0;" />`;
      }

      if (block.type === "spacer") {
        const h = Math.max(0, block.height);
        return `<div style="height:${h}px;line-height:${h}px;">&nbsp;</div>`;
      }

      if (block.type === "image") {
        const img = `<img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt ?? "")}" style="max-width:100%;height:auto;display:block;" />`;
        return block.href
          ? `<a href="${escapeHtml(block.href)}" target="_blank" rel="noreferrer">${img}</a>`
          : img;
      }

      return "";
    })
    .join("");

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Email</title>
</head>
<body style="margin:0;padding:24px;background:#f3f4f6;">
<div style="max-width:800px;margin:0 auto;background:#fff;padding:24px;">
${blocksHtml || '<p style="font-family:Arial,sans-serif;color:#666;">(empty)</p>'}
</div>
</body>
</html>`;
}