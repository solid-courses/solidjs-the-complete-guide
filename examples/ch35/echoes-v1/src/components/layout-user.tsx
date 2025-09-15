import { useAction, useLocation } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Component, JSX, Show } from "solid-js";
import { logoutUserAction } from "~/api/mutations";
import { CurrentUser } from "~/types";
import { Confirm } from "./confirm";
import { Message } from "./notify";
import { Footer } from "./footer";

const NotifyModal = clientOnly(() => import("~/components/notify"));
const ConfirmModal = clientOnly(() => import("~/components/confirm"));

export const LayoutUser: Component<{
  user: CurrentUser,
  children: JSX.Element
}> = (props) => {
  const location = useLocation();

  const menu = [
    { href: '/', name: 'Home' },
    { href: '/quotes', name: 'Quotes' },
    { href: '/authors', name: 'Authors' },
  ];

  const userMenu = [
    { href: '/user', name: 'Dashboard' },
    { href: '/user/quotes', name: 'Edit Quotes' },
    { href: '/user/authors', name: 'Edit Authors' },
  ];

  const useLogoutUserAction = useAction(logoutUserAction);

  const onClickLogout = async (event: MouseEvent) => {
    event.preventDefault();

    const onConfirm = async () => {
      try {
        await useLogoutUserAction();
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'info',
            title: 'Logged Out',
            text: 'User is logged out.',
            timeout: 3000,
          },
        });
        document.dispatchEvent(notifyEvent);
      } catch (error: any) {
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'error',
            title: 'Error',
            text: error.message,
          },
        });
        document.dispatchEvent(notifyEvent);
      }
    };

    const confirmEvent = new CustomEvent<Confirm>('confirm', {
      detail: {
        title: 'Log Out?',
        text: ` You’re about to end your current session.`,
        onConfirm,
      },
    });

    document.dispatchEvent(confirmEvent);
  };
  return (
    <Show when={props.user}>
      <header>
        <nav id="main-menu">
          {menu.map(({ href, name }) => {
            return (
              <a
                href={href}
                classList={{ active: href === location.pathname }}
              >{name}</a>
            );
          })}
        </nav>
        <nav id="user-menu">
          {userMenu.map(({ href, name }) => {
            return (
              <a
                href={href}
                classList={{ active: href === location.pathname }}
              >{name}</a>
            );
          })}
        </nav>
        <div id="user-info">
          <span>{props.user.name}</span>
        </div>
        <div id="logout">
          <button onClick={onClickLogout}>Logout</button>
        </div>
      </header>
      {props.children}
      <Footer />
      <NotifyModal />
      <ConfirmModal />
    </Show>
  )
}