import { useLocation, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "ProbeFix - Upper Body", href: "/learning/probefix-upper", isPremium: false },
  { label: "ProbeFix - Lower Body", href: "/learning/probefix-lower", isPremium: false },
  { label: "Ultrasound knowledge", href: "/learning/ultrasound-knowledge", isPremium: false },
  { label: "Learning Community", href: "/learning/learning-community", isPremium: true },
  { label: "Workshops", href: "/learning/workshops", isPremium: true },
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
            className={`pb-2 transition-colors flex items-center gap-2
              ${isActive
                ? "font-bold text-black border-b-2 border-black"
                : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}
            `}
            style={{ marginBottom: "-2px" }}
          >
            {item.label}
            {item.isPremium && (
              <Badge 
                variant="outline" 
                className="text-xs px-1.5 py-0"
                style={{ 
                  borderColor: '#6188C3', 
                  backgroundColor: '#EFF7FF',
                  color: '#6188C3'
                }}
              >
                Premium
              </Badge>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
