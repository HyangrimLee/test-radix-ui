export type WebViewDomainKey = "1" | "2" | "3" | "4";

export type MailBlock =
  | { id: string; type: "webView"; domainKey: WebViewDomainKey }
  | { id: string; type: "text"; text: string }
  | { id: string; type: "image"; src: string; alt?: string; href?: string }
  | { id: string; type: "spacer"; height: number }
  | { id: string; type: "divider" };