const Pagination = (props)=>{

    const {length, handleClick} = props;    
    const postsPerPage=2;
    const paginationNumbers = [];
    for(let i=1; i <= Math.ceil(length/postsPerPage); i++)
    {
        paginationNumbers.push(i);
    }

    return(
        <div className="pagination">
        {
            paginationNumbers.map(
                (v)=>(<button onClick={()=>handleClick(v)} key={v}>{v}</button> )
            )
        }
        </div>
    )

    


}

export default Pagination