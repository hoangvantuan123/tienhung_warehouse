const BoxSplit = () => {
  return (
    <svg
      className="w-4 h-4 opacity-60"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 23H15C17.8003 23 19.2004 23 20.27 22.455C21.2108 21.9757 21.9757 21.2108 22.455 20.27C23 19.2004 23 17.8003 23 15V9C23 6.19974 23 4.79961 22.455 3.73005C21.9757 2.78924 21.2108 2.02433 20.27 1.54497C19.2004 1 17.8003 1 15 1H9M9 23C6.19974 23 4.79961 23 3.73005 22.455C2.78924 21.9757 2.02433 21.2108 1.54497 20.27C1 19.2004 1 17.8003 1 15V9C1 6.19974 1 4.79961 1.54497 3.73005C2.02433 2.78924 2.78924 2.02433 3.73005 1.54497C4.79961 1 6.19974 1 9 1M9 23V1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

const SidebarContent = ({ collapsed, toggleSidebar }) => {
  return (
    <>
      <div
        className=" flex items-end justify-end cursor-pointer"
        onClick={toggleSidebar}
      >
        {collapsed ? <BoxSplit /> : <BoxSplit />}
      </div>
    </>
  )
}

export default SidebarContent
