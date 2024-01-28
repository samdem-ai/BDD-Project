import React from 'react';

export default function Loading() {
  return (
    <main className="mx-auto min-h-screen w-full px-4 pt-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center ">
          <div className="h-10 w-full max-w-4xl animate-pulse bg-zinc-700"></div>
          <div className="flex items-center justify-end gap-3">
            <div className="flex h-10 w-32 animate-pulse items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-lg font-bold"></div>
            <div className="flex h-10 w-32 animate-pulse items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-lg font-bold text-white duration-150 ease-out hover:bg-emerald-800 hover:text-white active:scale-95"></div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          {Array.from(Array(5)).map((item, index) => (
            <div
              key={`${item} ${index}`}
              className=" flex h-7 w-20 animate-pulse cursor-default items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-1 text-base text-zinc-300 duration-150 ease-out hover:bg-zinc-900 hover:text-emerald-400"
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex w-full max-w-3xl flex-col gap-5 text-base">
        {Array.from(Array(3)).map((item, index) => (
          <>
            <div className="h-3 w-full max-w-sm whitespace-pre-line bg-zinc-700"></div>
            <div className="h-5 w-full max-w-xl whitespace-pre-line bg-zinc-700"></div>
            <div className="h-2 w-full max-w-lg whitespace-pre-line bg-zinc-700"></div>
            <div className="h-3 w-full max-w-md whitespace-pre-line bg-zinc-700"></div>
            <div className="h-4 w-full max-w-2xl whitespace-pre-line bg-zinc-700"></div>
          </>
        ))}
      </div>
    </main>
  );
}
