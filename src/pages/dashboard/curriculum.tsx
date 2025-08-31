import cvPik from "../../assets/profile.png"
import conectPic from "../../assets/conect.png";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export default function Curriculum() {
    const profile = {
        name: "Aristide K. Dossou",
        title: "Directeur Général — BOAD",
        organization: "Banque Ouest Africaine de Développement",
        location: "Lomé, Togo",
        photo: cvPik,
        summary:
            "Dirigeant exécutif avec 18+ ans d'expérience en finance de développement, structuration de projets d'infrastructure et gouvernance régionale UEMOA. Catalyse l'innovation, la performance et l'impact socio-économique via des partenariats public-privé et des stratégies ESG.",
        contacts: {
            email: "a.dossou@exemple.boad.int",
            phone: "+228 90 00 12 34",
            website: "https://boad-exemple.org",
            linkedin: "https://www.linkedin.com/in/aristide-dossou",
        },
        experiences: [
            {
                role: "Directeur Général",
                company: "BOAD",
                start: "2019-09-01",
                end: "present",
                city: "Lomé",
                description:
                    "Pilotage stratégique des opérations, supervision d'un portefeuille de 4,2 Mds€ d'engagements, optimisation de la gouvernance, et accélération des financements verts et digitaux au sein de l'UEMOA.",
                skills: [
                    "Gouvernance",
                    "Finance de développement",
                    "Stratégie ESG",
                    "PPP",
                    "Transformation digitale",
                ],
            },
            {
                role: "Directeur des Opérations Régionales",
                company: "BOAD",
                start: "2015-01-01",
                end: "2019-08-01",
                city: "Lomé",
                description:
                    "Conception et exécution des plans pluriannuels, coordination de 8 bureaux pays, mise en place de KPIs et d'un cadre de gestion des risques intégrés.",
                skills: ["Gestion de portefeuille", "Risk management", "Pilotage KPI", "Leadership"],
            },
            {
                role: "Senior Investment Officer",
                company: "Banque d'Investissement Afrique Ouest",
                start: "2011-03-01",
                end: "2014-12-01",
                city: "Abidjan",
                description:
                    "Structuration de dettes senior et mezzanine pour projets énergie & transport; due diligence, modélisation financière et négociation contractuelle.",
                skills: ["Project finance", "Modélisation financière", "Négociation", "Énergie"],
            },
        ],
        education: [
            {
                degree: "MBA Finance & Stratégie",
                school: "HEC Paris",
                year: "2011",
            },
            {
                degree: "Ingénieur Génie Industriel",
                school: "INP-HB (Yamoussoukro)",
                year: "2007",
            },
            {
                degree: "Certification PMP",
                school: "PMI",
                year: "2016",
            },
        ],
        skills: [
            "Direction générale",
            "Finance durable",
            "Levée de fonds",
            "Pilotage de la performance",
            "Gestion des risques",
            "Stakeholder management",
            "Data-driven decision",
        ],
        softSkills: [
            "Leadership inspirant",
            "Communication exécutive",
            "Vision stratégique",
            "Négociation",
            "Agilité",
            "Esprit d'équipe",
        ],
        languages: [
            { name: "Français", level: "Natif" },
            { name: "Anglais", level: "Courant (C1)" },
            { name: "Portugais", level: "Professionnel (B2)" },
        ],
        hobbies: ["Course à pied", "Photographie", "Littérature africaine", "Voyage"],
        references: [
            {
                name: "Mariam Traoré",
                role: "Directrice des Risques",
                company: "BOAD",
                email: "m.traore@exemple.boad.int",
                phone: "+228 90 55 66 77",
            },
            {
                name: "Ibou Ndiaye",
                role: "Associé, Infrastructure",
                company: "Sahel Capital Partners",
                email: "i.ndiaye@sahelcap.example",
                phone: "+221 77 123 45 67",
            },
        ],
    } as const;

    const fmtRange = (start: string, end: string) => {
        const s = new Date(start);
        const e = end === "present" ? new Date() : new Date(end);
        const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
        const years = Math.floor(months / 12);
        const rem = months % 12;
        const labelYears = years > 0 ? `${years} an${years > 1 ? "s" : ""}` : "";
        const labelMonths = rem > 0 ? `${rem} mois` : "";
        const dur = [labelYears, labelMonths].filter(Boolean).join(" ");
        const fmt = (d: Date) => d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
        return {
            text: `${fmt(s)} — ${end === "present" ? "Présent" : fmt(e)}${dur ? ` (${dur})` : ""}`,
            years,
        };
    };

   return (
  <div className="min-h-screen py-10 text-gray-800">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden">
      
      {/* Header */}
      <div
        className="relative h-56 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/935746242/fr/photo/mata-atlantica-for%C3%AAt-atlantique-au-br%C3%A9sil.jpg?s=612x612&w=0&k=20&c=2GW4LDNH4aAah4A0IzHl4K2ugMajlqKmRy9CGLtSTg4=")`,
        }}
      >
        <div className="absolute inset-0 flex items-end justify-end">
          <Button className="px-4 py-2 text-white rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 transition-colors m-4">
            Publier
          </Button>
        </div>

        <div className="absolute -bottom-10 left-8 flex items-end gap-4">
          <img
            src={profile?.photo || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="p-8 pb-10 grid lg:grid-cols-3 gap-8">
        
        {/* Main column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Header Infos */}
          <div className="py-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {profile?.name || "Nom non renseigné"}
            </h1>
            {profile?.title && <p className="text-lg text-gray-700 mt-1">{profile.title}</p>}
            {(profile?.organization || profile?.location) && (
              <p className="text-sm text-gray-500 mt-1">
                {profile.organization || "Organisation inconnue"} • {profile.location || "Lieu non précisé"}
              </p>
            )}
          </div>

          {/* Summary */}
          {profile?.summary && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Présentation</h2>
              <p className="text-gray-600 leading-relaxed">{profile.summary}</p>
            </section>
          )}

          {/* Experiences */}
          {Array.isArray(profile?.experiences) && profile.experiences.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Expériences</h2>
              <ul className="space-y-6">
                {profile.experiences.map((exp, i) => {
                  const r = fmtRange(exp.start, exp.end);
                  return (
                    <li key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold">
                            {exp.role || "Poste"} — {exp.company || "Entreprise"}
                          </p>
                          {(exp.city || r.text) && (
                            <p className="text-sm text-gray-500">
                              {exp.city || "Ville"} • {r.text || "Période inconnue"}
                            </p>
                          )}
                        </div>
                        {r.years > 0 && (
                          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full whitespace-nowrap self-start">
                            {r.years} ans d'expérience
                          </span>
                        )}
                      </div>
                      {exp.description && <p className="text-gray-700 mt-2">{exp.description}</p>}
                      {Array.isArray(exp.skills) && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.skills.map((s, j) => (
                            <span key={j} className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full">{s}</span>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* Education */}
          {Array.isArray(profile?.education) && profile.education.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-3">Formations & Certifications</h2>
              <div className="space-y-2">
                {profile.education.map((e, i) => (
                  <div key={i} className="flex items-center justify-between bg-white border rounded-lg p-3">
                    <div>
                      <p className="font-medium">{e.degree || "Diplôme non précisé"}</p>
                      <p className="text-sm text-gray-500">{e.school || "Établissement inconnu"}</p>
                    </div>
                    {e.year && <span className="text-sm text-gray-600">{e.year}</span>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* References */}
          {Array.isArray(profile?.references) && profile.references.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-3">Référents</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {profile.references.map((ref, i) => (
                  <div key={i} className="border rounded-xl p-4 bg-gray-50">
                    <p className="font-semibold">{ref?.name || "Nom non renseigné"}</p>
                    <p className="text-sm text-gray-500">
                      {ref?.role || "Rôle"} — {ref?.company || "Entreprise"}
                    </p>
                    {ref?.email && <p className="text-sm mt-1">{ref.email}</p>}
                    {ref?.phone && <p className="text-sm">{ref.phone}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          
          {/* Contact */}
          {profile?.contacts && (
            <section className="bg-white border rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Informations</h3>
              <ul className="text-gray-700 space-y-1">
                {profile.contacts.email && <li><span className="text-gray-500">Email:</span> {profile.contacts.email}</li>}
                {profile.contacts.phone && <li><span className="text-gray-500">Tél:</span> {profile.contacts.phone}</li>}
                {profile.contacts.website && (
                  <li><span className="text-gray-500">Site:</span> <a className="text-indigo-600 hover:underline" href={profile.contacts.website} target="_blank">{profile.contacts.website}</a></li>
                )}
                {profile.contacts.linkedin && (
                  <li><span className="text-gray-500">LinkedIn:</span> <a className="text-indigo-600 hover:underline" href={profile.contacts.linkedin} target="_blank">Profil</a></li>
                )}
              </ul>
            </section>
          )}

          {/* Hard Skills */}
          {Array.isArray(profile?.skills) && profile.skills.length > 0 && (
            <section className="bg-white border rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Compétences clés</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((s, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </section>
          )}

          {/* Soft Skills */}
          {Array.isArray(profile?.softSkills) && profile.softSkills.length > 0 && (
            <section className="bg-white border rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map((s, i) => (
                  <span key={i} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {Array.isArray(profile?.languages) && profile.languages.length > 0 && (
            <section className="bg-white border rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Langues</h3>
              <ul className="space-y-1 text-gray-700">
                {profile.languages.map((l, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span>{l.name || "Langue"}</span>
                    {l.level && <span className="text-sm text-gray-500">{l.level}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Hobbies */}
          {Array.isArray(profile?.hobbies) && profile.hobbies.length > 0 && (
            <section className="bg-white border rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Loisirs</h3>
              <p className="text-gray-700">{profile.hobbies.join(", ")}</p>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-5 text-white shadow-md">
            <p className="font-semibold mb-2">Télécharger le CV premium</p>
            <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 rounded-xl">Exporter en PDF</button>
          </section>
        </aside>
      </div>
    </div>

    <p className="text-center text-xs text-gray-500 mt-6">
      Profil  de {profile.name} —  {profile.title} {new Date().toLocaleDateString()}.
    </p>
  </div>
);

}