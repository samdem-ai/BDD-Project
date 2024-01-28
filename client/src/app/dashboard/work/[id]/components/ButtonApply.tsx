'use client'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React from 'react'

type ButtonProps = {
  ID: number
}

export function ButtonApply({ ID }: ButtonProps) {
  const router = useRouter()
  const { token } = parseCookies()

  async function handleDeletePost() {
    await fetch(`http://localhost:5000/api/v1/delete?id=${ID}`, {
      method: 'DELETE',
      headers: {
        authorization: `${token}`,
      },
    })
    router.push('/dashboard')
  }

  async function handleApprovedPost() {
    await fetch(`http://localhost:5000/api/v1/approved?id=${ID}`, {
      method: 'PUT',
      headers: {
        authorization: `${token}`,
      },
    })
    router.push('/dashboard')
  }

  return (
    <div className="flex gap-2 items-center justify-start">
      <button
        onClick={handleApprovedPost}
        className="flex gap-2 items-center justify-center bg-blue-500 px-6 py-3 rounded-lg text-lg font-bold text-white hover:bg-blue-800 hover:text-white duration-150 ease-out active:scale-95"
      >
        Approve
      </button>
      <button
        onClick={handleDeletePost}
        className="flex gap-2 items-center justify-center bg-red-500 px-6 py-3 rounded-lg text-lg font-bold text-white hover:bg-red-800 hover:text-white duration-150 ease-out active:scale-95"
      >
        Delete
      </button>
    </div>
  )
}
