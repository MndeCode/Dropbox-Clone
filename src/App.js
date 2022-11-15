import './App.scss';
import { Bars3Icon, MagnifyingGlassIcon, InformationCircleIcon, BellIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronRightIcon, FolderIcon } from "@heroicons/react/24/solid";

import MenuItem from "./components/menuItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [menuTrigger, setMenuTrigger] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [openTree, setOpenTree] = useState(false);

  const data = [
    {
      name: "IMG_5010.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5011.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5012.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5013.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5014.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5015.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5016.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5017.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5018.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5019.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5020.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5021.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5022.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5023.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5024.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5025.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5026.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5026.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5027.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5028.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5029.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5030.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5031.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5032.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5033.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5034.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5035.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5036.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5037.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5038.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5039.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5040.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5041.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5042.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5043.JPG",
      image_link: "..."
    },
    {
      name: "IMG_5044.JPG",
      image_link: "..."
    },
  ]
  return (
    <div className="app">
      <AnimatePresence>
      <nav>
        <div className="container">
          <div className="menu">
            <button onClick={ () => setMenuTrigger(!menuTrigger) } className={ menuTrigger && "focus" }>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="5" cy="5" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="19" cy="5" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="19" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
                <circle cx="19" cy="19" r="1"></circle>
              </svg>
            </button>
            {
              menuTrigger && (
                <motion.div 
                  className="menu__container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="menu__group">
                    <MenuItem title="Dropbox" subtitle="Store, share, and access files across devices" />
                    <MenuItem title="Sign" subtitle="Get sercure eSignatures for any document" />
                    <MenuItem title="DocSend" subtitle="Send documents securely and track activity" />
                    <MenuItem title="Backup" subtitle="Automatically back up all your devices" />
                  </div>
                  <div className="menu__group">
                    <h2 className="group__title">Explore more</h2>
                    <MenuItem title="Capture" subtitle="Create screen recordings and video messages" />
                    <MenuItem title="Transfer" subtitle="Deliver large files securely to anyone" />
                    <MenuItem title="Paper" subtitle="Draft ideas in collaborative docs" />
                    <MenuItem title="Passwords" subtitle="Sync and store your password across devices" />
                  </div>
                  <div className="menu__group">
                    <MenuItem title="Replay" subtitle="Review videos faster with your team" />
                    <MenuItem title="Invoice" subtitle="Create, send, and manage invoices" />
                  </div>
                  <div className="menu__group">
                    <MenuItem title="App Center" subtitle="Discover and connect apps on Dropbox" />
                  </div>
                </motion.div>
              )
            }
          </div>
          <button onClick={ () => setSideMenu(!sideMenu) }>
            <Bars3Icon />
          </button>
          <div className="search">
            <label htmlFor="search"><MagnifyingGlassIcon /></label>
            <input type="text" placeholder="Search" id="search" />
          </div>
          <button>
            <InformationCircleIcon />
          </button>
          <button>
            <BellIcon />
          </button>
          <div className="avatar">
            <a href="/" >
              <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="user avatar" />
            </a>
          </div>
        </div>
      </nav>
      <main>
        {
          sideMenu &&
          <aside>
            <motion.div 
              className="aside"
              initial={{ translateX: "-100%" }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "-100%" }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <span className="logo"></span>
              <ul>
                <li><a href="/">Home</a></li>
                <li>
                  <div className="root">
                    <button onClick={ () => {setOpenTree(!openTree)}}>
                      {
                        openTree 
                        ?
                        <ChevronDownIcon />
                        :
                        <ChevronRightIcon />
                      }
                    </button>
                    <a href="/">All files</a>
                  </div>
                  {
                    openTree
                    &&
                    (
                      <div className="tree">
                        <FolderIcon />
                        <span>My Fights</span>
                      </div>
                    )
                  }
                </li>
                <li><a href="/">Recents</a></li>
                <li><a href="/">Starred</a></li>
                <li><a href="/">Photos</a></li>
                <li><a href="/">Shared</a></li>
                <li><a href="/">File Requests</a></li>
                <li><a href="/">Deleted files</a></li>
              </ul>
            </motion.div>
            <motion.div 
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                delay: 0.15,
                ease: "easeInOut"
              }}
              onClick={() => {setSideMenu(false)}}
            ></motion.div>
          </aside>
        }
        <div className="container">
          <header>
            <h2>Dropbox</h2>
            <div className="header__buttons">
              <div className="button__set button__set-one">
                <button className="upload">
                  Upload
                  <span>
                    <ChevronDownIcon />
                  </span>
                </button>
                <button>
                  Create
                  <span>
                    <ChevronDownIcon />
                  </span>
                </button>
              </div>
              <span className="divider"></span>
              <div className="button__set button__set-two">
                <button>
                  Organise
                  <span>
                    <ChevronDownIcon />
                  </span>
                </button>
                <button>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <table>
            <thead>
              <th className="checkbox"><span></span></th>
              <th>Name</th>
            </thead>
            <tbody>
              {
                data.map((item, inx) => (
                  <tr key={ inx }>
                    <td className="checkbox"><span></span></td>
                    <td className="data__item">{ item.name }</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </main>
      </AnimatePresence>
    </div>
  );
}

export default App;
