import { email } from "src/config";
import { send } from "@emailjs/browser";
import { showNotification } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";

export type TemplateParams = {
  fromEmail: string;
  name: string;
  carName?: string;
  from?: string;
  to?: string;
  message?: string;
};
export enum TemplateId {
  QUESTION = "template_jx3mr2i",
  RESERVATION = "template_n7s7tuc",
}

export const sendEmail = (params: TemplateParams, templateId: TemplateId) => {
  const { SERVICE_ID: sid, USER_ID: uid } = email;
  send(sid, templateId, params, uid)
    .then(() =>
      showNotification({
        message: "Váš dotaz byl odeslán :)",
        icon: <Check size={18} />,
        autoClose: 5000,
        color: "teal",
      })
    )
    .catch(() =>
      showNotification({
        message:
          "Omlouváme se, ale vyskytla se chyba v odesílání, zkuste to prosím později.",
        icon: <X size={18} />,
        autoClose: 5000,
        color: "red",
      })
    );
};
