'use client'
import { motion } from 'framer-motion'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import DialogButton from './ModalJobs'

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 flex items-center justify-between">
      <Link href="/">
        <h1 className="cursor-pointer relative text-4xl font-bold text-zinc-200">
          JobHunt{' '}
          <motion.span
            initial={{ scale: 0, rotate: 90 }}
            animate={{ rotate: -12, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className="absolute -top-1 -right-10 -rotate-12 font-extrabold text-white text-xl bg-emerald-500 py-2 px-2 rounded-md cursor-pointer"
          >
            LY
          </motion.span>
        </h1>
      </Link>
      <div className="flex gap-3">
        {/*<a*/}
        {/*  className="flex font-bold active:scale-95 ease-out gap-2 items-center justify-center bg-zinc-900 py-3 px-5 hover:bg-zinc-800 duration-150 ease-out rounded-md text-base"*/}
        {/*  href="https://github.com/revogabe"*/}
        {/*  target="_blank"*/}
        {/*  rel="noreferrer"*/}
        {/*>*/}
        {/*  <GitHubLogoIcon width={20} height={20} />*/}
        {/*  Github*/}
        {/*</a>*/}
        <DialogButton />
      </div>
    </header>
  )
}
