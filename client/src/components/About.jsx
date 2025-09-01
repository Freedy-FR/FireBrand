import { useEffect, useState } from "react";
import api from "../services/api";

export default function About() {
  const [text, setText] = useState("");

  useEffect(() => {
    api.get("/about")
      .then(res => setText(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>About FireBrand Church</h1>
      <p>{text}</p>
    </div>
  );
}
