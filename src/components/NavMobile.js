import { navData } from "../data";

const NavMobile = () => {
  return (
    <nav className="bg-accent w-full p-4">
      <ul className="flex flex-col gap-y-6">
        {navData.map((nav, index) => {
          const { name, href } = nav;
          return (
            <li key={index}>
              <a href={href} className="text-white hover:text-primary">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
