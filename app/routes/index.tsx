import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser, requireUserId } from "~/utils/session.server";

export const loader = ({request}: LoaderArgs) => {
  requireUserId(request, '/login');

  const user = getUser(request);

  return user;
}
export default function Index() {
  const user = useLoaderData<typeof loader>();
  console.log(user)

  return (
    <div>
      <p>Hello @{user?.username}</p>
    </div>
  );
}
