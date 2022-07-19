import * as S from "./styles";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { At, User } from "tabler-icons-react";
import { Button } from "@ui";
import Image from "next/image";
import mail from "public/images/mail.svg";
import phone from "public/images/phone.svg";
import fb from "public/images/fb.svg";
import ig from "public/images/ig.svg";
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
    "onlyvansusti@gmail.com": mail,
    "+420 604 283 132": phone,
    "OnlyVans Půjčovna dodávek Ústí nad Labem": fb,
    "OnlyVans Ústí nad Labem": ig,
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
        <h2>Smluvní podmínky</h2>{" "}
        <h3>Požadované doklady pro pronájem vozidla:</h3>
        <h4>Fyzická osoba:</h4>{" "}
        <ul>
          <li>Doklad totožnosti – občanský průkaz nebo pas </li>
          <li>Řidičský průkaz</li>
        </ul>
        <h4>Fyzická osoba podnikající nebo právnická osoba:</h4>
        <ul>
          <li>Živnostenský list</li>
          <li>Výpis z obchodního rejstříku</li>
          <li>
            Doklad totožnosti – občanský průkaz a řidičský průkaz statutárního
            zástupce společnosti
          </li>
          <li>
            Plná moc podepsaná statutárním zástupcem společnosti v případě, kdy
            vozidlo vyzvedává jiná osoba
          </li>
          <li>
            Doklad totožnosti – občanský průkaz a řidičský průkaz této osoby
          </li>
        </ul>{" "}
        <h4>Způsoby platby: </h4>
        <ul>
          <li>platby pouze v hotovosti včetně vratné kauce</li>
        </ul>
        <h4>Pravidla pronájmu dodávky u OnlyVans:</h4> Po dobu trvání pronájmu
        dodávky nájemce za vozidlo ručí jako by bylo jeho vlastní. Nájemce
        přebírá zodpovědnost za veškeré škody vzniklé během doby trvání pronájmu
        vozidla. Platby pouze předem v hotovosti, a to včetně vratné kauce,
        která bude nájemci vrácena při vrácení vozidla ve stavu, v jakém jej
        nájemce od pronajímatele přebíral, včetně veškerého vybavení. Dodávky
        jsou zapůjčeny s plnou nádrží. Nájemce je povinen vrátit dodávku taktéž
        s plnou nádrží. Nájemce není oprávněn vozidlo pronajímat třetí osobě.
        Taktéž není povoleno předat k užívání vozidlo dalším osobám, pokud
        nebyly zmíněny ve smlouvě. Další osoba oprávněna řídit dodávku musí při
        podpisu smlouvy předložit občanský a řidičský průkaz.
      </Modal>
      <S.Col>
        <S.Form
          style={{}}
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
        </S.Form>
      </S.Col>
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
              <Image src={img} height="20" width="20" alt="icon" />
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
    </S.Wrap>
  );
}
