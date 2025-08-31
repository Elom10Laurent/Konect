import Ticket from "../../assets/ticketPart.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url(${Ticket})`,
            }}
          ></div>

          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-primary text-center">
              🎟️ HelloEvent{" "}
            </h2>
            <p className="text-xl text-gray-600 text-center">Bienvenue !</p>

            <a
              href="#"
              className="flex items-center justify-center mt-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <div className="px-4 py-3">
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  className="h-6 w-6"
                  alt="Google logo"
                />
              </div>
              <h1 className="px-4  text-center text-gray-600 font-bold">
                Se connecter avec Google
              </h1>
            </a>

            {/* Divider */}
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-sm font-bold text-gray-500 uppercase text-center">
                ou avec email
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block text-primary text-md font-bold mb-2">
                Adresse Email
              </label>
              <input
                type="email"
                placeholder="jeuneevent@exemple.com"
                className="bg-gray-200 text-primary focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-primary text-md font-bold mb-2">
                  Mot de passe
                </label>
                <a href="#" className="text-sm font-bold text-gray-500">
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                type="password"
                placeholder="* * * * * * * *"
                className="bg-gray-200 text-primary focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
              />
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button className="bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-secondary transition">
                Connexion
              </button>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a
                href="/register"
                className="text-xs text-primary uppercase font-semibold"
              >
                ou créer un compte
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
