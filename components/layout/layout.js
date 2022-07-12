import MainNavigation from './main-navigation'

function Layout ({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  )
}

export default Layout
