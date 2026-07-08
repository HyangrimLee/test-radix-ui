import { AspectRatio } from "radix-ui";
import PageTitle from "@/components/PageTitle";

export default function AspectRatioDemo() {
  return (
    <>
      <PageTitle
        title="AspectRatio"
        info="AspectRatio 컴포넌트는 자식 요소의 가로 세로 비율을 유지하면서 크기를 조정할 수 있도록 도와주는 컴포넌트입니다. 이를 통해 다양한 화면 크기에서도 일관된 비율을 유지할 수 있습니다."
      />
      <div className="contentWrapper">
        {/* 각 요소들의 CSS 정의가 더 중요함. 거의 껍데기 역할 */}
        <div style={{ width: "100%" }}>
            <div className="AspectRatioWrap">
                <AspectRatio.Root ratio={16 / 9}>
                    <img
                        className="AspectRatioImage"
                        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                        alt="Landscape photograph by Tobias Tullius"
                    />
                </AspectRatio.Root>
            </div>
        </div>
      </div>
    </>
  );
}
