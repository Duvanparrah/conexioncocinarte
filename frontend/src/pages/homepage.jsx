import { Link } from "react-router-dom"; 
import Navbar from '../components/Navbar.jsx'; 

function HomePage() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/fondo-login.jpg')" }}>
      {/*componente Navbar */}
      <Navbar />

      <section className="bg-red-500 flex justify-center items-center mt-24 px-5">
        <header className="bg-zinc-800 p-10">
          <p className="text-md text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
            fugit doloremque molestias recusandae labore repellat amet dicta tempore
            necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
            quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
            ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
            officia accusantium vitae doloremque, molestias modi.
          </p>

          <Link
            className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
            to="/"
          >
            Get Started
          </Link>
        </header>
      </section>
    </div>
  );
}

export default HomePage;
