function convertTimestampToSolar(timestamp: string) {
  const date = new Date(timestamp);
  const jalaliDate = date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return jalaliDate;
}

export { convertTimestampToSolar };
