const documents = [
    {
        name: "WI Unterlagen",
        link: "https://soulback.net/de/hogaDocs/WI_081223_comp.pdf"
    },
    {
        name: "LFK9 Unterlagen",
        link: "https://soulback.net/de/hogaDocs/LFK9_111223.pdf"
    },
];

export default function Hoga() {
    return(
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <ul className="divide-y divide-gray-100">
                {documents.map((doc) => (
                    <a href={doc.link}><li key={doc.name} className="flex justify-between gap-x-6 py-5">{doc.name}</li></a>
                ))}
            </ul>
        </div>
    )
}