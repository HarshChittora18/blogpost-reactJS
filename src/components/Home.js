// import React, {useEffect,useState} from "react";
// import { Button } from "react-bootstrap";
// import { Link} from 'react-router-dom'
// import { useDispatch } from "react-redux";
// import {actionCreators} from '../State/'
// import Navbar from "./Navbar";
// import { useSelector } from "react-redux";



// function Home(){
//     const data=JSON.parse(localStorage.getItem("blog"));
//     const [blogs,setBlogs]=useState(data);
//     const dispatch=useDispatch();
//     const newData=useSelector(state=>state.blogReducer);

//     useEffect(()=>{
//       if(newData.blogData[0]!==undefined){
//          changeData();
//       }
      
//     },[newData])
//     function changeData(){
//        setBlogs(newData.blogData);
//        localStorage.setItem("blog",JSON.stringify(newData.blogData));
//        const temp=localStorage.getItem("blog");
//        console.log("from local",temp);
//     }
    

//     return(
//         <> 
        
//           <Navbar/>
//           <div className="container d-flex justify-content-end mt-5">
//              <div></div>
//              <Link to='/addBlog' onClick={()=>{dispatch(actionCreators.viewBlog(blogs))}}><Button>Add New Blog</Button></Link>
//           </div>
          
//           {
//             blogs==null?
//             <div className="d-flex justify-content-between mt-5">
//                <div></div>
//                <h1>No data found</h1>
//                <div></div>
//             </div>:
//             blogs.map((item,i)=>
//                <div className="container card mt-4" key={item}>
//                 <div className="d-flex">
//                   <div className="card-body mt-3"><h4>{item.Title}</h4></div>     
//                   <div className="mt-4"><Link to={`/viewBlog/${i}`}><Button onClick={()=>{dispatch(actionCreators.viewBlog(blogs))}}>Read More</Button></Link></div>
//                 </div>           
//                </div>
              
//             )
//           }
         
//         </>
//     );
// }

// export default Home;



// import React, { useEffect, useState, useCallback} from "react";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../State/";
// import Navbar from "./Navbar";
// import { useSelector } from "react-redux";


// function Home() {
//   const data = JSON.parse(localStorage.getItem("blog"));
//   const [blogs, setBlogs] = useState(data);
//   const dispatch = useDispatch();
//   const newData = useSelector((state) => state.blogReducer);

//   useEffect(() => {
//     if (newData.blogData[0] !== undefined) {
//       changeData();
//     }
//   }, [newData, changeData]);

//   // function changeData() {
//   //   setBlogs(newData.blogData);
//   //   localStorage.setItem("blog", JSON.stringify(newData.blogData));
//   //   const temp = localStorage.getItem("blog");
//   //   console.log("from local", temp);
//   // }


// const changeData = useCallback(() => {
//     setBlogs(newData.blogData);
//     localStorage.setItem("blog", JSON.stringify(newData.blogData));
//     const temp = localStorage.getItem("blog");
//     console.log("from local", temp);
// }, [newData.blogData]);

// useEffect(() => {
//     changeData();


// }, [changeData, newData.blogData]); 



import React, { useEffect, useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../State/";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function Home() {
  const data = JSON.parse(localStorage.getItem("blog"));
  const [blogs, setBlogs] = useState(data);
  const dispatch = useDispatch();
  const newData = useSelector((state) => state.blogReducer);

  const changeData = useCallback(() => {
    setBlogs(newData.blogData);
    localStorage.setItem("blog", JSON.stringify(newData.blogData));
    const temp = localStorage.getItem("blog");
    console.log("from local", temp);
  }, [newData.blogData]);

  useEffect(() => {
    if (newData.blogData[0] !== undefined) {
      changeData();
    }
  }, [newData, changeData]);

  useEffect(() => {
    changeData();
  }, [changeData, newData.blogData]);

  // Rest of your component code...

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-end mt-5">
        <div></div>
        <Link to="/addBlog" onClick={() => dispatch(actionCreators.viewBlog(blogs))}>
          <Button>Add New Blog</Button>
        </Link>
      </div>

      {blogs == null ? (
        <div className="d-flex justify-content-between mt-5"style={{ color: "white" }}>
          <div></div>
          <h1>No data found</h1>
          <div></div>
        </div>
      ) : (
        <div className="container mt-4">
          <div className="row">
            {blogs.map((item, i) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                <div className="card mb-4">
                <img src={`https://source.unsplash.com/600x400/?}`} alt="card__image" className="card__image" width="600"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <Link to={`/viewBlog/${i}`}>
                      <Button onClick={() => dispatch(actionCreators.viewBlog(blogs))}>Read More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
