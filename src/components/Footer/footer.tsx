import { CSS, Col, Container, Row, Text } from "@nextui-org/react"


const footerStyle: CSS = {
  backgroundColor: "DarkSalmon",
}

const footerColumn: CSS = {
  margin: "20px",
  backgroundColor: "Tan",
  height: "15rem",
}

const TextTypography: CSS = {
  padding: "$8",
}



export const Footer = () => {
  return (
    <Container fluid css={footerStyle}>
      <Row >
        <Col css={footerColumn}>
          <Text css={TextTypography}>Beriklan</Text>
        </Col>
        <Col css={footerColumn}>
          <Text css={TextTypography}>Beriklan</Text>
        </Col>
        <Col css={footerColumn}>
          <Text css={TextTypography}>Beriklan</Text>
        </Col>
      </Row>
    </Container>
  )
}
