import { useState, useEffect } from "react";

interface Chat {
  id: string;
  message: string;
  time: string;
  sender: {
    self: boolean;
    image: string;
    is_kyc_verified: boolean;
  };
}

interface HeaderData {
  name: string;
  from: string;
  to: string;
}

interface Data {
  chats: Chat[];
  header: HeaderData;
}

const useFetchData = () => {
  const [data, setData] = useState<Data>({
    chats: [],
    header: {
      name: "",
      from: "",
      to: "",
    },
  });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHeaderData();
    fetchChatData();
  }, []);

  const fetchHeaderData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://qa.corider.in/assignment/chat?page=0`
      );
      const value = await response.json();
      setData((prevData) => ({
        ...prevData,
        header: {
          name: value.name,
          from: value.from,
          to: value.to,
        },
      }));
    } catch (err) {
      console.log("Error Occurred while fetching header data:", err);
    }
    setLoading(false);
  };

  const fetchChatData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://qa.corider.in/assignment/chat?page=${page}`
      );
      const value = await response.json();
      setPage((prevPage) => prevPage + 1);
      setData((prevData) => ({
        ...prevData,
        chats: [...prevData.chats, ...value.chats],
      }));
    } catch (err) {
      console.log("Error Occurred while fetching chat data:", err);
    }
    setLoading(false);
  };

  return { data, loading, fetchChatData, setPage, page };
};

export default useFetchData;
