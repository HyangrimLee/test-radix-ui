import PageTitle from "@/components/PageTitle/PageTitle"
import OrderedList from "@/components/OrderedList/OrderedList";

export default function Documents() {
  const items: { content: string; url: string; target: "_blank" | "_self" | "_parent" | "_top" }[] = [
    { content: "Radix", url: "https://www.radix-ui.com/?utm_source=chatgpt.com", target: "_blank" },
    { content: "Radix - Themes", url: "https://www.radix-ui.com/themes/docs/overview/getting-started", target: "_blank" },
    { content: "Radix - Primitives (Headless)", url: "https://www.radix-ui.com/primitives/docs/overview/introduction", target: "_blank" },
    // { content: "Radix - Colors", url: "https://www.radix-ui.com/colors/docs/overview/getting-started", target: "_blank" },
    { content: "Radix - Icons", url: "https://www.radix-ui.com/icons", target: "_blank" },
    { content: "TDS - Toss 디자인 시스템", url: "https://tossmini-docs.toss.im/tds-mobile/", target: "_blank" },
  ];
  return (
    <>
      <PageTitle title="참고문서" />
      <div className="contentWrapper"  style={{ padding: "2rem 4rem"}}>
        <OrderedList listStyle="bullet" items={items} />
      </div>
    </>
  )
}
