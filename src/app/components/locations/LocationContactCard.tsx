import Heading from "../Heading";

type LocationContactCardPropsType = {
  title: string;
  address: {
    office: string;
    street: string;
    building: string;
  };
  contact: {
    tel: string;
    mail: string;
  };
};

export default function LocationContactCard({
  title,
  contact,
  address,
}: LocationContactCardPropsType) {
  return (
    <div
      className={`flex items-center justify-center  bg-lightestPeach rounded-2xl lg:row-start-1 row-start-2 row-end-[-1] py-4 `}
    >
      <div className="flex flex-col gap-4">
        <Heading as="h2" styles="text-peach text-center lg:text-start">
          {title}
        </Heading>
        <div className="flex gap-12  items-center">
          <div className="flex lg:gap-48 gap-24">
            <address>
              <span className="block font-bold"> {address.office}</span>
              <span className="block">{address.street} </span>
              <span className="block"> {address.building} </span>
            </address>
            <div className="flex flex-col ">
              <p className="font-bold">Contact</p>
              <div>
                <p>
                  P: <a href="tel:123-454-6344">{contact.tel}</a>
                </p>
                <p>
                  M: <a href="mailto:someone@example.com">{contact.mail}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
