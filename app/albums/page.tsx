import Link from "next/link";

export default function Albums() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "Albums", path: "/albums" },
  ];

  return (
    <nav>
      <ul className="flex gap-4">
        {pages.map((page) => (
          <li key={page.name}>
            <Link href={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>

      <h1 className="text-3xl font-semibold p-8">Album Page</h1>
    </nav>
  );
}
