import { useParams } from "react-router-dom";
import FetchData from "../FetchData/FetchData";
// import { useEffect } from "react";

function Github() {
  const { uname } = useParams();
  const data = FetchData(uname);
  const {avatar_url: pic,location:loc, bio:desc} = data;
  let url = `https://github.com/${uname}/`;

  // //fetching data from github api
  //  useEffect(()=> {
  //   fetch(`https://api.github.com/users/${uname}`)
  //   .then((res) => res.json())
  //   .then( (data) => console.log(data));
  //  }, [uname]);

  return (
    <>
      <div className="text-center text-xl font-bold bg-slate-300">
        Github Profile: {uname}
      </div>
      <div
       className="font-bold flex flex-col justify-center items-center w-[650px] border shadow-xl p-3 mx-auto gap-2"
      >
       <img
       className="rounded-full"
       src={pic} alt="profile_pic" width= {350} height={100}/>
       <a href={url}>Click Here to visit github profile</a>
       <p>Location: {loc}</p>
       <p>Bio: {desc}</p>
      </div>
      
    </>
  );
}

export default Github;
