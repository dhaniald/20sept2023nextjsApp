import React from 'react'
import Link from 'next/link'

export default function about() {
  return (
    <>
    <h1>This is my About us page. Click below to go on Home page</h1>
    <Link href="/pages/index.js">Go To Home Page</Link>
    </>
  )
}
