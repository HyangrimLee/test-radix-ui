import { Link } from "react-router-dom";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
        <PageTitle title="HeadLess Home" />
        <div className="contentWrapper"  style={{ padding: "2rem 4rem"}}>
          <div className="horizontalWrap" style={{ gap: "1.2rem"}}>
              <ul className="listWrap" style={{ cursor: "pointer"}}>
                <li className="listItem"><Link className="listItemLink" to="/headless/popover">PopOver</Link></li>
              </ul>
              <ul className="listWrap" style={{ cursor: "pointer"}}>
                <li className="listItem"><Link className="listItemLink" to="/headless/animation">Animation</Link></li>
              </ul>
          </div>
        </div>
    </>
  )
}
