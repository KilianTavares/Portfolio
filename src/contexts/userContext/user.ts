export async function getUser() {
  // Simulate a delay and return mock data
  await new Promise((res) => setTimeout(res, 1000));
  return { name: "Kilian Tavares", profession: "Fullstack Engineer" };
}
