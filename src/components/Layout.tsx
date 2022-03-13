import * as React from "react"

interface ILayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
