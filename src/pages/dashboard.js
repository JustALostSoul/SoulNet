const messages = [
    {
        name: "Website Update 0.1.4 - 11.12.2023 19:55 Uhr",
        content: "Neues Dokument hochgeladen, Download Page etwas übersichtlicher gestaltet"
    },
    {
        name: "Website Update 0.1.3 - 10.12.2023 14:45 Uhr",
        content: "Automated Github Action eingerichtet, für schnellen und automatisches Deploying auf den Webspace"
    },
    {
        name: "Website Update 0.1.2 - 10.12.2023 13 Uhr",
        content: "Routing fixed mittels searchParametern und meta-Refresh-Weiterleitung von /de/hoga"
    },
    {
        name: "Website Update 0.1.1 - 09.12.2023 17 Uhr",
        content: "Komplettes Backend der Website überarbeitet. Nun bessere und schnellere Funktion und bessere Entwicklung möglich. Beim nächsten Update hoffentlich Versionskontrolle auf Github inkl. automatischem Deploy auf den Webspace"
    },
    {
        name: "Website Update 0.1.0 - 08.12.2023 22 Uhr",
        content: "Website ging online"
    },
]

export function Dashboard() {
    return(
        <div>
            <ul className="divide-y divide-gray-100">
                {messages.map((msg) => (
                    <li key={msg.name}>
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{msg.name}</h1> 
                            <p>{msg.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}