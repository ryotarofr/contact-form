import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  return (
    <div className=" h-screen
    box-border  bg-no-repeat 
    bg-cover bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.webp')]
    ">
      <div className="h-full backdrop-blur-[100px] bg-white/60">
        <div className="mx-auto max-w-3xl">
          {children}
        </div>
      </div>
    </div>
  )
}