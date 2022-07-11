import * as S from "./styles";
import { TextInput, Modal, Textarea } from "@mantine/core";
import { At, User } from "tabler-icons-react";
import { Button } from "@ui";
import Image from "next/image";
import mail from "public/images/mail.svg";
import phone from "public/images/phone.svg";
import fb from "public/images/fb.svg";
import schedule from "public/images/schedule.svg";
import logo from "public/images/logo-white.svg";
import { useEffect, useState } from "react";
import { sendEmail, TemplateId, TemplateParams } from "src/utils/sendEmail";
import { useForm } from "@mantine/form";
import gsap from "gsap";
import theme from "src/theme";

export default function Contact() {
  const [termsModalIsOpen, setTermsModalIsOpen] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Neplatný e-mail"),
      message: (value) => (value.length > 0 ? null : "Vyplňte zprávu"),
      name: (value) => (value.length > 2 ? null : "Příliš krátké jméno"),
    },
  });

  const name = form.getInputProps("name").value;
  const fromEmail = form.getInputProps("email").value;
  const message = form.getInputProps("message").value;

  const contactInfo = {
    "honzakapoun@email.cz": mail,
    "+420 721 167 442": phone,
    "onlyvans-usti": fb,
    "9:00 - 18:00 PO - NE": schedule,
  };

  const templateParams: TemplateParams = {
    fromEmail,
    name,
    message,
  };

  useEffect(() => {
    gsap.install({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 50%",
        onEnter: () => {
          gsap.set(".contact", {
            color: theme.colors.primary,
            fontWeight: "bold",
          });
        },
        onEnterBack: () => {
          gsap.set(".contact", {
            color: theme.colors.primary,
            fontWeight: "bold",
          });
        },
      },
    });
  }, []);

  return (
    <S.Wrap id="contact">
      <Modal
        opened={termsModalIsOpen}
        onClose={() => setTermsModalIsOpen(false)}
        size="lg"
      >
        Smluvni podminky TBD...
      </Modal>
      <S.Col>
        <h1>
          <strong>Kontakt</strong>
        </h1>
        <div>
          {Object.entries(contactInfo).map(([key, img]) => (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
                width: "100%",
              }}
            >
              <Image src={img} height="20" width="20" />
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {key}
              </div>
            </div>
          ))}
        </div>

        <u
          onClick={() => setTermsModalIsOpen(true)}
          style={{
            cursor: "pointer",
          }}
        >
          Smluvní podmínky
        </u>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "13%",
          }}
        >
          <div>© {new Date().getFullYear()} Onlyvans s.r.o.</div>
          <Image src={logo} height="20" width="20" />
        </div>
      </S.Col>
      <S.Col>
        <form
          onSubmit={form.onSubmit(() =>
            sendEmail(templateParams, TemplateId.QUESTION)
          )}
        >
          <div style={{ width: "80%" }}>
            <h2 style={{ textAlign: "center" }}>
              Kontaktujte nás kdykoli budete chtít, pokusíme se odpovědět co
              nejdříve to bude možné.
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                height: "220px",
              }}
            >
              <TextInput
                icon={<User />}
                placeholder="Jméno"
                size="lg"
                required
                {...form.getInputProps("name")}
              />
              <TextInput
                icon={<At />}
                placeholder="Váš e-mail"
                size="lg"
                {...form.getInputProps("email")}
                required
              />
              <Textarea
                placeholder="Váše zpráva..."
                required
                size="lg"
                {...form.getInputProps("message")}
              />
            </div>
            <Button
              type="submit"
              color="red"
              fullWidth
              style={{ marginTop: 30 }}
              size="lg"
              $custConf="primary"
            >
              Odeslat
            </Button>
          </div>
        </form>
      </S.Col>
    </S.Wrap>
  );
}
