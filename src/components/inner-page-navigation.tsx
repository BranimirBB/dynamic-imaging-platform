import { useLocation, Link } from "react-router-dom";

const navItems = [
  { label: "Ultrasound knowledge", href: "/learning-community/ultrasound-knowledge" },
  { label: "ProbeFix Dynamic", href: "/learning-community/probefix-dynamic" },
  { label: "Learning Community", href: "/learning-community/learning-community" },
];

export function InnerPageNavigation() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="flex gap-8 border-b border-gray-200 mb-6 mt-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            to={item.href}
            className={`pb-2 transition-colors
              ${isActive
                ? "font-bold text-black border-b-2 border-black"
                : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}
            `}
            style={{ marginBottom: "-2px" }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
