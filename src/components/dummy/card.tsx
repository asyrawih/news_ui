import { Card, Col, Text } from "@nextui-org/react"
import React from "react"

type DummyProps = {
  imageUrl: string
}

export const DummyCard: React.FC<DummyProps> = ({ imageUrl }) => {
  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            What to watch
          </Text>
          <Text h4 color="white">
            Stream the Acme event
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
