export function html(strings, ...values) {
  return strings.reduce((output, string, index) => output + string + (values[index] ?? ""), "");
}

export function join(items) {
  return items.filter(Boolean).join("");
}
