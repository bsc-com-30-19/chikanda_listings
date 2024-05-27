
const Paginagation = ({notifPerPage, totalNotifs, paginate, changenumperpage}) => {
    const pageNumbers = [];
    
    const handleChange = (e) =>{
        changenumperpage(e.target.value)
    }

    for (let i = 1; i <= Math.ceil(totalNotifs/notifPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav className="w-fit mx-auto mt-[20px] " >
            <div className="inline-flex gap-[20px]">
            <ul className="inline-flex ">
                {pageNumbers.map( number=> (<li key={number} className="bg-p_colu bg-opacity-25 hover:bg-slate-400">
                    <button onClick={() => paginate(number)} className="border-[1px] p-[12px]">
                        {number}
                    </button>
                </li>))}
            </ul>
            <select onChange={handleChange} className="hover:bg-slate-400 bg-p_colu bg-opacity-25">
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="100">100</option>
            </select>
            </div>
        </nav>
    )
}

export default Paginagation;