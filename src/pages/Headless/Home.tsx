import { Link } from "react-router-dom";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
        <PageTitle title="HeadLess Home" />
        <div className="contentWrapper"  style={{ padding: "2rem 4rem"}}>
          <div className="horizontalWrap" style={{ gap: "1.2rem"}}>
              <ul className="listWrap listLeft">
                <li className="listItem"><Link className="listItemLink" to="/headless/aspect-ratio">Aspect Ratio</Link></li>
                <li className="listItem"><Link className="listItemLink" to="/headless/checkbox">Checkbox</Link></li>
                <li className="listItem"><Link className="listItemLink" to="/headless/dialog">Dialog</Link></li>
                <li className="listItem"><Link className="listItemLink" to="/headless/popover">PopOver</Link></li>
                <li className="listItem"><Link className="listItemLink" to="/headless/radio-group">Radio Group</Link></li>

              </ul>
              <ul className="listWrap listRight">
                <li className="listItem"><Link className="listItemLink" to="/headless/animation">Animation</Link></li>
                <li className="listItem"><Link className="listItemLink" to="/headless/aspect-ratio">Aspect Ratio</Link></li>
              </ul>
          </div>
        </div>
    </>
  )
}
