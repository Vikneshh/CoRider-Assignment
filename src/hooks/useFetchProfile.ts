import { useState, useEffect } from "react";

const useFetchProfile = () => {
  const [profile, setProfile] = useState<string>("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch("https://picsum.photos/200");
      const data = await response.url;
      setProfile(data);
    } catch (err) {
      console.log("Error Occurred");
    }
  };
  
  return { profile };
};

export default useFetchProfile;
