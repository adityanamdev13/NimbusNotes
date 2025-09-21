
import { useAuth } from "../Context/auth";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  return (
    <section
      className="relative text-center py-20 px-8  "
      
    >
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h2 className="text-5xl font-bold mb-6 mx-6">Your Ideas, Unbound by Device</h2>
        <p className="text-xl mb-8">
          Capture, organize, and access your notes from anywhere with Nimbus Notes.
        </p>
        <button
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg"
          onClick={() => navigate(auth.user ?"/dashboard": "/login")}
        >
          Get Started for Free
        </button>
      </div>
    </section>
  );
}

export default Hero;