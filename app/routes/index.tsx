import { json, redirect } from "@remix-run/node";

import NavBar from "~/components/NavBar";

// export async function loader({ request }) {
//   const cookieHeader = request.headers.get("Cookie");
//   const cookie = (await userPrefs.parse(cookieHeader)) || {};
//   return json({ isDarkMode: cookie.isDarkMode });
// }

// export async function action({ request }) {
//   const cookieHeader = request.headers.get("Cookie");
//   const cookie = (await userPrefs.parse(cookieHeader)) || {};
//   const bodyParams = await request.formData();
//   console.log(bodyParams);

//   if (bodyParams.get("bannerVisibility") === "hidden") {
//     cookie.isDarkMode = false;
//   }

//   return redirect("/", {
//     headers: {
//       "Set-Cookie": await userPrefs.serialize(cookie),
//     },
//   });
// }

export default function IndexRoute() {
  return (
    <div className="bg-white dark:bg-black">
      <NavBar />
      <main>
        <h1 className="min-h-max text-center text-4xl font-bold">
          Remix Starter
        </h1>
      </main>
    </div>
  );
}
