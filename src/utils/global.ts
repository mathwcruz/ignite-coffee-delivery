/* eslint-disable @typescript-eslint/ban-types */
export function simpleSort(array: string[], sortOrder: "asc" | "desc") {
  return array.sort((a: string, b: string) =>
    a.toLowerCase() < b.toLowerCase()
      ? sortOrder === "asc"
        ? -1
        : 1
      : sortOrder === "asc"
      ? 1
      : -1
  );
}

export function sortBy<T extends Object>(
  property: keyof T,
  sort_order: "asc" | "desc"
) {
  const compareFn = (a: T, b: T) => {
    const val1 = a[property];
    const val2 = b[property];
    const order = sort_order !== "desc" ? 1 : -1;

    switch (typeof val1) {
      case "number": {
        const valb = val2 as number;
        const result = val1 - valb;
        return result * order;
      }

      case "string": {
        const valb = val2 as string;
        const result = val1.localeCompare(valb);

        return result * order;
      }

      default:
        return 0;
    }
  };

  return compareFn;
}
