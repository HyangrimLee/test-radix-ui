
import { RadioGroup } from "radix-ui";
import PageTitle from "@/components/PageTitle";

export default function RadioGroupDemo() {
  return (
    <>
        <PageTitle title="RadioGroup" info="RadioGroup 컴포넌트는 사용자가 여러 옵션 중에서 하나를 선택할 수 있도록 하는 라디오 버튼 그룹을 생성하는 데 사용됩니다. 각 라디오 버튼은 RadioGroup.Item으로 정의되며, 사용자는 한 번에 하나의 옵션만 선택할 수 있습니다." />
        <div className="contentWrapper">
            <RadioGroup.Root className="RadioGroupRoot">
                <div style={{ display: "flex", gap: "10px" }}>
                    <RadioGroup.Item value="option1" className="RadioGroupItem" id="r1">
                        <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="RadioGroupLabel" htmlFor="r1">option1</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <RadioGroup.Item value="option2" className="RadioGroupItem" id="r2">
                        <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="RadioGroupLabel" htmlFor="r2">option2</label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <RadioGroup.Item value="option3" className="RadioGroupItem" id="r3">
                        <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="RadioGroupLabel" htmlFor="r3">option3</label>
                </div>
            </RadioGroup.Root>
        </div>
    </>
  )
}
