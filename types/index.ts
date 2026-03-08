export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export interface Skill {
  name: string
  level: string
  category: string
}
