import { Link } from 'gatsby';
import React from 'react';

import profileImg from '../images/profile.jpg';
import { ReturnValue } from '../site-metadata';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ site } : ReturnValue) => {
  const siteMetadata = site?.siteMetadata!!;

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={siteMetadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{siteMetadata.name}</Link>
        </h1>
        <p className={classes.description}>{siteMetadata.description}</p>
        <ul className={classes.list}>
          {siteMetadata.twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${siteMetadata.twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {siteMetadata.github && (
            <li className={classes.item}>
              <a className={classes.link} href={siteMetadata.github}>
                GitHub
              </a>
            </li>
          )}
          {siteMetadata.linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={siteMetadata.linkedin}>
                LinkedIn
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;