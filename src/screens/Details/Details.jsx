import { useState, useEffect } from 'react';
import { getCodingJob, deleteCodingJob } from "../services/codingjobs.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../styles/Detail.css'


// what is the route for this



function Details({state, fetchRecipe}) {

//   const [job, setJob] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

//   const fetchJob = async () => {
//     const oneJob = await getCodingJob(id)
//     setJob(oneJob)
//   }

//   useEffect(() => {
//     fetchJob()
//   }, [])

  const handleDelete = async (id) => {
    await deleteRecipe(id)
    fetchRecipe()
    // navigate("/home")
  }

  return (
    <div className='detail__container'>
      
      <div>
        <h2>Image : </h2>
        <p>{state?.img}</p>
      </div>
      <div>
        <h2>Title:</h2> 
        <p>{state?.title}</p>
      </div>
      <div>
        <h2>Include Ingredients:</h2> 
        <p>{state?.includeIngredients}</p>
      </div>
      <div>
        <h2>Summary:</h2> 
        <p>{state?.summary}</p>
      </div>
      <div>
        <h2>Instructions Required:</h2> 
        <p>{state.instructionsRequired}</p>
      </div>
      

      <div>
        <Link to={`/jobs/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={() => {
            
            handleDelete(job._id)
        }}>DELETE</button>
      </div>
    </div>
  )
}

// i got this i know how to do this page

export default Details