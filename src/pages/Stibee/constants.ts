import type { WebViewDomainKey } from "./types";

export const DOMAIN_MAP: Record<WebViewDomainKey, { label: string; url: string }> = {
  "1": { label: "킴스온라인", url: "https://cdn.kimsonline.co.kr/email/e-dm" },
  "2": { label: "[MM]심포지엄", url: "https://sympo.kimsmm.kr" },
  "3": { label: "[MM]프로모션", url: "https://promo.kimsmm.kr" },
  "4": { label: "KSER", url: "https://upload.endourology.or.kr/mail" },
};