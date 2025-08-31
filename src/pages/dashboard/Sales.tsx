import { CgCardClubs, CgGlobeAlt } from "react-icons/cg";
import { icon } from "../../routes";
import { MembersTable } from "../../widgets/table";

const contents = [
  {
    title: " Publique",
    linktitle: "Edit",
    Icon: <CgGlobeAlt {...icon} />,
    link: "/",
    notice:
      "Votre événement est répertorié et peut faire l'objet d'une recherche.",
  },
  {
    title: " Cart",
    linktitle: "CHANGE",
    Icon: <CgCardClubs {...icon} />,

    link: "/",
    notice:
      "Vous avez sélectionné les options de paiement, vous pouvez les modifier à tout moment.",
  },
  {
    title: "Billets vendus ",
    linktitle: "30 / 110",
    Icon: <CgGlobeAlt {...icon} />,
    link: "/",
    notice:
      "Votre événement est répertorié et peut faire l'objet d'une recherche.",
  },
];

export const Sales = () => {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-primary">Ventes de Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.map((content, idx) => (
          <div
            key={idx}
            className="bg-gray-100 h-44 rounded-xl shadow-md p-4 text-gray-800"
          >
            <div className="mb-6 flex justify-between font-semibold">
              <div className="flex items-center gap-2">
                {content.Icon}
                <span>{content.title}</span>
              </div>
              <a
                href={content.link}
                className="text-blue-700 hover:underline text-sm"
              >
                {content.linktitle}
              </a>
            </div>
            <p className="text-sm">{content.notice}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="lg:w-2/3 w-ful bg-gray-900 rounded-xl shadow-md ">
          <MembersTable />
        </div>

        <div className="lg:w-1/3 w-full rounded-xl shadow-md ">
          <div className="grid grid-cols-1   gap-6">
            <div className="bg-gray-100 h-44 rounded-xl shadow-md p-4 text-gray-800">
              <div className="mb-4 flex justify-between font-semibold">
                <div className="flex items-center gap-2">
                  <span className=" text-2xl text-gray-800 ">
                    Objectifs de vente
                  </span>
                </div>
              </div>
              <p className="text-2xl font-semibold text-primary ">
                250,000 OXF
              </p>
            </div>

            <div className="bg-gray-100 h-44 rounded-xl shadow-md p-4 text-gray-800">
              <div className="mb-4 flex justify-between font-semibold">
                <div className="flex items-center gap-2">
                  <span className=" text-2xl text-gray-800 ">Ventes</span>
                </div>
              </div>
              <p className="text-2xl  font-semibold text-primary ">
                150,000 OXF
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
