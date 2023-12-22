import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Ariel Marte"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Post
        author="João Silva"
        content="Outro post, mas com um autor diferente."
      />
    </div>
  );
}
