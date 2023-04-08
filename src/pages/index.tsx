import { Layout } from "@/components/Layout/layout";
import { DummyCard } from "@/components/dummy/card";
import { Col, Container, Grid, Row, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout>
      <Headline />
      <Videos />
    </Layout>
  )
}

const Videos = () => {
  return (
    <Container display="flex" justify="center" color="Black">
      <Title title="Tranding News" />
      <Grid.Container gap={1} justify="center" direction="row" >
        <Grid xs={12} md={8}>
          <DummyCard imageUrl="https://nextui.org/images/card-example-1.jpeg" />
        </Grid>
        <Grid xs={12} md={4}>
          <DummyCard imageUrl="https://nextui.org/images/card-example-2.jpeg" />
        </Grid>
      </Grid.Container>
    </Container>

  )

}

const Headline = () => {
  return (
    <Container display="flex" justify="flex-start" >
      <Title title="Top News" />
      <Grid.Container gap={2} justify="center" >
        <Grid xs={12} md={4}>
          <DummyCard imageUrl="https://nextui.org/images/card-example-1.jpeg" />
        </Grid>
        <Grid xs={12} md={4}>
          <DummyCard imageUrl="https://nextui.org/images/card-example-2.jpeg" />
        </Grid>
        <Grid xs={12} md={4}>
          <DummyCard imageUrl="https://nextui.org/images/card-example-3.jpeg" />
        </Grid>
        <Grid xs={12} md={5}>
          <DummyCard imageUrl="https://nextui.org/images/card-example-4.jpeg" />
        </Grid>
        <Grid xs={12} md={7}>
          <DummyCard imageUrl="https://nextui.org/images/card-example-5.jpeg" />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

const Title = ({title} : {title : string}) => {
  return (
    <Container display="flex" justify="space-around" css={{
      marginTop: "2rem"
    }}>
      <Row justify="space-between" align="flex-end">
        <Text h2>
          {title}
        </Text>
        <Text>
          See More
        </Text>
      </Row>
    </Container>
  )
}
