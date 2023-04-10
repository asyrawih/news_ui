import { Navbar, Spacer, Text } from "@nextui-org/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'


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
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();


  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/categories/`
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
        <Link href={"/"}>
          <Text b hideIn="xs">
            CyberCrime Tv
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn={"xs"}>
        {categories?.data.map((item) => {
          return (
            <Navbar.Link key={item.id} id={item.attributes.slug} href="/">{item.attributes.category.toUpperCase()}</Navbar.Link>
          )
        })}
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </Navbar.Content>
      <Navbar.Collapse>
        {categories?.data.map((item) => {
          return (
            <Navbar.CollapseItem key={item.id}>
              <Link href={`/category/${item.attributes.slug}`}>
                <Text>
                  {item.attributes.category.toUpperCase()}
                </Text>
              </Link>
            </Navbar.CollapseItem>
          )
        })}
      </Navbar.Collapse>
    </Navbar>
  )
}
