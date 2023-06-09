import { Layout } from "@/components/Layout/layout"
import { Base, BaseData, Posts } from "@/models/news"
import { Col, Container, Image, Spacer, Text, useTheme } from "@nextui-org/react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Head from "next/head"

const ReadPost = ({ post }: { post: Base<BaseData<Posts>> }) => {
  const { isDark } = useTheme()
  return (
    <Layout>
      <Container display="flex">
        {post.data.map((post) => {
          return (
            <Col key={post.id}>
              <Head>
                <title>{post.attributes.title}</title>
                <meta name="description" content={post.attributes.slug} />
                <meta property="og:description"
                  content={post.attributes.content} />
                <meta property="og:image" content={post.attributes.thumb.data.attributes.url} />
              </Head>
              <Image
                src={`${post.attributes.thumb.data.attributes.url}`}
                alt={post.attributes.title}
                width={"100%"}
                objectFit="fill"
                height={450}
              />
              {
                isDark ? (
                  <Text h3 b
                    css={{
                      textGradient: "45deg, $blue600 -20%, $pink600 50%"
                    }}
                  >{post.attributes.title}</Text>
                ) : (
                  <Text h3 b>{post.attributes.title}</Text>
                )
              }
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                dangerouslySetInnerHTML={{ __html: post.attributes.content }}
              >
              </div>
            </Col>
          )
        })}
      </Container>
      <Spacer y={3} />
    </Layout >
  )
}

export default ReadPost


export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { params } = ctx
  const read = params?.read ?? ""
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(baseUrl + `/api/posts?populate=thumb&filters[slug][$eq]=${read}`)
  const post: Promise<Base<Posts>> = await res.json()

  return {
    props: { post }
  }
}
