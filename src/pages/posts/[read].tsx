import { Layout } from "@/components/Layout/layout"
import { Base, BaseData, Posts } from "@/models/news"
import { Col, Container, Image, Text } from "@nextui-org/react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

const ReadPost = ({ post }: { post: Base<BaseData<Posts>> }) => {
  return (
    <Layout>
      <Container display="flex">
        {post.data.map((post) => {
          return (
            <Col key={post.id}>
              <Image
                src={`${post.attributes.thumb.data.attributes.url}`}
                alt={post.attributes.title}
                width={"100%"}
                objectFit="fill"
                height={500}
              />
              <Text h3 b >{post.attributes.title}</Text>
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

  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  const res = await fetch(baseUrl + `/api/posts?populate=thumb&filters[slug][$eq]=${read}`)
  const post: Promise<Base<Posts>> = await res.json()

  return {
    props: { post }
  }
}
