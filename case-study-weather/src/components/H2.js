import { $ } from "./$";

export const H2 = (text) => {
  return $("h2", text, { class: "text-xl" });
};
