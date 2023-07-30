import { MdOutlineLoop } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios"


const Table = () => {
    const [users, setUsers] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    const [filtyBy, setFilterBy] = useState('')
    const [searchText, setSearchText] = useState('')

    const handleShowOrhiddenFilter = () => {
        setShowFilter(!showFilter)
    }
    const handleFilter = (text) => {
        setShowFilter(!showFilter)
        setFilterBy(text)
    }
    const showSearchedUser = () => {
        if (searchText) {
            if (!filtyBy) {
                const filteredData = users.filter((user) =>
                    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    user.username.toLowerCase().includes(searchText.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchText.toLowerCase())
                );
                setUsers(filteredData)
            }
            if (filtyBy === "name") {
                const filteredData = users.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()));
                setUsers(filteredData)
            }
            if (filtyBy === "username") {
                const filteredData = users.filter((user) => user.username.toLowerCase().includes(searchText.toLowerCase()));
                setUsers(filteredData)
            }
            if (filtyBy === "email") {
                const filteredData = users.filter((user) => user.email.toLowerCase().includes(searchText.toLowerCase()));
                setUsers(filteredData)
            }
        }
        else{
            axios("https://jsonplaceholder.typicode.com/users")
            .then((data) => {
                setUsers(data?.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((data) => {
                setUsers(data?.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className="mt-28 w-full mr-10">
            <div className=" mx-auto flex flex-wrap items-center gap-5 mb-10 relative">
                <div className="flex flex-wrap items-center gap-5 py-1 px-2 bg-white shadow-sm font-bold text-[#727b8f] rounded-md">
                    <p className="border rounded-md px-3 py-1 gradientColor text-white">Users</p>
                    <p>Campaign</p>
                    <p>Tables</p>
                    <p>List</p>
                </div>
                <p className="text-2xl"><MdOutlineLoop /></p>
                <p className="flex items-center gap-2 text-lg bg-white px-5 py-2 rounded-r-full rounded-l-full text-[#727b8f]"><AiOutlineDownload /> Download</p>
                <div className="sm:ml-40 flex flex-wrap items-center gap-5 text-[#727b8f]">
                    <div>
                        <input onChange={(e) => {
                            setSearchText(e.target.value)
                            showSearchedUser()
                        }} type="text" name="search" id="search" className="py-2 px-3 rounded-md border w-full" placeholder={`${filtyBy ? "Filter By " + filtyBy : "Click Filter Icon For Filter"}`} />
                    </div>
                    <button onClick={showSearchedUser} className="py-1 px-3 rounded-md border bg-white font-bold">Search</button>
                    <p onClick={handleShowOrhiddenFilter} className="text-3xl font-bold text-black"><BsFilter /></p>
                    <div className={`bg-white  shadow-xl rounded-md filterStyle ${showFilter ? "" : "hidden"}`}>
                        <p onClick={() => handleFilter("name")} className="py-1 px-2 hoverGradientColor transition-colors">Search By Name</p>
                        <p onClick={() => handleFilter("username")} className="border-y  p-2 hoverGradientColor transition-colors">Search By Username</p>
                        <p onClick={() => handleFilter("email")} className="py-1  px-2 hoverGradientColor transition-colors">Search By Email</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto pt-4 rounded-xl shadow-xl">
                <div className="overflow-x-auto rounded-xl">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-white text-[#727b8f] tableHeadeing">
                                <th className="text-start py-5  px-3">Name</th>
                                <th className="text-start py-5">Username</th>
                                <th className="text-start py-5">Email</th>
                                <th className="text-start py-5">Website</th>
                            </tr>
                        </thead>
                        <tbody className="rounded-md">
                            {users?.map((user, index) => (
                                <tr key={user?.id} className={`${index % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'} tableRows`}>
                                    <td className="text-start break-all py-2 sm:py-5  px-3">{user?.name}</td>
                                    <td className="text-start break-all py-2 sm:py-5">{user?.username}</td>
                                    <td className="text-start break-all py-2 sm:py-5">{user?.email}</td>
                                    <td className="text-start break-all py-2 sm:py-5">{user?.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Table;