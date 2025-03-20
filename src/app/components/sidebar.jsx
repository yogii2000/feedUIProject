// components/Sidebar.js
"use client"
import Link from 'next/link';
import styles from './sidebar.module.css';
import { usePathname } from 'next/navigation';

const Sidebar = ({ isOpensidebar, onClose }) => {
  const path = usePathname()

  const sidebarClass = isOpensidebar ? styles.mobileSidebarOpen : styles.mobileSidebar;

  return (
    <>
      <div className={sidebarClass}>
        <div className="row">
          <div className="col-lg-10 col-9">
            <ul className={styles.list}>
              <li className={path === '/home' ? 'active-link my-4' : 'my-4'}>
                <i className="bi bi-house-door iconbold"></i>
                <Link className="links" href="/home">Home</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : 'my-4'}>
                <i className="bi bi-book"></i>
                <Link className="links" href="/learn">Learn</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-bullseye"></i>
                <Link className="links" href="/blog/hello-world">Practice</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-pencil"></i>
                <Link className="links" href="/blog/hello-world">Mock Tests</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-file-earmark-spreadsheet"></i>
                <Link className="links" href="/blog/hello-world">Read</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-journals"></i>
                <Link className="links" href="/blog/hello-world">Courses</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-clipboard"></i>
                <Link className="links" href="/blog/hello-world">Leaderboard</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-people"></i>
                <Link className="links" href="/blog/hello-world">Groups</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-bar-chart"></i>
                <Link className="links" href="/blog/hello-world">Analytics</Link>
              </li>
              <li className={path === '/about' ? 'active-link my-4' : ' my-4'}>
                <i className="bi bi-bug"></i>
                <Link className="links" href="/blog/hello-world">error tracking</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-2">
            <div className="d-flex justify-content-end">
              {isOpensidebar ? <> <i className="bi bi-x-lg mt-4 px-1 crossbtn cursor-pointer" onClick={onClose}></i> </> : ''}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Sidebar;
