import Ticket from "../../assets/ticketPart.png";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image à gauche sur écran large */}
          <div
            className="hidden lg:block lg:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${Ticket})`,
            }}
          ></div>

          {/* Formulaire */}
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-primary text-center">
              Créer un compte
            </h2>
            <p className="text-md text-gray-600 text-center mb-6">
              Rejoignez HelloEvent en quelques secondes
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-primary text-sm font-bold mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Elen Nikabou"
                  className="bg-gray-200 text-primary border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-primary text-sm font-bold mb-2">
                  Adresse Email
                </label>
                <input
                  type="email"
                  placeholder="email@exemple.com"
                  className="bg-gray-200 text-primary border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="block text-primary text-sm font-bold mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  placeholder="* * * * * * * *"
                  className="bg-gray-200 text-primary border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-6">
                <label className="block text-primary text-sm font-bold mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="bg-gray-200 text-primary border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:shadow-outline"
                />
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 w-full rounded transition duration-200"
              >
                S'inscrire
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Vous avez déjà un compte ?{" "}
              <a href="/login" className="text-primary font-semibold hover:underline">
                Connectez-vous
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
