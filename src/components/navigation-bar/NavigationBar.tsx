import { NavLink } from 'react-router-dom';
import { Home, Projects, Blog } from '../../assets/Icons';
import { NavItemProps, NavListProps } from '../../types/PropTypes';
import './navigation-bar.css';

function NavItem({ link, text, icon, color }: NavItemProps) {
  const Icon = icon;
  return (
    <NavLink to={link}>
      <li title={text}>
        <div className={`nav-icon ${color}`}>
          <Icon />
        </div>
        <div className="nav-text">{text}</div>
      </li>
    </NavLink>
  );
}

function NavList({ items }: NavListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <NavItem
          key={index}
          {...item}
        />
      ))}
      <div className="nav-indicator" />
    </ul>
  );
}

const list: NavItemProps[] = [
  {
    link: '/portfolio/home',
    text: 'Home',
    icon: Home,
    color: 'green'
  },
  {
    link: '/portfolio/projects',
    text: 'Projects',
    icon: Projects,
    color: 'red'
  },
  {
    link: '/portfolio/blog',
    text: 'Blog',
    icon: Blog,
    color: 'yellow'
  }
];

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <NavList items={list} />
    </nav>
  );
}
