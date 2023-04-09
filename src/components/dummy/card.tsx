import { Card, Col, Text } from "@nextui-org/react"
import React from "react"

type DummyProps = {
  title: string
  imageUrl: string
  height: number
  isHide: boolean
  width: number | string
}

export const DummyCard: React.FC<DummyProps> = (
  {
    imageUrl,
    title,
    height,
    width,
    isHide
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
            <Text h4 color="white">
              {title}
            </Text>
          )}
        </Col>
      </Card.Header>
      <Card.Image
        src={imageUrl}
        objectFit="cover"
        width={width}
        height={height}
        alt="Card image background"
      />
    </Card>
  )
}
