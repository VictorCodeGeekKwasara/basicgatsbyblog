import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby';
import {siteTitle,container,heading,navLinks,navLinkItem,navLinkText} from './layout.module.css'

const Layout = ({pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	console.log(data)
  return (
		<div className={container}>
			<header className={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link className={navLinkText} to='/'>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to='/about' className={navLinkText}>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to='/blog' className={navLinkText}>
							blogs
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
}

export default Layout