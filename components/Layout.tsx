import Head from "next/head"
import { useState } from "react"

interface ILayoutProps {
  title?: string
  container?: boolean
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  title = "",
  container = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Description"
          content="Portfolio website created by Lenard Pratt"
        ></meta>
        <link
          data-n-head="true"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|Material+Icons"
        />
      </Head>

      {/* <Nav isOpen={isOpen} handleOpen={handleOpen} /> */}

      <div className="flex flex-col">
        <div className={`${container ? "container mx-auto m-2" : ""}`}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
