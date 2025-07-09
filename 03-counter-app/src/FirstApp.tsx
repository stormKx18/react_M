const getSaludo = (userName) => {
  return `Hola ${userName}`;
};

interface Props {
  title: string;
  x: number;
}

export const FirstApp = ({ title = "Home", x = 0 }: Props) => {
  return (
    <>
      <h1>Christian Jaime</h1>
      <p>Soy un parrafo</p>
      <p>{getSaludo("Victor")}</p>
      <h2>{title}</h2>
      <p>{x + 2}</p>
    </>
  );
};
