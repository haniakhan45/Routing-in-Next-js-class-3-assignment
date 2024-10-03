import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactUs() {
  return (
    <div className="bg-pink-100 min-h-screen">
      <Navbar />
      <br />
      <h1 className="text-center font-bold text-blue-500 text-3xl">
        Contact Us
      </h1>
      <br />
      <p className="text-center text-gray-500">
        We would love to hear from you! Whether you have feedback, questions, or
        suggestions, feel free to reach out. Our team is always open to new
        ideas and collaborations.
      </p>
      <p className="text-center text-gray-500">
        You can contact us via email at <strong>xyz-example@gmail.com</strong>{" "}
        or by filling out the form below.
      </p>
      <br />
      <Footer />
    </div>
  );
}
