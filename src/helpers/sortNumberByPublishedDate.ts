export function sortNumberByPublishedDate(
  a: any,
  b: any,
) {
  return (
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}