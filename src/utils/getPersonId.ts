export const getPersonId = (homeworld: string): string => {
  const homeworldArr = homeworld.split('/');
  return homeworldArr[homeworldArr.length - 2];
};
