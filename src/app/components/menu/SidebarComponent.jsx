const SidebarComponent = () => {
    return (
        // bg-black/90
        <aside className=" w-[200px] space-y-2 px-3 my-4 ">
            <h4 className="text-white">Main</h4>
            <p className="w-full flex items-center h-4 w-10 bg-gray-500 pl-3 text-white rounded-lg px-3 py-4">Overview</p>
            <p className="w-full flex  items-center h-4 w-10 bg-gray-500 pl-3 text-white rounded-lg px-3 py-4">Products</p>
            <p className="w-full flex items-center h-4 w-10 bg-gray-500 pl-3 text-white rounded-lg px-3 py-4">Orders</p>
            <p className="w-full flex items-center h-4 w-10 bg-gray-500 pl-3 text-white rounded-lg px-3 py-4">Customers</p>
            <p className="w-full flex items-center h-4 w-10 bg-gray-500 pl-3 text-white rounded-lg px-3 py-4">Settings</p> 
        </aside>
    )
}

export default SidebarComponent;