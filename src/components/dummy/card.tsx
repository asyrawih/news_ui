import { Card, Col, Link, Text } from "@nextui-org/react"
import React from "react"

type DummyProps = {
  title: string
  imageUrl: string
  height: number
  isHide: boolean
  width: number | string
  slug: string
}

export const NewsCard: React.FC<DummyProps> = (
  {
    imageUrl,
    title,
    height,
    width,
    isHide,
    slug
  }
) => {

  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          {isHide && (
            <Text h4 color="white" hideIn={"xs"}>
            </Text>
          )}
          {!isHide && (
            <Link href={`/posts/${slug}`}>
              <Text h4 color="white">
                {title}
              </Text>
            </Link>
          )}
        </Col>
      </Card.Header>
      <Card.Image
        src={imageUrl}
        objectFit="fill"
        width={width}
        height={height}
        alt="Card image background"
      />
    </Card>
  )
}
