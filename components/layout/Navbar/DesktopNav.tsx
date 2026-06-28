import { navigation } from "@/constants/navigation";
import NavLink from "./Navlinks";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <NavLink
          key={item.label}
          href={item.href}
          label={item.label}
        />
      ))}
    </nav>
  );
}