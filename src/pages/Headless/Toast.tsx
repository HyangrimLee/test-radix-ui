import { useEffect, useRef, useState } from "react";
import { Toast } from "radix-ui";
import PageTitle from "@/components/PageTitle";

export default function ToastDemo() {
    const [open, setOpen] = useState(false);
	const eventDateRef = useRef(new Date());
	const timerRef = useRef(0);

    useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

  return (
    <>
        <PageTitle title="Toast" info="Toast 컴포넌트는 사용자에게 일시적인 피드백 메시지를 표시하는 데 사용됩니다." />
        <div className="contentWrapper">
            <Toast.Provider swipeDirection="right">
			<button
				className=""
				onClick={() => {
					setOpen(false);
					window.clearTimeout(timerRef.current);
					timerRef.current = window.setTimeout(() => {
                        const now = new Date();
	                    const inOneWeek = now.setDate(now.getDate() + 7);
						eventDateRef.current = new Date(inOneWeek);
						setOpen(true);
					}, 100);
				}}
			>
				Add to calendar
			</button>

			<Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
				<Toast.Title className="ToastTitle">Toast</Toast.Title>
				<Toast.Description>
					내일 7:00 PM에 이벤트가 추가되었습니다.<br></br>캘린더에서 확인하세요.
                    <br></br>
				</Toast.Description>
				<Toast.Action
					className="ToastAction"
					asChild
					altText="일정을 확인하려면 이동"
				>
					<button className="">취소</button>
				</Toast.Action>
			</Toast.Root>
			<Toast.Viewport className="ToastViewport" />
		</Toast.Provider>
        </div>
    </>
  )
}
