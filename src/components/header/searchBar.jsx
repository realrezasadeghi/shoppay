import React from "react";
import {RiSearch2Line} from "react-icons/ri";

function SearchBar() {
    return (
        <div className={'w-full bg-slate-800'}>
            <div className="container mx-auto">
                <div className="flex justify-center p-2">
                    <div className="w-3/4 flex rounded transition bg-zinc-100 hover:bg-zinc-200">
                        <input
                            type="text"
                            placeholder="Search..."
                            className={'w-full bg-transparent focus:outline-none px-2'}
                        />
                        <button className={'bg-amber-500 rounded-br rounded-tr flex justify-center items-center h-10 w-10'}>
                            <RiSearch2Line color='#ffffff' size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
