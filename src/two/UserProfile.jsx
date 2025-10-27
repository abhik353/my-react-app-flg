// import { useState, useEffect } from "react";

// export default function UserProfile({ userId }) {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();
//     const { signal } = controller;

//     async function fetchUser() {
//       try {
//         setError(null);
//         setUser(null);

//         const response = await fetch(`https://api.example.com/user/${userId}`, { signal });
//         if (!response.ok) throw new Error("Network error");

//         const data = await response.json();
//         setUser(data);
//       } catch (err) {
//         if (err.name !== "AbortError") setError(err.message);
//       }
//     }

//     fetchUser();
//     return () => controller.abort();
//   }, [userId]);

//   if (error) return <div>Error: {error}</div>;
//   if (!user) return <div>Loading...</div>;

//   return <div>{user?.name}</div>;
// }

import { useState, useEffect } from "react";

export default function UserProfile({ userId }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/user/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data));
  },[userId]);

  if (!user) return <div>Loading...</div>;
  return <div>{user?.name}</div>;

}
