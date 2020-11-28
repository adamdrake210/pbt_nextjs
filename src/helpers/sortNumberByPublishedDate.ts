export function sortNumberByPublishedDate(a: any, b: any) {
  return (
    new Date(b.publishedDate.replace(/-/g, '/')).getTime() -
    new Date(a.publishedDate.replace(/-/g, '/')).getTime()
  );
}

export function sortNumberByPublishedDateRemote(a: any, b: any) {
  return (
    new Date(b.data.publishedDate.replace(/-/g, '/')).getTime() -
    new Date(a.data.publishedDate.replace(/-/g, '/')).getTime()
  );
}
