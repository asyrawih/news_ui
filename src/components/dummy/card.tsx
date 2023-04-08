import { Card, Col, Text } from "@nextui-org/react"
import React from "react"

type DummyProps = {
  title: string
  imageUrl: string
  desc: string
}

export const DummyCard: React.FC<DummyProps> = ({ imageUrl, title, desc }) => {
  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text h4 color="white">
            {title}
          </Text>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {desc}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={imageUrl}

        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
    </Card>
  )
}
