/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      
      <hr />
      <a href="/about">about</a>
      <a href="/one">one</a>
      <hr />
      <Counter start={3} />
      
    </div>
  );
}
