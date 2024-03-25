"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [foodName, setFoodName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!foodName && !selectedType && !selectedMonth) {
      setErrorMessage("Preencha ao menos um campo");
      return;
    }

    const queryParams = `?food=${foodName}&type=${selectedType}&month=${selectedMonth}`;

    router.push(`/calendario/busca/${queryParams}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center gap-4 flex-col sm:flex-row mx-auto max-w-screen-xl">
        <input
          type="search"
          placeholder="Pesquisar"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="sm:w-1/2 px-4 py-2 rounded-lg border border-gray-200 shadow-md"
        />

        <select
          name="type"
          id="type"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="rounded-lg border-gray-200 shadow-md cursor-pointer"
        >
          <option value="">Tipo</option>
          <option value="FRUIT">Fruta</option>
          <option value="VEGETABLE">Vegetal</option>
        </select>

        <select
          name="type"
          id="type"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="rounded-lg border-gray-200 shadow-md cursor-pointer"
        >
          <option value="">Mês</option>
          <option value="01">Jan</option>
          <option value="02">Fev</option>
          <option value="03">Mar</option>
          <option value="04">Abr</option>
          <option value="05">Mai</option>
          <option value="06">Jun</option>
          <option value="07">Jul</option>
          <option value="08">Ago</option>
          <option value="09">Set</option>
          <option value="10">Out</option>
          <option value="11">Nov</option>
          <option value="12">Dez</option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-green-900 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Pesquisar
        </button>
      </form>
      {errorMessage && (
        <p className="text-green-900 text-center my-8">{errorMessage}</p>
      )}
    </>
  );
}
