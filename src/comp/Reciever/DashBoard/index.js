import Sidebar from "./Sidebar2";

const lat = "13.0827"
const lng = "80.2707"

function DashBoard() {
  return (
    <section className='dfc h-full overflow-hidden'>
      <div className="df justify-between p-4 pb-2">
        <h1 className="text-lg font-medium">Dashboard</h1>
        <button className="theme-btn text-sm">Generate report</button>
      </div>

      <div className="flex-1">
        <iframe
          width="100%"
          height="100%"
          style={{ border: "none" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZ4YsHJ-UaXOd2W95mXMNhrH2SJXNzUPU&q=${lat},${lng}&center=${lat},${lng}&zoom=6`}
          title="map"
        ></iframe>
      </div>

      <Sidebar />
    </section>
  )
}

export default DashBoard