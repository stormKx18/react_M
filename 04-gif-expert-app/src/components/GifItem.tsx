interface Props {
  id: string;
  url: string;
  title: string;
}

export const GifItem = ({ url, title }: Props) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
