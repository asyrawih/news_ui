import { Query, useMediaQuery } from "@/hooks/media-query"
import { Container, Spacer, Text, styled } from "@nextui-org/react"
import { useTheme } from '@nextui-org/react'
import { useRouter } from "next/router"
import { ArrowLeft, ArrowUp } from "react-feather"


export const StickyBar = () => {
  const { isDark } = useTheme()
  const router = useRouter()
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
    bottom: "$0",
  })


  const StickyContent = styled("div", {
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-between"
  })

  const StickyIcon = styled("div", {
    display: "flex",
    flexDirection: "row",
  })



  const handleBack = () => {
    router.back()
  }

  const handleToTop = () => {
    window.scroll(0, 0)
  }


  return (
    <>
      {isMobile &&
        <StickyContiner>
          <StickyContent>
            {router.pathname == "/posts/[read]" &&
              <StickyIcon>
                <ArrowLeft onClick={handleBack} />
                <Spacer x={0.12} />
                <Text>Back</Text>
              </StickyIcon>
            }

            <StickyIcon>
              <ArrowUp onClick={handleToTop} />
              <Text>Top</Text>
            </StickyIcon>
          </StickyContent>
        </StickyContiner>
      }
    </>
  )
}
