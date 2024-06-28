import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Input from "./components/Input";
import useFetchData from "./hooks/useFetchData";

const App: React.FC = () => {
  const { data, loading, fetchChatData } = useFetchData();
  const example = {
    name: "Trip No.44",
    from: "Marathahalli",
    to: "Bellandur",
  };
  return (
    <div className="bg-white-50">
      <div className="row vh-100 vw-100">
        <div className="d-flex justify-content-center align-items-center vh-100 flex-column p-2 col-md-6 col-sm-12 custom-app">
          <Header data={example} />
          <Body
            chats={data.chats}
            loading={loading}
            fetchChatData={fetchChatData}
          />
          <Input />
        </div>
      </div>
    </div>
  );
};

export default App;
