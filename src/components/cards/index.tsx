// import { useEffect, useState } from "react";
// import { useAxios } from "../../hooks/axios";
// import { Movie } from "../../types";

// const MovieTable = () => {
//   const axios = useAxios();
//   const [data, setData] = useState<Movie[]>([]);

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: "/movie/movies",
//     })
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setData(response.data);
//         } else {
//           console.error("API noto‘g‘ri ma’lumot qaytardi:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//       });
//   }, []);

//   console.log(data);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Movies List</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 text-left">
//             <th className="p-2 border">Image</th>
//             <th className="p-2 border">Title</th>
//             <th className="p-2 border">Year</th>
//             <th className="p-2 border">Director</th>
//             <th className="p-2 border">Genre</th>
//             <th className="p-2 border">Duration</th>
//             <th className="p-2 border">Format</th>
//             <th className="p-2 border">Price</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((value) => (
//               <tr key={value._id} className="hover:bg-gray-100">
//                 <td className="p-2 border">
//                   <img
//                     src={value.image || "https://via.placeholder.com/100"}
//                     alt={value.title}
//                     className="w-16 h-16 object-cover"
//                   />
//                 </td>
//                 <td className="p-2 border">{value.title}</td>
//                 <td className="p-2 border">{value.year}</td>
//                 <td className="p-2 border">{value.director}</td>
//                 <td className="p-2 border">
//                   {Array.isArray(value.genre) ? value.genre.join(", ") : "N/A"}
//                 </td>
//                 <td className="p-2 border">{value.duration} min</td>
//                 <td className="p-2 border">{value.format}</td>
//                 <td className="p-2 border">${value.price}</td>
//                 <td className="p-2 border">
//                   <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
//                     Edit
//                   </button>
//                   <button className="bg-red-500 text-white px-2 py-1 rounded">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={9} className="p-4 text-center">
//                 No movies found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MovieTable;

// import { useEffect, useState } from "react";
// import { useAxios } from "../../hooks/axios";
// import { Movie } from "../../types";

// const MovieTable = () => {
//   const axios = useAxios();
//   const [data, setData] = useState<Movie[]>([]);

//   // Ma'lumotlarni yuklash
//   const fetchMovies = () => {
//     axios({
//       method: "GET",
//       url: "/movie/movies",
//     })
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setData(response.data);
//         } else {
//           console.error("API noto‘g‘ri ma’lumot qaytardi:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//       });
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   // DELETE funksiyasi
//   const handleDelete = (id: string) => {
//     if (!window.confirm("Haqiqatan ham ushbu kinoni o‘chirmoqchimisiz?"))
//       return;

//     axios({
//       method: "DELETE",
//       url: `/movie/movies/${id}`,
//     })
//       .then(() => {
//         setData((prevData) => prevData.filter((movie) => movie._id !== id));
//         console.log("Movie deleted successfully");
//       })
//       .catch((error) => {
//         console.error("Failed to delete movie:", error);
//       });
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Movies List</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 text-left">
//             <th className="p-2 border">Image</th>
//             <th className="p-2 border">Title</th>
//             <th className="p-2 border">Year</th>
//             <th className="p-2 border">Director</th>
//             <th className="p-2 border">Genre</th>
//             <th className="p-2 border">Duration</th>
//             <th className="p-2 border">Format</th>
//             <th className="p-2 border">Price</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((value) => (
//               <tr key={value._id} className="hover:bg-gray-100">
//                 <td className="p-2 border">
//                   <img
//                     src={value.image || "https://via.placeholder.com/100"}
//                     alt={value.title}
//                     className="w-16 h-16 object-cover"
//                   />
//                 </td>
//                 <td className="p-2 border">{value.title}</td>
//                 <td className="p-2 border">{value.year}</td>
//                 <td className="p-2 border">{value.director}</td>
//                 <td className="p-2 border">
//                   {Array.isArray(value.genre) ? value.genre.join(", ") : "N/A"}
//                 </td>
//                 <td className="p-2 border">{value.duration} min</td>
//                 <td className="p-2 border">{value.format}</td>
//                 <td className="p-2 border">${value.price}</td>
//                 <td className="p-2 border">
//                   <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleDelete(value._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={9} className="p-4 text-center">
//                 No movies found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MovieTable;

import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/axios";
import { Movie } from "../../types";
import MovieModal from "../addModal";

const MovieTable = () => {
  const axios = useAxios();
  const [data, setData] = useState<Movie[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Ma'lumotlarni yuklash
  const fetchMovies = () => {
    axios({
      method: "GET",
      url: "/movie/movies",
    })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("API noto‘g‘ri ma’lumot qaytardi:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // DELETE funksiyasi
  const handleDelete = (id: string) => {
    if (!window.confirm("Haqiqatan ham ushbu kinoni o‘chirmoqchimisiz?"))
      return;

    axios({
      method: "DELETE",
      url: `/movie/movies/${id}`,
    })
      .then(() => {
        setData((prevData) => prevData.filter((movie) => movie._id !== id));
        console.log("Movie deleted successfully");
      })
      .catch((error) => {
        console.error("Failed to delete movie:", error);
      });
  };

  // Edit tugmasini bosganda modalni ochish
  const handleEdit = (movie: Movie) => {
    setEditMode(true);
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Movies List</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Year</th>
            <th className="p-2 border">Director</th>
            <th className="p-2 border">Genre</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Format</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((value) => (
              <tr key={value._id} className="hover:bg-gray-100">
                <td className="p-2 border">
                  <img
                    src={value.image || "https://via.placeholder.com/100"}
                    alt={value.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="p-2 border">{value.title}</td>
                <td className="p-2 border">{value.year}</td>
                <td className="p-2 border">{value.director}</td>
                <td className="p-2 border">
                  {Array.isArray(value.genre) ? value.genre.join(", ") : "N/A"}
                </td>
                <td className="p-2 border">{value.duration} min</td>
                <td className="p-2 border">{value.format}</td>
                <td className="p-2 border">${value.price}</td>
                <td className="p-2 border">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEdit(value)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(value._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="p-4 text-center">
                No movies found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* MovieModal komponenti */}
      {modalVisible && (
        <MovieModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={fetchMovies}
          editMode={editMode}
          movieData={selectedMovie}
        />
      )}
    </div>
  );
};

export default MovieTable;
