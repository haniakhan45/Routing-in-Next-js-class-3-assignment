import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-pink-100 min-h-screen">
      <Navbar />
      <br />
      <h1 className="text-center font-bold text-blue-500 text-2xl">
        Welcome to My Project
      </h1>
      <br />
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg"
        alt="NextJs"
        className="w-80 h-40 mx-auto"
      />
      <br />
      <p className="text-center text-gray-500">
        This project is built using <strong>Next.js</strong>, a powerful
        framework for building fast, modern web applications. With features like
        server-side rendering and static site generation, Next.js ensures
        optimal performance and scalability. Explore the pages to learn more
        about how I'm implementing these technologies!
      </p>
      <br />
      <Footer />
    </div>
  );
}
