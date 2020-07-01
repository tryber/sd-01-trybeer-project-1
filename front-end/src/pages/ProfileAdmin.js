// import React from 'react';
// import { fetchApi } from '../service/serviceFetch';
// import Headers from '../component/Header';

// async function handleSubmit(obj, setMessageRequest, setShouldRedirect) {
//   const data = await fetchApi({
//     endpoint: 'http://localhost:3001/Admin/profile',
//     method: 'GET',
//   });
//   if (data.message) return setMessageRequest(data.message);
//   saveUser(data);
//   setShouldRedirect(true);
// }

// function ProfileAdmin({ location: { pathname } }) {

//   return (
//     <div>
//       <Headers path={`${pathname}`} />
//     </div>
//   );
// }

// export default ProfileAdmin;
