import { Layout } from "@/components/Layout/layout"
import { Base, BaseData, Posts } from "@/models/news"
import { Card, Col, Container, Image, Row, Text } from "@nextui-org/react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

const ReadPost = ({ post }: { post: Base<BaseData<Posts>> }) => {
  return (
    <Layout>
      <Container display="flex">
        {post.data.map((post) => {
          return (
            <Col key={post.id}>
              <Image
                src={`http://localhost:8000${post.attributes.thumb.data.attributes.url}`}
                alt={post.attributes.title}
                width={"100%"}
                objectFit="fill"
                height={500}
              />
              <Text h1 b >{post.attributes.title}</Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                dangerouslySetInnerHTML={{ __html: post.attributes.content }}
              >
              </div>
            </Col>
          )
        })}
      </Container>
    </Layout>
  )
}

export default ReadPost


export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {

  const { params } = ctx
  const read = params?.read ?? ""

  const res = await fetch(`http://127.0.0.1:8000/api/posts?populate=thumb&filters[slug][$eq]=${read}`)
  const post: Promise<Base<Posts>> = await res.json()

  return {
    props: { post }
  }
}
