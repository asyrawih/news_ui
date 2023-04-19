import { Query, useMediaQuery } from "@/hooks/media-query"
import { Container, styled } from "@nextui-org/react"
import { useTheme } from '@nextui-org/react'


export const StickyBar = () => {
  const { isDark } = useTheme()
  const isMobile = useMediaQuery({
    query: Query.sm
  })

  const dark = "rgba(14, 13, 13, 0.5)"
  const light = "rgba(236, 236, 236, 0.5)"

  const StickyContiner = styled(Container, {
    background: isDark ? dark : light,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(5.4px)",
    borderRadius: "3px",
    height: "80px",
    position: "fixed",
    width: "100vw",
    bottom: "$0"
  })

  return (
    <>
      {isMobile &&
        <StickyContiner>
        </StickyContiner>
      }
    </>
  )
}
