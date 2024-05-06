import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Textarea, Divider } from "@nextui-org/react";
import { contactSchema } from "@schemas/ContactSchema";
import { IContactForm } from "@components/interfaces/IContactForm";

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      className="w-full bg-cover bg-center relative flex items-center justify-center p-28"
      style={{
        backgroundImage: "url(/contact-form-bg.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container">
        <h1 className="text-5xl font-bold text-primary mb-4 text-center">
          Contáctanos
        </h1>
        <div className="flex justify-center">
          <Divider className="my-10 w-[100px] hover:w-[150px] bg-primary-500 py-[1px] ease-out hover:ease-in duration-300" />
        </div>
        <div className="flex justify-center">
          <form
            className="w-full max-w-screen-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-6">
              <Input
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nombre"
                variant="bordered"
                {...register("name")}
                className="rounded-none"
                isInvalid={Boolean(errors.name)}
                errorMessage={errors.name?.message}
              />
              <Input
                fullWidth
                color="primary"
                size="lg"
                type="email"
                placeholder="Correo Electrónico"
                variant="bordered"
                {...register("email")}
                className="rounded-none"
                isInvalid={Boolean(errors.email)}
                errorMessage={errors.email?.message}
              />
              <Textarea
                fullWidth
                color="primary"
                size="lg"
                placeholder="Mensaje"
                variant="bordered"
                {...register("message")}
                className="rounded-none"
                isInvalid={Boolean(errors.message)}
                errorMessage={errors.message?.message}
              />
              <div className="text-center">
                <Button
                  type="submit"
                  color="secondary"
                  variant="ghost"
                  size="lg"
                  className="rounded-none"
                >
                  Enviar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
