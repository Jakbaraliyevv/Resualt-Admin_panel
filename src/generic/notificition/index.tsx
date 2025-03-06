import { notification } from "antd";

type NotificationType = string;

const notificationApi = () => {
  const notify = ({
    type,
    message1,
    message2,
  }: {
    type: NotificationType;
    message1?: NotificationType;
    message2?: NotificationType;
  }) => {
    switch (type) {
      case "full":
        return notification.error({
          message: "Iltimos, barcha maydonlarni to‘ldiring!",
        });
      case "login":
        return notification.success({
          message: "Tizimga muvaffaqiyatli kirdingiz!",
        });
      case "notEmail2":
        return notification.error({
          message: "Email yoki parol xato!",
        });
      case "register":
        return notification.success({
          message: "Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!",
        });
      case "registerError":
        return notification.error({
          message: "user allaqachon mavjud!",
        });
      case "emailSent":
        return notification.success({
          message: "Emailga tasdiqlash kodi yuborildi!",
        });
      case "emailNotFound":
        return notification.error({
          message: "Bunday email topilmadi!",
        });
      case "invalidCredentials":
        return notification.error({
          message: "Email yoki parol noto‘g‘ri!",
        });
      case "invalidEmailFormat":
        return notification.error({
          message: "Email formati noto‘g‘ri!",
        });
      case "wrongCode":
        return notification.error({
          message: "Tasdiqlash kodi xato!",
        });
      case "correctCode":
        return notification.success({
          message: "Tasdiqlash kodi to‘g‘ri!",
        });
      case "passwordUpdated":
        return notification.success({
          message: "Parol muvaffaqiyatli yangilandi!",
        });
      case "forma":
        return notification.error({
          message: "Email formati noto'g'ri!",
        });
      case "passwordWrong":
        return notification.error({
          message: "Password 6 tadan kop bolishi kerak!",
        });
      case "suscessverfy":
        return notification.success({
          message: message1,
        });
      case "errorCod":
        return notification.error({
          message: message2,
        });

      default:
        return notification.info({
          message: "Noma’lum holat yuz berdi!",
        });
    }
  };
  return notify;
};

export default notificationApi;
