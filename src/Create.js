import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handelSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("Added")
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handelSubmit}>
                <label>Blog title</label>
                    <input type="text" 
                     required
                     value={title}
                     onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Toto">Toto Wolf</option>
                    <option value="Mike">Mike Krack</option>
                    <option value="Andrea">Andrea Stella</option>
                    <option value="Frantz">Frantz Tost</option>
                    <option value="Guiten">Guiten Stainer</option>
                    <option value="Otmar">Otmar Szafnauer</option>
                    <option value="James">James volws </option>
                    <option value="Zack">Zack Brown</option>
                    <option value="Christian">Christian Horner</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;