import { useLocation } from "@solidjs/router";
import { Component, JSXElement } from "solid-js"
import { Footer } from "./footer";

export const LayoutVisitor: Component<{ children: JSXElement }> = (props) => {
  const location = useLocation();

  const menu = [
    { path: '/', name: 'Home' },
    { path: '/quotes', name: 'Quotes' },
    { path: '/authors', name: 'Authors' },
    { path: '/login', name: 'Login' },
  ];

  return (
    <>
      <header>
        <nav id="main-menu">
          {menu.map(({ path, name }) => {
            return (
              <a
                href={path}
                classList={{ active: path === location.pathname }}
              >{name}</a>
            );
          })}
        </nav>
      </header>
      {props.children}
      <Footer />
    </>
  )
}