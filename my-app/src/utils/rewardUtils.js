
export const getMonthYear = (dateString) => {
  const date = new Date(dateString);
  return {
    month: date.getMonth(), 
    year: date.getFullYear(),
  };
};

export const getRecentThreeMonths = (transactions) => {
  const monthYearSet = new Set(
    transactions.map((t) => {
      const date = new Date(t.date);
      return `${date.getFullYear()}-${date.getMonth()}`;
    })
  );

  const sortedMonthYear = Array.from(monthYearSet)
    .map((d) => {
      const [year, month] = d.split("-").map(Number);
      return { year, month };
    })
    .sort((a, b) => new Date(b.year, b.month) - new Date(a.year, a.month));

  return sortedMonthYear.slice(0, 3);
};


export const formatMonthYear = (month, year) =>
  `${new Date(0, month).toLocaleString("default", {
    month: "long",
  })} ${year}`;
