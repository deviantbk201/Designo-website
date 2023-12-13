import LocationContactCard from "../locations/LocationContactCard";

export default function FooterLocationCard() {
  const locationData = {
    title: "Canada",
    address: {
      office: "Designo Central Office",
      street: "19 vancouver street",
      building: "Vel tel tower 17-13-13-14",
    },
    contact: {
      tel: "(02) 6723 04572",
      mail: "contact@designo.central",
    },
  };

  return (
    <div
      className={`flex items-center justify-center  text-slate-500 rounded-2xl `}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-12 items-center">
          <div className="flex gap-32">
            <address>
              <span className="block font-bold"> Designo Central Office</span>
              <span className="block">19 vancouver street</span>
              <span className="block"> veltel tower 17-3-14 </span>
            </address>
            <div className="flex flex-col ">
              <p className="font-bold">Contact</p>
              <div>
                <p>
                  P: <a href="tel:123-454-6344"> (02)-6723-04572</a>
                </p>
                <p>
                  M:{" "}
                  <a href="mailto:someone@example.com">
                    contact@designo.central
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
