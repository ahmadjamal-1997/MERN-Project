import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UpdateMeal = () => {

    const params = useParams() ;
    const [name, setName] = useState("");
    const [nameMsg, setNameMsg] = useState("");// front end errors
    const [price, setPrice] = useState(0);
    const [priceMsg, setPriceMsg] = useState(""); // front end errors
    const [loaded, setLoaded] = useState(false);

    const [desc, setDesc] = useState("");
    const [descMsg, setDescMsg] = useState("") // front end errors

    const navigate = useNavigate();

    const [error, setError] = useState({});//back end error

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new project
        axios.put('http://localhost:8000/api/meals/' + params.id, {
            name, desc, price
        }, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch((err) => {
                console.log("Error, ", err.response);
                setError(err.response.data.errors);
            });
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/meals/' + params.id)
            .then(res => {
                setName(res.data.name);
                setDesc(res.data.desc);
                setPrice(res.data.price);
                setLoaded(true);
            })
    }, [])
    const handleName = (e) => {
        setError({}); //to delete the back end validation after submit and start the front end validation
        const name = e.target.value
        setName(name)
        if (name.length < 4 && name.length > 0) {
            setNameMsg("Meal name must be 3 characters at least!");
        } else if (name.length === 0) {
            setNameMsg("");
        } else {
            setNameMsg("Looks Perfect!");
        }
    }
    const handlePrice = (e) => {
        setError({}); // to delete the back end validation after submit and start the front end validation
        const price = e.target.value
        setPrice(price)
        if (price.length === 0) {
            setPriceMsg("Price is required");
        } else {
            setPriceMsg("Looks Perfect!");
        }
    }
    const handleDescription = (e) => {
        setError({}); // to delete the back end validation after submit and start the front end validation
        const desc = e.target.value
        setDesc(desc)
        if (desc.length === 0) {
            setDescMsg("Due date is required");
        } else {
            setDescMsg("Looks Perfect!");
        }
    }

    const handleDelete = e => {
        axios.delete('http://localhost:8000/api/meals/' + params.id)
            .then(res=>{
                navigate("/");
            })
    }

    return (
        <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"800px"}}>
        <div className='container'>
            <div className='row justify-content-center p-3'>
                <div className='col-md-7'></div>
                <div className='col-md-5'>
                    <form onSubmit={onSubmitHandler} >
                        <h4 className='my-5'>Edit your meal</h4>
                        <div>
                            {"name" in error && (<div id="nameMsg" className="form-text" style={{ color: 'red' }}>{error.name.message} </div>)}
                            <div id="nameMsg" className="form-text" style={nameMsg === "Looks Perfect!" ? { color: 'green' } : { color: 'red' }}>{nameMsg} </div>
                            <div className="mb-3 form-floating">
                                <input
                                    type="text" className="form-control mt-2" id="name" aria-describedby="nameMsg" placeholder='Meal Name'
                                    onChange={handleName}
                                    value={name}
                                />
                                <label htmlFor="name" >Meal Name:</label>
                            </div>
                        </div>

                        <div>
                            {"price" in error && (<div id="priceMsg" className="form-text" style={{ color: 'red' }}>{error.price.message} </div>)}
                            <div id="priceMsg" className="form-text" style={priceMsg === "Looks Perfect!" ? { color: 'green' } : { color: 'red' }}>{priceMsg} </div>
                            <div className="mb-3 form-floating">
                                <input
                                    type="double" className="form-control mt-2" id="price" aria-describedby="priceMsg" placeholder='Meal Name'
                                    onChange={handlePrice}
                                    value={price}
                                />
                                <label htmlFor="price" >Price:</label>
                            </div>
                        </div>

                        <div>
                            {"desc" in error && (<div id="descMsg" className="form-text" style={{ color: 'red' }}>{error.desc.message} </div>)}
                            <div id="descMsg" className="form-text" style={descMsg === "Looks Perfect!" ? { color: 'green' } : { color: 'red' }}>{descMsg} </div>
                            <div className="mb-3 form-floating">
                                <input
                                    type="text" className="form-control mt-2" id="desc" aria-describedby="descMsg" placeholder='Description'
                                    onChange={handleDescription}
                                    value={desc}
                                />
                                <label htmlFor="desc" >Description:</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        <button onClick={()=> navigate("/")} className="btn btn-primary btn-sm ms-2">Cancel</button>
                        <button onClick={handleDelete} className="btn btn-danger btn-sm ms-2">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UpdateMeal