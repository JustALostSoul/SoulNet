const documents = [
    {
        name: "WI Unterlagen",
        link: "https://soulback.net/de/hogaDocs/WI_081223_comp.pdf",
        size: "3.357 kb",
        date: "08.12.2023"
    },
    {
        name: "LFK9 Unterlagen",
        link: "https://soulback.net/de/hogaDocs/LFK9_111223.pdf",
        size: "9.316 kb",
        date: "11.12.2023"
    }
];

export default function Hoga() {
    return(

        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <ul className="divide-y divide-gray-100 border-2 p-5">
                    {documents.map((doc) => (
                        <div className="flex flex-row py-5">
                            <div className="basis-1/4 p-2">
                                {doc.name}
                            </div>
                            <div className="basis-1/4 p-2 text-gray-400">
                                {doc.date}
                            </div>
                            <div className="basis-1/4 p-2 text-gray-400">
                                {doc.size}
                            </div>
                            <a href={doc.link}>
                                <div className="basis-1/4 bg-orange-400 hover:bg-orange-600 hover:border-gray-700 hover:text-gray-100 p-2 border-4">
                                    Download
                                </div>
                            </a>
                        </div>
                    ))}
                </ul>
            </div>
        </main>
    )
}