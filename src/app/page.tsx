import { db } from '@/db'

export default function HomePage() {
  const _ = db.execute('select 1')

  return (
    <div className="container relative">
      <div className="py-8 text-center">Placeholder</div>
    </div>
  )
}
