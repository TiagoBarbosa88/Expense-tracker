import { useState, useEffect } from "react";
import React from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth } from "./helpers/dateFilter";

const App = () => {
	const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

	return (
		<C.Container>
			<C.Header>
				<C.HeaderText>Finances</C.HeaderText>
			</C.Header>
			<C.Body>
				{/* Área de informações */}

				{/* Área de inserção */}

				{/* Área de itens */}
			</C.Body>
		</C.Container>
	);
};

export default App;
