import { remember } from '@epic-web/remember'
import { drizzle } from 'drizzle-orm/connect'

export const db = await drizzle('postgres-js', { connection: 'postgres://postgres:supersecret@localhost:5432/postgres', casing: 'snake_case' })
