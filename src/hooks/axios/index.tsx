import axios from "axios";

interface PropTypes {
  url: string;
  method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  data?: object;
  headers?: object;
  params?: object;
}

export const useAxios = () => {
  const response = async (props: PropTypes) => {
    const { url, method = "GET", data, headers, params } = props;

    try {
      const res = await axios({
        url: `${import.meta.env.VITE_BASE_URL}${url}`,
        method,
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          ...headers,
        },
        params: {
          access_token: localStorage.getItem("token"),
          ...params,
        },
      });

      return res.data;
    } catch (error) {
      console.error("Axios Xatolik:", error);
      throw error;
    }
  };

  return response;
};
