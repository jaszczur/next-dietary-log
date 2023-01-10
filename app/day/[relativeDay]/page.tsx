import {} from "next";
type Props = { relativeDay: "yesterday" | "today" | "tomorrow" };

export default function Day({ relativeDay }: Params) {
  return <p>{relativeDay}</p>;
}
