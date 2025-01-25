import React from "react";
import Menu from "./Menu";
import styles from "./assets/components/App.module.css";

function App() {
  const meny = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/048/947/325/non_2x/spaghetti-bolognese-on-plate-on-a-transparent-background-png.png",
      id: 1,
      tittel: "Spaghetti Bolognese",
      pris: "159 kr",
      ingredienser: "Spaghetti, kjøttsaus, parmesan",
      kategori: "Hovedrett",
    },
    {
      img: "",
      id: 2,
      tittel: "Kremet Kyllingsuppe",
      pris: "129 kr",
      ingredienser: "Kylling, fløte, gulrøtter, selleri",
      kategori: "Forrett",
    },
    {
      img: "",
      id: 3,
      tittel: "Margarita Pizza",
      pris: "169 kr",
      ingredienser: "Tomatsaus, mozzarella, basilikum",
      kategori: "Hovedrett",
    },
    {
      img: "",
      id: 4,
      tittel: "Sushi Mix",
      pris: "229 kr",
      ingredienser: "Laks, tunfisk, reker, ris",
      kategori: "Hovedrett",
    },
    {
      img: "",
      id: 5,
      tittel: "Cæsarsalat",
      pris: "139 kr",
      ingredienser: "Romanosalat, kylling, parmesan, dressing",
      kategori: "Forrett",
    },
    {
      img: "",
      id: 6,
      tittel: "Brownie med Is",
      pris: "89 kr",
      ingredienser: "Brownie, vaniljeis, sjokoladesaus",
      kategori: "Dessert",
    },
    {
      img: "",
      id: 7,
      tittel: "Taco Tallerken",
      pris: "199 kr",
      ingredienser: "Kjøttdeig, mais, ost, guacamole",
      kategori: "Hovedrett",
    },
    {
      img: "",
      id: 8,
      tittel: "Pannekaker med Syltetøy",
      pris: "99 kr",
      ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
      kategori: "Dessert",
    },
    {
      img: "",
      id: 9,
      tittel: "Reker med Sitron",
      pris: "149 kr",
      ingredienser: "Reker, sitron, dill, brød",
      kategori: "Forrett",
    },
    {
      img: "",
      id: 10,
      tittel: "Entrecôte med Grønnsaker",
      pris: "289 kr",
      ingredienser: "Entrecôte, asparges, poteter, peppersaus",
      kategori: "Hovedrett",
    },
  ];

  return (
    <div>
      <header>
        <h1>Meny</h1>
      </header>
      <main className={styles.mainClass}>
        <h2>Forrett</h2>
        <div className={styles.cardRow}>
          <Menu dishes={meny.filter((dish) => dish.kategori == "Forrett")} />
        </div>
        <h2>Hovedrett</h2>
        <div className={styles.cardRow}>
          <Menu dishes={meny.filter((dish) => dish.kategori == "Hovedrett")} />
        </div>
        <h2>Dessert</h2>
        <div className={styles.cardRow}>
          <Menu dishes={meny.filter((dish) => dish.kategori == "Dessert")} />
        </div>
      </main>
    </div>
  );
}

export default App;
