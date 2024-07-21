export const getSearchParams = (
  searchParams: URLSearchParams,
): { currentPage: string; searchText: string } => {
  const currentPage = searchParams.get('page') || '1';
  const searchText = searchParams.get('search') || '';

  return { currentPage, searchText };
};
