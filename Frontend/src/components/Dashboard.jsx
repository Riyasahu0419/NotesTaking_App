import {useState, useEffect} from "react"

const Notes = () => {
    const [notes,setNotes] = useState([])  
    useEffect(()=>{
        fetch("https://notes-taking-app-teal.vercel.app/notes", {
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data.notes)
            setNotes([...data.notes])
        }).catch(error=>console.log(error))
    },[])

    const handleDelete = (noteId) => {
        fetch(`https://notes-taking-app-teal.vercel.app/notes/${noteId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }
    return (
        <>
            <h2>Welcome to your Notes Dashboard</h2>
            <div>
                {notes? notes.map((ele)=>{
                    return (
                        <>
                            <h3>Title: {ele.title}</h3>
                            <p>Description: {ele.description}</p>
                            <button>Edit</button>
                            <button onClick={()=>handleDelete(ele._id)}>Delete</button>
                        </>
                    )
                }): <h2>You have no notes</h2>}
            </div>
        </>
    )
}

export {Notes}