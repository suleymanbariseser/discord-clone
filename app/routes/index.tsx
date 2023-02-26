import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireUserId } from "~/utils/session.server";

export const loader = ({request}: LoaderArgs) => {
  const user = requireUserId(request, '/login');

  return user;
}
export default function Index() {
  const user = useLoaderData<typeof loader>();

  console.log(user)

  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}
