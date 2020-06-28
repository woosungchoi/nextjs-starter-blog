import Link from "next/link";
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Bio from "components/Bio";
import SEO from "components/Seo";
import { Sun, Moon } from 'react-feather'

export default function Layout({ children, secondaryPage, noHead = false }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const onLoadTheme = typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME')
  const [theme, setTheme] = useState(onLoadTheme)
  const [mounted, setMounted] = useState(false)
  const switchTheme = () => {
    const setTo = theme === 'dark' ? 'light' : 'dark'

    setTheme(setTo)
  }

  useEffect(() => {
    if (onLoadTheme) return

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    localStorage.setItem('BLOG_THEME', theme)

    setMounted(true)
  }, [theme])

  if (!mounted) return <div />

  const header = (
    <h1 className="mb-8">
      <Link href="/">
        <a className="text-6xl no-underline">
          블로그.
        </a>
      </Link>
	  <div className="float-right">
		<button className="theme-switch-button" onClick={() => switchTheme()}>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
	  </div>
    </h1>
  );

  return (
    <div className="max-w-screen-md px-4 py-8 mx-auto font-sans">
      <header>{header}</header>
	  <main>{children}</main>
      <footer>
		<div className="py-10">
			© {new Date().getFullYear()}, {" "}
			이 블로그는 <a href="https://nextjs.org/" target="_blank" rel="noopener" rel="noreferrer">Next.js</a> 로 만들어졌습니다. &#128293;
		</div>
      </footer>
    </div>
  );
}
