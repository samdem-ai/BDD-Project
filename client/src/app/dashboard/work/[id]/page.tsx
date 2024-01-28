import { TJobsResponseUnique } from '@/types'
import { BackpackIcon } from '@radix-ui/react-icons'
import { ButtonApply } from './components/ButtonApply'

interface PageProps {
  params: {
    id: string
  }
}

export default async function WorkPage({ params }: PageProps) {
  const response = await fetch(
    `http://localhost:5000/api/v1/jobs?id=${params.id}`,
    {
      cache: 'no-cache',
    },
  )

  const { data } = (await response.json()) as TJobsResponseUnique
  const {
    ID,
    Title,
    Description,
    Company,
    Remote,
    Role,
    Experience,
    Salary,
    Link,
    Location,
  } = data

  return (
    <main className="min-h-screen w-full mx-auto px-4 pt-12">
      <div className="flex flex-col gap-8">
        <ButtonApply ID={ID} />
        <div className="flex items-start lg:items-center justify-between gap-4 lg:flex-row flex-col">
          <h1 className="md:text-5xl text-3xl font-bold">{Title}</h1>
          <div className="flex items-center justify-end gap-3">
            <p className="flex gap-2 items-center justify-center bg-zinc-900 px-6 py-3 rounded-lg text-lg font-bold">
              <BackpackIcon width={24} height={24} /> {Role}
            </p>
            <a
              href={Link}
              className="flex gap-2 items-center justify-center bg-emerald-500 px-6 py-3 rounded-lg text-lg font-bold text-white hover:bg-emerald-800 hover:text-white duration-150 ease-out active:scale-95"
            >
              Apply for Position
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start">
          <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
            Company: {Company}
          </p>
          <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
            Location: {Location}
          </p>
        </div>
      </div>
      <div className="text-base w-full max-w-3xl mt-8">
        <p>{Description}</p>
      </div>
      <div className="mt-8 flex md:flex-row flex-col gap-4 items-start md:items-center justify-start">
        <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
          {Remote ? 'Remote' : 'Presencial'}
        </p>
        <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
          Experience: {Experience}
        </p>
        <p className="cursor-default bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-900 ease-out duration-150 hover:text-emerald-400 px-3 py-1 text-zinc-300 text-base rounded-md">
          Salary: {Salary}
        </p>
      </div>
    </main>
  )
}
