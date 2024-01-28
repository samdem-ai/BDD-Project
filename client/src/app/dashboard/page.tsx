import { CardJobs } from '@/components/CardJobs'
import { TJobsResponse } from '@/types'

export default async function Home() {
  const response = await fetch(
    'http://localhost:5000/api/v1/jobsall', {
      cache: 'no-cache',
    },
  )
  const { data } = (await response.json()) as TJobsResponse
  const ListUnapproveds = data.filter((job) => !job.Approved)
  const ListApproveds = data.filter((job) => job.Approved)

  return (
    <main className="flex min-h-screen flex-col gap-12 px-4 items-start justify-start py-4 container">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold text-emerald-500">Pending</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
          {ListUnapproveds.map(
            ({ ID, Title, Description, Role, Company, Remote }) => (
              <CardJobs
                key={ID}
                ID={ID}
                Title={Title}
                Description={Description}
                Role={Role}
                Company={Company}
                Remote={Remote}
                Owner
              />
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold text-emerald-500">Approved</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
          {ListApproveds.map(
            ({ ID, Title, Description, Role, Company, Remote }) => (
              <CardJobs
                key={ID}
                ID={ID}
                Title={Title}
                Description={Description}
                Role={Role}
                Company={Company}
                Remote={Remote}
                Owner
              />
            ),
          )}
        </div>
      </div>
    </main>
  )
}
