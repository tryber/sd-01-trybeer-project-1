import React from 'react';
import { getUser } from '../service';
import useAxios from 'axios-hooks'
import NavBar from '../component/NavBar';
import Profile from '../component/ProfileAdmin';
import '../styles/ProfileAdmin.css';

function ProfileAdmin() {
  // const [isFetching, setIsFetching] = useState(true);
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetch = async () => {
  //     const result = await fetchApi(requestWithToken(getUser(), 'admin/profile'));
  //     setData(result);
  //   };
  //   fetch();
  // }, []);

  // // if (shouldRedirect) return <Redirect to="/" />
  // if (!data) return 'Loading';

  // return (
  //   <div>
  //     {/* <NavBar /> */}
  //     <div>
  //       <h3>{data.name}</h3>
  //       <h3>{data.email}</h3>
  //     </div>
  //   </div>
  // );
  const [{ data, loading, error }] = useAxios({
    url: 'http://localhost:3001/admin/profile',
    headers: {
      'Content-Type': 'application/json',
      authorization: getUser().token
    }
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <NavBar />
      <Profile index={data} />
    </div>
  )
}

export default ProfileAdmin;
