export type CardProps = {
  date: string
  title: string
  content: string
}

export type SearchContextType = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}
