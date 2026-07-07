import { Popover } from "radix-ui";
import PageTitle from "@/components/PageTitle";

import "@/styles/headless.css";

export default function PopOver() {
  return (
    <>
      <PageTitle title="Popover" info="사용자가 특정 요소(버튼, 아이콘 등)를 클릭하거나 탭했을 때, 다른 콘텐츠 위에 일시적으로 나타나는 작은 오버레이 창입니다. 주로 부가적인 정보(툴팁)나 메뉴, 알림을 표시하는 데 사용됩니다." />
      <div className="contentWrapper">
        	<Popover.Root>
            <Popover.Trigger className="PopoverTrigger">등록</Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent">
                등록 버튼을 클릭하면 나타나는 팝오버입니다. 이 팝오버는 버튼 위에 일시적으로 나타나며, 사용자가 추가적인 정보를 확인하거나 선택할 수 있도록 도와줍니다.
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
      </div>
    </> 
  )
}
