import Header from "./components/Header";
import "./styles/home.scss";

export default function Home() {
  return (
    <div className="home__container bg-cover bg-no-repeat flex h-screen justify-center w-screen">
      <Header />
    </div>
  );
}
