import { useState } from "react";
import { Checkbox } from "radix-ui";
import PageTitle from "@/components/PageTitle";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  
  return (
    <>
      <PageTitle title="Checkbox" />
      <div className="contentWrapper">
        <div style={{ display: "flex", alignItems: "center" }}>
            {/* required, disabled 속성 사용 가능 */}
        	<Checkbox.Root id="c1" className="CheckboxRoot" defaultChecked
                           onCheckedChange={(c) => {
                                setChecked(c === true);
                                alert(`체크박스가 ${checked ? "선택" : "해제"}되었습니다.`);
                           }}>
                {/* asChild 속성을 사용하면 Checkbox.Root를 다른 요소로 대체할 수 있습니다. 예를 들어, div 요소를 사용하여 Checkbox.Root를 감싸고 스타일링할 수 있습니다. (기본 span) */}
                <Checkbox.Indicator className="CheckboxIndicator" asChild>
                    {/* 체크박스가 선택되었거나 선택 여부가 불확실한 상태일 때 렌더링됩니다. 이 요소를 직접 스타일링하거나, 아이콘을 넣는 래퍼로 사용하거나, 둘 다 사용할 수 있습니다. */}
                    <svg width="26" height="26" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.667 4.58301L6.24967 10.0003L3.33234 7.08301" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Checkbox.Indicator>
                
            </Checkbox.Root>
            <label className="CheckboxLabel" htmlFor="c1">
                Accept terms and conditions.
            </label>
        </div>      
    </div>
    </>
  )
}
