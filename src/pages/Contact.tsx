import DynamicBG from "@common/DynamicBG";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import ContactInfo from "@components/Contact/ContactInfo";
import ContactForm from "@components/Contact/ContactForm";
const Contact = () => {
  return (
    <>
      <MainNavbar />
      <DynamicBG
        url={"/contact-bg.webp"}
        title={
          <h1 className="text-5xl font-bold text-primary mb-4">Contacto</h1>
        }
        description={
          <p className="text-2xl text-white">
            ¡Me encantará crear contigo una experiencia
            <br />
            <b>increíble para tu marca y tus clientes</b>!
          </p>
        }
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default Contact;
