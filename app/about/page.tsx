import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactUs() {
  return (
    <div className="bg-pink-100 min-h-screen">
      <Navbar />
      <br />
      <h1 className="text-center font-bold text-blue-500 text-2xl">
        About This Project
      </h1>
      <br />
      <p className="text-center text-gray-500">
        This project is a demonstration of modern web development using
        cutting-edge tools like <strong>Next.js</strong> and{" "}
        <strong>React</strong>. The goal is to create a dynamic and responsive
        web application that is easy to maintain and scale. With routing,
        server-side rendering, and an intuitive API layer, this project
        showcases the future of web development!
      </p>
      <p className="text-center text-gray-500">
        I'm continuously improving and adding new features to make this platform
        even more user-friendly and functional. Stay tuned for updates!
      </p>
      <br />
      <Footer />
    </div>
  );
}
