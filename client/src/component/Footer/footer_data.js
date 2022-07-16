import { AboutUs } from "../InfoPages/AboutUs";
import { Partners } from "../InfoPages/Partners";
import { Payment } from "../InfoPages/Payment";
import { Plug } from "../Footer/footer_components";

const SLOGAN = "Фабрика «LORI» – український виробник, вропейська якість!";

const INFO = {
    title: "Інформація",
    links: [
        { title: "Про нас", url: "about_us", component: AboutUs },
        { title: "Партнери", url: "partners", component: Partners },
        { title: "Вакансії", url: "career", component: "" },
    ],
};

const FOR_CLIENTS = {
    title: "Покупцям",
    links: [
        { title: "Гарантія", url: "guarantee", component: Plug },
        { title: "Оплата та доставка", url: "payment", component: Payment },
        { title: "Обмін та повернення", url: "refund", component: "" },
        { title: "Кредит та оплата частинами", url: "credit", component: "" },
    ],
};

const CONTACTS = {
    title: "Контакти",
    adress: "м. Полтава, вул. Визволення, 26",
    email: "info@lori.com.ua",
};

export { SLOGAN, INFO, FOR_CLIENTS, CONTACTS };