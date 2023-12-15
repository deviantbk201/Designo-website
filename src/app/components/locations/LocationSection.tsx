import LocationContactCard from "./LocationContactCard";
import LocationMapBox from "./LocationMapBox";
import LocationsCard from "./LocationsCard";

export default function LocationSection() {
  const LocationData = [
    {
      dir: "ltr",
      id: 1,
      title: "Australia",
      address: {
        office: "Designo AU Office",
        street: "19 Balmore street",
        building: "NSW 2243",
      },
      contact: {
        tel: "(02) 6723 02392",
        mail: "contact@designo.au",
      },
      mapImage: "/locations/desktop/image-map-australia.png",
    },
    {
      dir: "rtl",

      id: 2,
      title: "United Kingdom",
      address: {
        office: "Designo UK Office",
        street: "19 Baker street",
        building: "Manchester city 2123",
      },
      contact: {
        tel: "(12) 1233 0222",
        mail: "contact@designo.uk",
      },
      mapImage: "/locations/desktop/image-map-australia.png",
    },
    {
      dir: "ltr",

      id: 3,
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
      mapImage: "/locations/desktop/image-map-australia.png",
    },
  ];

  return (
    <section className="grid grid-rows-[repeat(3 , minmax(auto,40vh))] lg:gap-y-8 gap-y-12">
      {LocationData.map((loc) => {
        if (loc.dir === "ltr")
          return (
            <LocationsCard direction="ltr" key={loc.id}>
              <LocationContactCard
                direction="ltr"
                address={loc.address}
                contact={loc.contact}
                title={loc.title}
              />
              <LocationMapBox
                imageSrc={loc.mapImage}
                imageAlt="map of loaction"
              />
            </LocationsCard>
          );
        if (loc.dir === "rtl")
          return (
            <LocationsCard direction="rtl" key={loc.id}>
              <LocationMapBox
                imageSrc={loc.mapImage}
                imageAlt="map of loaction"
              />
              <LocationContactCard
                direction="rtl"
                address={loc.address}
                contact={loc.contact}
                title={loc.title}
              />
            </LocationsCard>
          );
      })}
    </section>
  );
}
