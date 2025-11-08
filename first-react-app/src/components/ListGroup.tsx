// Importamos el hook useState de React que nos permite manejar estado en componentes funcionales
import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: { (item: string): void };
}

// Definimos un componente funcional llamado ListGroup
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // useState devuelve un array con dos elementos:
  // 1. selectedIndex: el valor actual del estado
  // 2. setSelectedIndex: función para actualizar el estado
  // El -1 es el valor inicial y significa que ningún ítem está seleccionado
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // El componente retorna elementos JSX
  return (
    // <> es un Fragment de React, permite agrupar elementos sin añadir nodos extra al DOM
    <>
      {/* Título simple */}
      <h1>{heading}</h1>

      {/* Operador && para renderizado condicional: 
          Si items.length es 0, muestra "No items found" */}
      {items.length === 0 && <p>No items found</p>}

      {/* Lista usando clases de Bootstrap */}
      <ul className="list-group">
        {/* Mapea cada item del array a un elemento de lista */}
        {items.map((item, index) => (
          <li
            // Ctase condicional: si el ítem está seleccionado (selectedIndex === index)
            // se aplica la clase 'active', si no, solo 'list-group-item'
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // key es necesario para que React identifique cada elemento de forma única
            key={item}
            // Cuando se hace click, actualiza selectedIndex con el índice del ítem clickeado
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {/* Muestra el nombre de la ciudad */}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// Exporta el componente para poder usarlo en otros archivos
export default ListGroup;
