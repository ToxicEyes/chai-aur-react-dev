import { useState, useEffect } from 'react'

function FetchData(uname) {
 // eslint-disable-next-line no-unused-vars
 const [data, setData] = useState({});
 useEffect(() => {
  fetch(`https://api.github.com/users/${uname}`)
  .then((res) => res.json())
  .then((data) => setData(data));
 }, [uname])

 // console.log(data);
 return data;
}

export default FetchData;