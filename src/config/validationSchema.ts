import * as Yup from "yup";

//TODO: organize depending on trip type

export default Yup.object().shape({
  name: Yup.string().required("Nie można nie mieć imienia."),
  surname: Yup.string().required("Chyba jakieś masz?"),
  email: Yup.string()
    .required("I jak niby mamy się z tobą skontaktować?")
    .email("To ma być e-mail?"),
  rodoApproval: Yup.bool().oneOf(
    [true],
    "Niestety, bez tego ani rusz, ani płyń."
  ),
  student: Yup.mixed().notOneOf([null], "No masz czy nie?"),
  beer: Yup.bool().oneOf(
    [true],
    "Wiemy, że lubisz Specjala, ale tam tylko Φιξ leją."
  ),
  // dateBirth: Yup.date().required(
  //   "Wiemy, o wiek się nie pyta, ale to naprawdę istotne!"
  // ),
  // birthplace: Yup.string().required(
  //   "Jeśli znaleźli Cię w główce kapusty, to chociaż powiedz gdzie dokładnie!"
  // ),
  // country: Yup.string().required("No nie wstydź się, powiedz gdzie mieszkasz."),
  // city: Yup.string().required(
  //   "Jak się wstydzisz miejscowości, to daj chociaż najbliższą aglomerację!"
  // ),
  // idCardNumber: Yup.string().required(
  //   "Jak tego nie podasz, to jak mamy wziąć na Ciebie kredyt w Providencie?"
  // ),
  // nationality: Yup.string().required("A Ty co? Apartyda?"),
  isTravelling: Yup.mixed()
    .nullable()
    .notOneOf(
      [null],
      "Sprawa jest prosta - albo jedziesz z nami albo na własną rękę."
    ),
  transportationReturn: Yup.string()
    .nullable()
    .when("isTravelling", {
      is: true,
      then: Yup.string().required(
        "KAŻDY uczestnik ma wrócić do domu. No nie zżymaj się i odhacz."
      ),
    }),
  transportationOutbound: Yup.string()
    .nullable()
    .when("isTravelling", {
      is: true,
      then: Yup.string().required(
        "A Ty co? Pojawiasz się znikąd? Weź coś zaznacz."
      ),
    }),
  // hasBLicence: Yup.mixed()
  //   .nullable()
  //   .notOneOf([null], "Można nie mieć, ale nie można tego nie powiedzieć!"),
  // hasSRC: Yup.mixed()
  //   .nullable()
  //   .notOneOf([null], "Jak nie wiesz, co to jest, to kliknij, że nie."),
  sailingLicence: Yup.mixed().oneOf(
    ["NONE", "ŻJ", "JSM", "KJ"],
    "Można nie mieć, ale to też zaznacz!"
  ),
  sailingExperience: Yup.mixed().oneOf(
    ["1", "2", "3", "4", "5"],
    "Twój przyszły sternik chce wiedzieć, czego nie może się po tobie spodziewać. No weź."
  ),
  // tshirtSize: Yup.mixed().oneOf(
  //   ["S", "M", "L", "XL", "XXL"],
  //   "Nie wstydź się, podaj rozmiar, nie będziemy się śmiać."
  // ),
  skills: Yup.string(),
  whatCanYouTake: Yup.string(),
  politics: Yup.mixed().oneOf(
    ["1", "2", "3", "4", "5"],
    "Wiemy, że jakieś poglądy masz. Nie krępuj się."
  ),
  diet: Yup.bool().oneOf(
    [true],
    "To twoja ostatnia szansa, żeby poinformować nas, że jesteś freeganem."
  ),
  comments: Yup.string(),
});
