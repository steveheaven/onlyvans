import * as S from "./styles";
import { Input, Modal, Textarea } from "@mantine/core";
import { At, User } from "tabler-icons-react";
import { Button } from "@ui";
import Image from "next/image";
import mail from "public/images/mail.svg";
import phone from "public/images/phone.svg";
import fb from "public/images/fb.svg";
import schedule from "public/images/schedule.svg";
import logo from "public/images/logo-white.svg";
import { useState } from "react";

export default function Contact() {
  const [termsModalIsOpen, setTermsModalIsOpen] = useState(false);

  const contactInfo = {
    "jan.kapoun@dodavkyusti.cz": mail,
    "+420 721 167 442": phone,
    "onlyvans-usti": fb,
    "9:00 - 18:00 PO - NE": schedule,
  };

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
        <form onSubmit={() => console.log("Submitted!!!")}>
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
              <Input icon={<User />} placeholder="Jméno" size="lg" />
              <Input icon={<At />} placeholder="Váš e-mail" size="lg" />
              <Textarea
                // icon={<List />}
                placeholder="Váše zpráva..."
                required
                size="lg"
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
