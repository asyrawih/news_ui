
export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type Base<T> = {
  data: Array<T>
  meta: Meta
}

export type BaseData<T> = {
  id: number
  attributes: T
}

export type Model<T> = {
  data: Array<BaseData<T>>
}

export type Category = {
  category: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type Thumb = {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}



export type ThumbModel = {
  data: BaseData<Thumb>
}

export type Posts = {
  title: string
  slug: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  categories?: Model<Category>
  thumb: ThumbModel
}
