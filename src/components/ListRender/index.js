import { ListCard } from "../ListCard";
import "./index.css";

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <h3>
        Sua lista vazia, clique no botão "Adicionar" para incluir novos items.
      </h3>
    );
  }

  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </div>
  );
};
