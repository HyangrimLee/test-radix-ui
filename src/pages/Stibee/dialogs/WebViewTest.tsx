import { Dialog, Button, Flex, RadioGroup, Text } from "@radix-ui/themes";

interface WebViewProps {
  value: string;
  onValueChange: (value: string) => void;
  onConfirm: (value: string) => void;
}

export default function WebView(props : WebViewProps) {
  return (
    <Dialog.Content maxWidth="520px">
      <Dialog.Title>웹에서 보기</Dialog.Title>

      <Dialog.Description size="2" mb="4">
        "아래 메일을 웹페이지로 보시려면 <Text color="blue">[여기를 클릭]</Text>하십시오."<br></br>메일 상단의 <Text color="blue">[여기를 클릭]</Text> 링크에 사용할 웹페이지의 도메인을 설정합니다.
      </Dialog.Description>

      {/* 내용 */}
      <Flex direction="column" gap="3">
        <label>
          <Text size="2" mb="1" weight="bold">도메인</Text>
        </label> 
        <Flex direction="column" gap="2">
            <RadioGroup.Root value={props.value} onValueChange={props.onValueChange}>
              <RadioGroup.Item value="1">킴스온라인 (https://cdn.kimsonline.co.kr)</RadioGroup.Item>
              <RadioGroup.Item value="2">[MM]심포지엄 (https://sympo.kimsmm.kr)</RadioGroup.Item>
              <RadioGroup.Item value="3">[MM]프로모션 (https://promo.kimsmm.kr)</RadioGroup.Item>
              <RadioGroup.Item value="4">KSER (https://upload.endourology.or.kr)</RadioGroup.Item>
            </RadioGroup.Root>
          </Flex>
      </Flex>
      
      <Flex justify="end" gap="3" mt="4">
        <Dialog.Close>
          <Button variant="soft">취소</Button>
        </Dialog.Close>

        <Dialog.Close>
          <Button onClick={() => props.onConfirm(props.value)}>설정</Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
}