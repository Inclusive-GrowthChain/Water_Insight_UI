import getRandom from '../../helper/getRandom';

const alphabhets = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
]

const data = [
  {
    contributionId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
    date: "12-12-22",
    time: "10:10 AM",
    waterBody: "Som name",
    accessPoint: "",
    turbidityId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
    coliformId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
  },
]

function MyContribution() {
  return (
    <section>

    </section>
  )
}

export default MyContribution