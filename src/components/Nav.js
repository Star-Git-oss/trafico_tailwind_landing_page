import { navData } from "../data";

const Nav = ({ header }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[54px]">
        {navData.map((nav, index) => {
          const { name, href } = nav;
          return (
            <li key={index}>
              <a
                href={href}
                className={`${
                  header ? "text-primary" : "text-white"
                } cursor-pointer hover:text-accent-hover transition`}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
