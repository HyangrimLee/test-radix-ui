import { Box, Grid } from "@radix-ui/themes";
import PageTitle from "@/components/PageTitle";
import ComponentInfoCard from "@/components/ComponentInfoCard";

export default function Home() {
  return (
    <>
      <PageTitle title="Theme Home" />
      <Box
        width="100%"
        height="calc(100dvh - 134px)"
        overflow="hidden"
        style={{
          backgroundColor: "var(--accent-2)",
          padding: "var(--space-6)",
        }}
      >
        {items.length > 0 && (
          <Grid columns="4" gap="3" width="auto">
            {items.toSorted((a, b) => a.title.localeCompare(b.title)).map((item, index) => (
              <ComponentInfoCard
                key={index}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}

const items:  { title: string; description: string; href: string; }[] = [
  {
    title: "Spinner",
    description: "웹사이트나 앱에서 데이터를 불러오는 중임을 나타내는 회전하는 로딩 애니메이션입니다.",
    href: "/theme/spinner",
  },
  {
    title: "Avatar",
    description: "사용자의 프로필 사진이나 아바타를 표시하는 컴포넌트입니다.",
    href: "/theme/avatar",
  },
  {
    title: "Kbd",
    description: "키보드 입력을 나타내는 컴포넌트입니다.",
    href: "/theme/kbd",
  },
];
