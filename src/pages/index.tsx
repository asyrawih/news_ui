import { Layout } from "@/components/Layout/layout";
import { DummyCard } from "@/components/dummy/card";
import { BaseData, Posts } from "@/models/news";
import { Base } from "@/models/news";
import { Container, Grid, Row, Text, Link } from "@nextui-org/react";
import { GetServerSideProps } from "next";
import React from "react";


export default function Home({ posts }: { posts: Base<BaseData<Posts>> }) {
  return (
    <Layout>
      <Headline data={posts.data} />
      <LatestNews data={posts.data} />
    </Layout>
  )
}

type HeadlineProps = {
  data: BaseData<Posts>[]
}
const Headline = ({ data }: HeadlineProps) => {
  return (
    <Container display="flex" justify="flex-start" >
      <Title title="Top News" />
      <Grid.Container gap={2} justify="center" >
        {data.slice(0, 5).map((post, index) => {
          if (index < 3) {
            return (
              <Grid xs={12} md={4} key={post.id}>
                <DummyCard
                  height={340}
                  width={"100%"}
                  isHide={false}
                  imageUrl={`http://localhost:8000${post.attributes.thumb.data.attributes.url}`}
                  title={post.attributes.title}
                />
              </Grid>
            )
          }
          if (index === 3) {
            return (
              <Grid xs={12} md={5} key={post.id}>
                <DummyCard
                  isHide={false}
                  width={"100%"}
                  height={340}
                  imageUrl={`http://localhost:8000${post.attributes.thumb.data.attributes.url}`}
                  title={post.attributes.title}
                />
              </Grid>
            )
          }
          return (
            <Grid xs={12} md={7} key={post.id}>
              <DummyCard
                isHide={false}
                height={340}
                width={"100%"}
                imageUrl={`http://localhost:8000${post.attributes.thumb.data.attributes.url}`}
                title={post.attributes.title}
              />
            </Grid>
          )
        })}
      </Grid.Container>
    </Container>
  )
}


const LatestNews = ({ data }: HeadlineProps) => {
  return (
    <Container display="flex" justify="flex-start" >
      <Title title="Latest News" />
      <Grid.Container gap={2} justify="center" >
        {data.map((post) => {
          return (
            <Grid xs={12} md={4} key={post.id}>
              <Row>
                <DummyCard
                  isHide={true}
                  width={"100%"}
                  height={150}
                  imageUrl={`http://localhost:8000${post.attributes.thumb.data.attributes.url}`}
                  title={post.attributes.title}
                />
                <Text b css={{
                  margin: "10px"
                }}>
                  <Link color={"success"} href={`/posts/${post.attributes.slug}`}>
                    {post.attributes.title} {post.attributes.slug} {post.id}
                  </Link>
                </Text>
              </Row>
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
  const result = await fetch("http://127.0.0.1:8000/api/posts?populate=*&pagination[1]=1&pagination[pageSize]=20")
  const posts: Promise<Base<Posts>> = await result.json()
  return {
    props: { posts }
  }
}
