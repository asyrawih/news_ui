import { Navbar, Spacer, Text } from "@nextui-org/react"
import Link from "next/link"
import { useEffect, useState } from "react"


export type Categories = {
  data: Array<{
    id: number
    attributes: {
      category: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      slug?: string
    }
  }>
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export const CustomNavbar = () => {
  const [categories, setCategories] = useState<Categories | null>(null)
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/categories/`
    const getCategories = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setCategories(data)
    }
    getCategories()
  }, [])

  return (
    <Navbar variant="sticky" maxWidth={"lg"}>
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Spacer y={10} />
        <Text b color="inherit" hideIn="xs">
          CyberCrime Tv
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn={"xs"}>
        {categories?.data.map((item) => {
          return (
            <Navbar.Link key={item.id} id={item.attributes.slug} href="/">{item.attributes.category.toUpperCase()}</Navbar.Link>
          )
        })}
      </Navbar.Content>
      <Navbar.Collapse>
        {categories?.data.map((item) => {
          return (
            <Navbar.CollapseItem key={item.id}>
              <Link
                href={`/category/${item.attributes.slug}`}>
                {item.attributes.category.toUpperCase()}
              </Link>
            </Navbar.CollapseItem>
          )
        })}
      </Navbar.Collapse>
    </Navbar>
  )
}
