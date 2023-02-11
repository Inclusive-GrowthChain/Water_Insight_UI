import Sidebar from "./Sidebar";

const lat = "13.0827"
const lng = "80.2707"

function DashBoard() {
  return (
    <section className='grid grid-cols-[1fr,300px] h-full overflow-hidden'>
      <div>
        <iframe
          width="100%"
          height="100%"
          style={{ border: "none" }}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZ4YsHJ-UaXOd2W95mXMNhrH2SJXNzUPU&q=${lat},${lng}&center=${lat},${lng}&zoom=6`}
          title="map"
        ></iframe>
      </div>

      <Sidebar />
    </section>
  )
}

export default DashBoard