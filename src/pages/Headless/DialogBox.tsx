import PageTitle from "@/components/PageTitle"
import { Dialog  } from "radix-ui";


export default function DialogBox() {
  return (
    <>
        <PageTitle title="Dialog" info="사용자에게 정보를 알리거나 결정을 요구하기 위해 현재 화면 위에 띄워지는 대화 상자입니다. 사용자의 주의를 집중시키고 '확인/취소'와 같은 명확한 행동(Action)을 강제하여 작업 흐름을 제어하는 데 주로 사용됩니다." />
        <div className="contentWrapper">
          	<Dialog.Root>
              {/*
                기본 Butoon 렌딩, 요소 커스텀할 경우에는 asChild 속성을 사용하여 렌딩할 수 있습니다. 
                <Dialog.Trigger>내용보기</Dialog.Trigger> 
              */}
              <Dialog.Trigger asChild>
                <div style={{ textDecoration: "underline", cursor: "pointer" }}>내용보기</div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent" 
                                onEscapeKeyDown={(e) => e.preventDefault()}     // ESC키를 눌러도 다이얼로그가 닫히지 않도록 설정
                                onInteractOutside={(e) => e.preventDefault()}>  {/* 다이얼로그 외부를 클릭해도 다이얼로그가 닫히지 않도록 설정 */}
                  <Dialog.Title className="DialogTitle">다이얼로그(Dialog)</Dialog.Title>
                  <Dialog.Description className="DialogDescription">
                    등록 버튼을 클릭하면 나타나는 다이얼로그입니다. 이 다이얼로그는 현재 화면 위에 띄워지며, 사용자가 추가적인 정보를 확인하거나 선택할 수 있도록 도와줍니다.
                  </Dialog.Description>
                  <div className="DialogButtonWrap">
                    <Dialog.Close className="DialogButton danger">취소</Dialog.Close>
                    <Dialog.Close className="DialogButton dark">확인</Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
        </div>
    </>
  )
}
