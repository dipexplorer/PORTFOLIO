import Link from "next/link";

export default function NavLinks() {
    const links = [
        {
            name: "About",
            href: "#about",
        },
        {
            name: "Projects",
            href: "#projects",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ];

    return (
        <ul className="flex gap-4">
            {links.map((link) => (
                <li key={link.name} className="text-zinc-900 dark:text-white">
                    <Link
                        href={link.href}
                        className="text-zinc-900 dark:text-white hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors duration-300"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
