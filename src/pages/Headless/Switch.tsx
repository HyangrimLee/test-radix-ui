import { Switch } from "radix-ui";
import PageTitle from "@/components/PageTitle";

export default function SwitchDemo() {
  return (
    <>
        <PageTitle title="Switch" info="Switch 컴포넌트는 사용자가 두 가지 상태(켜기/끄기) 중 하나를 선택할 수 있는 토글 스위치입니다. 일반적으로 설정이나 옵션을 켜거나 끄는 데 사용됩니다." />
        <div className="contentWrapper">
            <div style={{ display: "flex", alignItems: "center" }}>
                <label
                        id="airplane-mode-label"
                        htmlFor="airplane-mode"
                        className="SwitchLabel"
                        style={{ paddingRight: 15 }}
                    >
                        비행기 모드
                </label>
                <Switch.Root
                    id="airplane-mode"
                    aria-labelledby="airplane-mode-label"
                    className="SwitchRoot"
                    defaultChecked
                >
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
            </div>
            
        </div>
    </>
  )
}
