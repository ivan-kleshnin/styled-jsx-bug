import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Layout = React.memo(function Layout() {
  console.log("@ Layout")

  return <div>
    test
    <style jsx>{`
      div {
        color: ${getColor()};
      }
    `}</style>
  </div>
})

export default Layout

function getColor() {
  console.log("@ getColor")
  return 'red'
}
