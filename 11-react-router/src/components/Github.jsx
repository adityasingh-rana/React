import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data,setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/adtiyasingh-rana")
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   },[]);
  // });

  return (
    <div className='text-center bg-gray-700 text-white'>
     Github: {data.followers}
     <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>

  )
}

export default Github;
export const githubInfoLoder = async () => {
  const response = await fetch("https://api.github.com/users/adityasingh-rana")
  return response.json();
}
