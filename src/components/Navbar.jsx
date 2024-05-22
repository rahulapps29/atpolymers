import { links } from "../data";
import { links2 } from "../data";
export const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          AT<span className="text-emerald-600">Polymers</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text, download } = link;
            return (
              <a
                key={id}
                href={href}
                download={download}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
// export default Navbar;
export const Navbar2 = () => {
  return (
    <nav className="bg-emerald-300">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Download <span className="text-emerald-600">Brochure</span>
        </h2>
        <div className="flex gap-x-1 text-3xl font-bold">
          {links2.map((link) => {
            const { id, href, text, download } = link;
            return (
              <a
                key={id}
                href={href}
                download={download}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
