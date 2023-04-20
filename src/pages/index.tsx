import { Layout } from "@/components/Layout/layout";
import { NewsCard } from "@/components/dummy/card";
import { BaseData, Posts } from "@/models/news";
import { Base } from "@/models/news";
import { Container, Grid, Row, Text, Link } from "@nextui-org/react";
import { GetStaticProps } from "next";
import Head from "next/head";
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
    <>
      <Head>
        <title>Cybercrime News</title>
      </Head>
      <Container
        display="flex" justify="flex-start" >
        <Title title="Top News" />
        <Grid.Container gap={2} justify="center" >
          {data.slice(0, 5).map((post, index) => {
            if (index < 3) {
              return (
                <Grid xs={12} md={4} key={post.id}>
                  <NewsCard
                    height={200}
                    slug={post.attributes.slug}
                    width={"100%"}
                    isHide={false}
                    imageUrl={`${process.env.NEXT_PUBLIC_API_URL + post.attributes.thumb.data.attributes.url}`}
                    title={post.attributes.title}
                  />
                </Grid>
              )
            }
            if (index === 3) {
              return (
                <Grid xs={12} md={5} key={post.id}>
                  <NewsCard
                    slug={post.attributes.slug}
                    isHide={false}
                    width={"100%"}
                    height={340}
                    imageUrl={`${process.env.NEXT_PUBLIC_API_URL + post.attributes.thumb.data.attributes.url}`}
                    title={post.attributes.title}
                  />
                </Grid>
              )
            }
            return (
              <Grid xs={12} md={7} key={post.id}>
                <NewsCard
                  slug={post.attributes.slug}
                  isHide={false}
                  height={340}
                  width={"100%"}
                  imageUrl={`${process.env.NEXT_PUBLIC_API_URL + post.attributes.thumb.data.attributes.url}`}
                  title={post.attributes.title}
                />
              </Grid>
            )
          })}
        </Grid.Container>
      </Container>
    </>
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
                <NewsCard
                  slug={post.attributes.slug}
                  isHide={true}
                  width={"100%"}
                  height={150}
                  imageUrl={`${process.env.NEXT_PUBLIC_API_URL + post.attributes.thumb.data.attributes.url}`}
                  title={post.attributes.title}
                />
                <Text b css={{
                  margin: "10px"
                }}>
                  <Link color={"success"} href={`/posts/${post.attributes.slug}`}>
                    {post.attributes.title}
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
      <Row justify="space-between" align="center">
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


export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*&pagination[1]=1&pagination[pageSize]=20&sort=createdAt:DESC`
  const result = await fetch(url)
  const posts: Promise<Base<BaseData<Posts>>> = await result.json()
  return {
    props: { posts },
    revalidate: 30
  }
}
