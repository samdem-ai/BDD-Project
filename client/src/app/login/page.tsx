'use client'
import { BackpackIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export default function Page() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
// useEffect(() => {}, [])


  return (
    <div className={'mt-8'}>
      <div className={'flex mx-auto rounded-3xl p-10 gap-20 flex-col items-center w-[70%] bg-zinc-900'}>
        <h1 className={'text-4xl font-black'}>Login to JobHuntly</h1>
        <form>
          <input
            className="mb-10 inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inline-flex h-[42px] w-full flex-1 items-center justify-center rounded-[4px] bg-zinc-950/50 px-[10px] text-[15px] leading-none text-zinc-300 shadow-[0_0_0_1px] shadow-zinc-950/50 outline-none placeholder:text-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
            id="title"
            name="title"
            placeholder="Password"
          />
        </form>
        <div className="flex items-center justify-end gap-3">
          <a
            href=""
            className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-start text-lg font-bold text-white duration-150 ease-out hover:bg-emerald-800 hover:text-white active:scale-95"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  )
}