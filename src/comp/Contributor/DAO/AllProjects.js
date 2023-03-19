import Card from "./Card";

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a, i) => ({
  key: a,
  title: "Title for " + a,
  summary: "Summary of the project for " + a,
  description: "Description of the project for " + a,
  fundingTarget: a * 1000,
  minimumStakingAmount: a * 465,
  votingThreshold: "",
  closingTime: `${a < 10 ? `0${a}` : a}-01-23`,
  isClosed: i % 3 === 0,
  isMine: i % 5 === 0 || i === 1,
}))

function AllProjects() {
  return dummy.map(a => <Card {...a} />)
}

export default AllProjects