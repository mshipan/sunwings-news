import { TiHomeOutline } from "react-icons/ti";
import { MdCompost,MdOutlineCamera,MdOutlineKeyboardArrowRight,MdRestorePage  } from "react-icons/md";
import { VscFileMedia } from "react-icons/vsc";
import { LiaCommentSolid } from "react-icons/lia";
import { FaUserTie } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";


const DashboardLayout = () => {

  return (
    <>
      {/* Start: Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
          <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover"/>
          <span className="text-lg font-bold text-white ml-3">Logo</span>
        </a>
        <ul className="mt-4">
          <li className="mb-1 group active">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
            <TiHomeOutline className="ri-home-2-line mr-3 text-lg" />
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
            <MdCompost className="ri-instance-line mr-3 text-lg"/>
              <span className="text-sm">Posts</span>
              <MdOutlineKeyboardArrowRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
              </a>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                <li className="mb-4">
                    <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All Posts</a>
                </li> 
                <li className="mb-4">
                    <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Add New Post</a>
                </li> 
                <li className="mb-4">
                    <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Categories</a>
                </li> 
                <li className="mb-4">
                    <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Tags</a>
                </li> 
              </ul>
          </li>
          <li className="mb-1 group">
              <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                <VscFileMedia className="ri-instance-line mr-3 text-lg"/>
                <span className="text-sm">Media</span>
                <MdOutlineKeyboardArrowRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
              </a>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Library</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Add New Media file</a>
                  </li>
              </ul>
          </li>
          <li className="mb-1 group">
              <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <MdOutlineCamera className="ri-instance-line mr-3 text-lg"/>
                <span className="text-sm">Theme Options</span>
                <MdOutlineKeyboardArrowRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
              </a>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Activation Theme</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Header Options</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Footer Options</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Category Settings</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Layout</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Single Post Options</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Category Post Options</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Style</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Support</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Our More Themes</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Setup Tutorial</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Documentation</a>
                  </li>
                  <li className="mb-4">
                      <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Import / Export</a>
                  </li>
              </ul>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
            <MdRestorePage className="ri-instance-line mr-3 text-lg"/>
              <span className="text-sm">Pages</span>
              <MdOutlineKeyboardArrowRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
            </a>
            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All Page</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Add New Page</a>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
            <LiaCommentSolid className="ri-instance-line mr-3 text-lg"/>
              <span className="text-sm">Comments</span>
              <MdOutlineKeyboardArrowRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
            </a>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
            <FaUserTie className="ri-instance-line mr-3 text-lg"/>
              <span className="text-sm">Users</span>
              <MdOutlineKeyboardArrowRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
            </a>
            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All User</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Add New User</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Profile</a>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
            <CiSettings className="ri-instance-line mr-3 text-lg"/>
              <span className="text-sm">Settings</span>
              <MdOutlineKeyboardArrowRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
            </a>
            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All User</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Add New User</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Profile</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
      {/* End: Sidebar */}

      {/* Star: Topbar */}
      <main class="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <div class="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
          <button type="button" class="text-lg text-gray-600 sidebar-toggle">
            <i class="ri-menu-line"></i>
          </button>
          <ul class="flex items-center text-sm ml-4">
            <li class="mr-2">
              <a href="#" class="text-gray-400 hover:text-gray-600 font-medium">Dashboard</a>
            </li>
            <li class="text-gray-600 mr-2 font-medium">/</li>
            <li class="text-gray-600 mr-2 font-medium">Analytics</li>
          </ul>
          <ul class="ml-auto flex items-center">
              <li class="mr-1 dropdown">
                  <button type="button" class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600">
                      <i class="ri-search-line"></i>
                  </button>
                  <div class="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                      <form action="" class="p-4 border-b border-b-gray-100">
                          <div class="relative w-full">
                              <input type="text" class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500" placeholder="Search..."/>
                              <i class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
                          </div>
                      </form>
                      <div class="mt-3 mb-2">
                          <div class="text-[13px] font-medium text-gray-400 ml-4 mb-2">Recently</div>
                          <ul class="max-h-64 overflow-y-auto">
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                                          <div class="text-[11px] text-gray-400">$345</div>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li class="dropdown">
                  <button type="button" class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600">
                      <i class="ri-notification-3-line"></i>
                  </button>
                  <div class="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                      <div class="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                          <button type="button" data-tab="notification" data-tab-page="notifications" class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active">Notifications</button>
                          <button type="button" data-tab="notification" data-tab-page="messages" class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1">Messages</button>
                      </div>
                      <div class="my-2">
                          <ul class="max-h-64 overflow-y-auto" data-tab-for="notification" data-page="notifications">
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                                          <div class="text-[11px] text-gray-400">from a user</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                                          <div class="text-[11px] text-gray-400">from a user</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                                          <div class="text-[11px] text-gray-400">from a user</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                                          <div class="text-[11px] text-gray-400">from a user</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                                          <div class="text-[11px] text-gray-400">from a user</div>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                          <ul class="max-h-64 overflow-y-auto hidden" data-tab-for="notification" data-page="messages">
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                                          <div class="text-[11px] text-gray-400">Hello there!</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                                          <div class="text-[11px] text-gray-400">Hello there!</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                                          <div class="text-[11px] text-gray-400">Hello there!</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                                          <div class="text-[11px] text-gray-400">Hello there!</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                                      <div class="ml-2">
                                          <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                                          <div class="text-[11px] text-gray-400">Hello there!</div>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li class="dropdown ml-3">
                  <button type="button" class="dropdown-toggle flex items-center">
                      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"/>
                  </button>
                  <ul class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                          <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                      </li>
                      <li>
                          <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                      </li>
                  </ul>
              </li>
          </ul>
        </div>
      </main>
      {/* End: Topbar */}

    </>
  );
};

export default DashboardLayout;