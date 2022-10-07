import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  LiveReload,
  Outlet,
  ScrollRestoration,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";
import { json } from "@remix-run/node";
import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
  LoaderArgs,
} from "@remix-run/node";

import { getUser } from "./session.server";
import styles from "./styles/app.css";

import type { Theme } from "~/theme/theme-provider";
import { ThemeSsrFix, ThemeProvider, useTheme } from "~/theme/theme-provider";
import { getThemeSession } from "./theme/theme.server";

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return json({
    user: await getUser(request),
    ...data,
  });
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Code Rage",
  viewport: "width=device-width,initial-scale=1",
  name: "description",
  property: "og:description",
  content:
    "Blog about Web Development, computers and electronics. I'm not trying to reinvent the wheel, I'm just trying to make it better by adding some rage to it!",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

//TODO: Set CSP for scripts and set up a nonce for ScrollRestoration, LiveReload and Scripts  e.g.<Script nonce={nonce}/>

function App() {
  const [user, setUser] = useState(null);
  const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <ThemeSsrFix ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
