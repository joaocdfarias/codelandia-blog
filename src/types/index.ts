export type DataProps = {
  date: string
  title: string
  content: string
}

export type CardProps = {
  data: DataProps[]
  click: boolean
  setClick: () => void
}
