import { Popover } from "radix-ui";
import PageTitle from "@/components/PageTitle";

export default function Animation() {
  return (
    <>
        <PageTitle title="Animation" info="애니메이션은 사용자 인터페이스 요소의 상태 변화를 시각적으로 표현하는 기법입니다. 주로 버튼 클릭, 화면 전환, 로딩 상태 등을 부드럽게 보여주기 위해 사용됩니다." />
        <div className="contentWrapper">
            <Popover.Root>
                <Popover.Trigger className="PopoverTrigger">애니메이션 효과</Popover.Trigger>
                <Popover.Portal>
                {/* 
                    side="right" : 팝오버가 트리거 요소의 오른쪽에 나타나도록 설정합니다.
                    sideOffset={100} : 팝오버와 트리거 요소 사이의 간격을 설정합니다.
                 */}
                <Popover.Content className="PopoverContentAnimation" side="right" sideOffset={40}
                                 onInteractOutside={(e) => { e.preventDefault();}}>   {/* 외부 클릭 이벤트 방지 */}
                    애니메이션 효과를 보여줍니다.
                    <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    </>
  )
}
