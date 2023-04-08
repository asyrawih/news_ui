import { Layout } from "@/components/Layout/layout";
import { DummyCard } from "@/components/dummy/card";
import { Container, Grid, Row, Text } from "@nextui-org/react";
import { GetServerSideProps } from "next";
import React from "react";

export type News = {
  status: string
  totalResults: number
  articles: Article[]
}

export type Article = {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type Source = {
  id: string
  name: string
}

export default function Home({ data }: { data: News }) {
  return (
    <Layout>
      <Headline articles={data.articles} />
      <TrandingNews articles={data.articles} />
    </Layout>
  )
}

const TrandingNews = ({ articles }: Pick<News, "articles">) => {
  return (
    <Container display="flex" justify="center" color="Black">
      <Title title="Tranding News" />
      <Grid.Container gap={1} justify="center" direction="row" >
        {articles.slice(6, 24).map((item, index) => {
          return (
            <Grid xs={12} md={4} key={index}>
              <DummyCard title={item.title} imageUrl={item.urlToImage} desc={item.description} />
            </Grid>
          )
        })}
      </Grid.Container>
    </Container>

  )

}

const Headline = ({ articles }: Pick<News, "articles">) => {
  return (
    <Container display="flex" justify="flex-start" >
      <Title title="Top News" />
      <Grid.Container gap={2} justify="center" >
        {articles.slice(0, 5).map((item, index) => {
          if (index < 3) {
            return (
              <Grid xs={12} md={4} key={index}>
                <DummyCard imageUrl={item.urlToImage} title={item.title} desc={item.description} />
              </Grid>
            )
          }
          if (index === 3) {
            return (
              <Grid xs={12} md={5} key={index}>
                <DummyCard desc={item.description} imageUrl={item.urlToImage} title={item.title} />
              </Grid>
            )
          }
          return (
            <Grid xs={12} md={7} key={index}>
              <DummyCard imageUrl={item.urlToImage} title={item.title} desc={item.description} />
            </Grid>
          )
        })}
      </Grid.Container>
    </Container>
  )
}

const Title = ({ title }: { title: string }) => {
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


export const getServerSideProps: GetServerSideProps = async (_) => {
  const result = await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-04-07&to=2023-04-07&sortBy=popularity&apiKey=de5c04e1eca847a9a80d5b62ef6b4223")
  const data = await result.json() as News

  return {
    props: { data }
  }
}
