export function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="./react_shop/" className="brand-logo">
          React Toy-Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/IlyaMur/react_shop"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
