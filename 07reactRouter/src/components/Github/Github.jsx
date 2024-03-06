import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Rahulgit3D2Y")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl grid place-content-center gap-4">
      Github followers: {data.followers}
      <img
        className="rounded-full"
        src={data.avatar_url}
        alt="git picture"
        width={300}
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Rahulgit3D2Y");
  return response.json();
};
