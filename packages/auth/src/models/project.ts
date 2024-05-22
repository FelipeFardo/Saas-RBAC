import { z } from 'zod'

export const projectSchema = z.object({
  __typename: z.literal('Project').default('Project'),
  id: z.string(),
  ownderId: z.string(),
})
export type Project = z.infer<typeof projectSchema>