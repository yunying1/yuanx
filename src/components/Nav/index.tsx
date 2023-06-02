import React from 'react';
import Link from 'next/link';
import GithubIcon from '@/components/Icon/github';
import TwitterIcon from '@/components/Icon/twitter';
import RssIcon from '@/components/Icon/rss';
import ThemeIcon from '@/components/Icon/theme';
import ThemeMode from '@/components/ThemeMode';

interface Props {
  active: string;
  setBackground: Function;
}

const NAV_LIST = [
  { name: 'home', path: '/' },
  { name: 'blog', path: '/blog' },
];

const TEXT_COLOR =
  'text-[#808080] hover:text-black dark:text-[#a1a1a1] dark:hover:!text-white';

const NAV_LINK = [
  {
    url: 'https://twitter.com/imyuanx',
    Icon: TwitterIcon,
  },
  {
    url: 'https://www.github.com/imyuanx',
    Icon: GithubIcon,
  },
  {
    url: `/feed.xml`,
    Icon: RssIcon,
  },
];

function Nav(props: Props) {
  const { active, setBackground } = props;

  /**
   * @desc Change global background
   */
  const toggleBackground = () => {
    setBackground();
  };

  return (
    <header className="flex justify-between items-center fixed box-border bg-[#ffffffb3] w-full h-[60px] pl-[30px] pr-[30px] t-0 l-0 dark:bg-[#141414b3] z-10 backdrop-blur select-none">
      <div></div>
      <nav>
        <ul className="flex list-none pl-0">
          {NAV_LIST.map((navItem, index) => {
            return (
              <li
                className={`${index !== 0 && 'ml-[30px]'}`}
                key={navItem.path}
              >
                <Link
                  href={navItem.path}
                  className={`text-[18px] no-underline capitalize ${TEXT_COLOR} ${
                    active === navItem.name && '!text-black dark:!text-white'
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            );
          })}
          {NAV_LINK.map(({ url, Icon }, index) => (
            <li key={url} className="flex items-center ml-[30px]">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center ${TEXT_COLOR}`}
              >
                <Icon />
              </a>
            </li>
          ))}
          <li className="flex items-center ml-[30px] cursor-pointer">
            <a
              onClick={toggleBackground}
              className={`flex items-center ${TEXT_COLOR}`}
            >
              <ThemeIcon />
            </a>
          </li>
          <li className="flex items-center ml-[30px] cursor-pointer">
            <ThemeMode />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
