import Link from "next/link"
import { FaGithub, FaInstagram } from "react-icons/fa"



interface FooterProps {
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24">
      <div className="px-4 lg:px-8">
        <div className="flex items-start justify-between">
          <Link href="/">
        <div className="flex justify-center items-center">
          <h2 className=" text-2xl font-semibold text-primary dark:text-accent-foreground tracking-tight">
            <span className="bg-primary dark:bg-accent p-1.5 rounded-2xl text-accent-foreground">Blog</span> Connected
          </h2>
        </div>
      </Link>
          <ul className="flex list-none p-1.5 md:mt-0 space-x-3 ">
            {socialLinks.map((link, i) => (
              <li key={i}  className="transition-all duration-300 hover:scale-110">
                
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 flex justify-between items-center">
          <nav className="lg:mt-0 ">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-foreground transition-all duration-300 dark:hover:font-semibold  hover:font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className=" ">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-6 text-sm leading-6 text-foreground whitespace-nowrap ">
          <div>{copyright.text}</div>
          {copyright.license && <div>{copyright.license}</div>}
        </div>

      </div>
    </footer>
  )
}





function FooterSection() {
  return (
    <div className="w-full max-w-7xl m-auto p-2 mt-10">
      <Footer
        socialLinks={[
          {
            icon: <FaInstagram className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <FaGithub className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/about-us", label: "About Us" },
          { href: "/categories", label: "Categories" },
          { href: "/authors", label: "Authors" },
          { href: "/search", label: "All Posts" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Alejandro Sandjian",
          license: ". All rights reserved",
        }}
      />
    </div>
  )
}

export { FooterSection }