'use client'
import { CardJobs } from '@/components/CardJobs'
import { GoLogo } from '@/components/GoLogo'
import { TJobsResponse } from '@/types'
import React from 'react'

export default async function Home() {
  const response = await fetch(
    'http://localhost:5000/api/v1/jobsall',
    {
      cache: 'no-store',
      next: {
        revalidate: 60,
      },
    },
  )
  const { data } = (await response.json()) as TJobsResponse
  const Approved = data.filter((job) => job.Approved)


  return (
    <main className="container flex min-h-screen flex-col items-start justify-start gap-12 px-4 py-4">
      <div className="relative flex h-64 w-full items-center justify-between gap-8 rounded-xl sm:h-96">
        <h1 className="max-w-2xl text-7xl font-bold text-emerald-500 max-sm:text-6xl">
          Discover your perfect job opportunity now!
        </h1>
        <div className="hidden xl:flex ">
          <div>
            <GoLogo bg="bg-emerald-600" title="LETS" />
          </div>
          <div className="-ml-12">
            <GoLogo bg="bg-emerald-500" title="GO" />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2"></div>
    </main>
  )
}
