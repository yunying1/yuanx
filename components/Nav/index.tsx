import React from 'react';
import Link from 'next/link';

interface Props {
  active: string;
}

const NAV_LIST = [
  { name: 'home', path: '/' },
  { name: 'blog', path: '/blog' },
];

function Nav(props: Props) {
  const { active } = props;
  return (
    <header className="container-nav">
      <div></div>
      <nav>
        <ul>
          {NAV_LIST.map((navItem) => {
            return (
              <li
                className={active === navItem.name ? 'li-active' : ''}
                key={navItem.path}
              >
                <Link href={navItem.path}>{navItem.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;