import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAxios } from "../../hooks/axios";
import { Movie } from "../../types";

function ShowInformation() {
  const axios = useAxios();
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
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
  }, []);

  // Kinolar count bo'yicha diagramma uchun ma'lumot
  const barChartData = data.map((movie) => ({
    title: movie.title,
    count: movie.count,
  }));

  // Kinolarni janr bo‘yicha guruhlash
  const genreData = data.reduce((acc, movie) => {
    movie.genre.forEach((g) => {
      const existingGenre = acc.find((item) => item.name === g);
      if (existingGenre) {
        existingGenre.value += 1;
      } else {
        acc.push({ name: g, value: 1 });
      }
    });
    return acc;
  }, [] as { name: string; value: number }[]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

  return (
    <section className="p-6 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Kinolar Statistikasi
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Kinolar count bo‘yicha ustunli diagramma */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            Kinolar soni va count
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <XAxis
                dataKey="title"
                tick={{ fontSize: 10 }}
                interval={0}
                angle={-20}
                textAnchor="end"
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Kinolarni janr bo‘yicha doiraviy diagramma */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center mb-2">
            Kinolar janri bo‘yicha
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {genreData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default ShowInformation;
