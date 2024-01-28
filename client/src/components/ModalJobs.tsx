'use client'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon, PlusCircledIcon } from '@radix-ui/react-icons'
import { TJobsRequest } from '@/types'

const DialogButton = () => {
  const [isPending, setIsPending] = React.useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as unknown as TJobsRequest
    console.log(data)
    await fetch('http://localhost:5000/api/v1/create', {
      method: 'POST',
      body: JSON.stringify({ ...data, remote: !!data.remote }),
    })
    console.log(data.remote)
    setIsPending(true)
  }

  return (
    <Dialog.Root onOpenChange={(open) => open === false && setIsPending(false)}>
      <Dialog.Trigger asChild>
        <button
          className="flex font-bold active:scale-95  gap-2 items-center justify-center bg-zinc-900 py-3 px-5 hover:bg-emerald-500 ease-out duration-150  rounded-md text-base"
          rel="noreferrer"
        >
          <PlusCircledIcon width={20} height={20} />
          Post a Job
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-950/75 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-zinc-900 border border-zinc-800 p-[25px]  focus:outline-none overflow-hidden">
          {isPending ? (
            <>
              <Dialog.Title className="text-zinc-200 font-bold m-0 text-[17px]">
                Your job has been published!
              </Dialog.Title>
              <Dialog.Description className="text-mauve11 mt-[4px] mb-5 text-[15px] leading-normal">
                Your job is under review and will soon be approved successfully!
              </Dialog.Description>
            </>
          ) : (
            <>
              <Dialog.Title className="text-zinc-200 font-bold m-0 text-[17px]">
                Publish your job!
              </Dialog.Title>
              <Dialog.Description className="text-mauve11 mt-[4px] mb-5 text-[15px] leading-normal">
                Describe the job position and publish right away!
              </Dialog.Description>
            </>
          )}

          {!isPending && (
            <form onSubmit={handleSubmit} className="">
              <input
                className="text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="title"
                name="title"
                placeholder="Job Title"
              />

              <textarea
                className="mt-3 p-3 text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[82px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="description"
                name="description"
                placeholder="Description"
              />
              <input
                className="mt-3 text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="role"
                name="role"
                placeholder="Position"
              />
              <input
                className="mt-3 text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="company"
                name="company"
                placeholder="Company"
              />
              <input
                className="mt-3 text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="location"
                name="location"
                placeholder="Location"
              />
              <input
                className="mt-3 text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="experience"
                name="experience"
                placeholder="Required Experience"
              />
              <input
                className="mt-3 text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="salary"
                name="salary"
                placeholder="Salary: (4,20000da)"
              />
              <input
                className="mt-3 text-zinc-300 placeholder:text-zinc-600 shadow-zinc-950/50 bg-zinc-950/50 focus:shadow-emerald-400 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="link"
                name="link"
                placeholder="Job Link"
              />
              <label
                htmlFor=""
                className="bg-zinc-950/50 rounded-md px-4 w-max py-2 mt-3 flex items-center justify-start gap-2 text-zinc-400"
              >
                <input
                  type="checkbox"
                  className="checked:accent-emerald-400 w-4 h-4"
                  id="title"
                  name="remote"
                  placeholder="Job Position"
                />
                Remote?
              </label>
              <div className="mt-[25px] flex justify-end">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white hover:bg-emerald-800 duration-150 ease-out focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Publish
                </button>
              </div>
            </form>
          )}
          <Dialog.Close asChild>
            <button
              className="text-zinc-200 hover:bg-zinc-800 duration-150 ease-out focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogButton
