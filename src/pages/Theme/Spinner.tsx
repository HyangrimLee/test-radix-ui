    
import { useState } from "react";
import { Box, Flex, Spinner, Button } from "@radix-ui/themes";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function SpinnerDemo() {
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);    

  return (
    <>
        <PageTitle title="Spinner" info="웹사이트나 앱에서 데이터를 불러오는 중임을 나타내는 회전하는 로딩 애니메이션입니다." />
        <Box width="100%">
            <Flex width="100%" direction="column" justify="center" align="center" gap="4" py="6">
                <button onClick={() => setLoading(!loading)} style={{ padding: "var(--space-3)", backgroundColor: "var(--accent-6)", borderRadius: "var(--radius-6)", border: "none", cursor: "pointer" }}>
                    {loading ? "Stop Loading" : "Start Loading"}
                </button>
                {loading && <Spinner size="3" />}
            </Flex>
            <Flex width="100%" direction="column" justify="center" align="center" gap="4" py="6">
                <Button onClick={() => {
                    setButtonLoading(!buttonLoading);

                    // 3초 뒤 해제
                    setTimeout(() => {
                        setButtonLoading(false);
                    }, 3000);
                }} 
                loading={buttonLoading}>
                    {buttonLoading ? "Stop Button Loading" : "Start Button Loading"}
                </Button>
            </Flex>
        </Box>
    </>
  )
}
