export function sortNumberByPublishedDate(a: any, b: any) {
  return (
    new Date(b.publishedDate.replace(/-/g, '/')).getTime() -
    new Date(a.publishedDate.replace(/-/g, '/')).getTime()
  );
}
