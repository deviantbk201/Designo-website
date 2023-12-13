import { Button, Input, Textarea } from "@nextui-org/react";

type FormInputPropType = {
  label: string;
};
function FormInput({ label }: FormInputPropType) {
  return (
    <Input
      fullWidth
      label={label}
      variant="underlined"
      labelPlacement="inside"
      isRequired
      classNames={{
        label: "text-white",
        input: "text-white bg-transparent ",
        inputWrapper: "text-white ",
      }}
    />
  );
}

export default function ContactForm() {
  return (
    <form className="px-4 flex flex-col gap-12">
      <div>
        <FormInput label="name" />
      </div>
      <div>
        <FormInput label="email" />
      </div>
      <div>
        <FormInput label="phone" />
      </div>
      <div>
        <Textarea
          isRequired
          variant="underlined"
          label="Your Message"
          labelPlacement="inside"
          classNames={{
            label: "text-white",
            input: "text-white bg-transparent ",
            inputWrapper: "text-white ",
          }}
        />
      </div>
      <div>
        <Button type="submit" className="bg-lightestPeach text-peach">
          get it done
        </Button>
      </div>
    </form>
  );
}
