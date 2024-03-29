import { Button } from "./Button";
import { Items, ReactSetState } from "./types/utils";

type ItemsList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

export default function List({ items, setItems }: ItemsList) {
  const handleDelete = (value: string) => {
    setItems((prev) => prev.filter((data) => data.id !== value));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between py-2 border border-slate-200 pl-2 mb-2 mr-1"
    >
      <p className="text-white">{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
          <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
        </svg>
      </Button>
    </div>
  ));
}
