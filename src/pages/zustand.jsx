import React, { useEffect } from "react";
import create from "zustand";
import "./zustand.scss";

const POKEMON_URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

const useStore = create((set) => ({
  filter: "",
  pokemon: [],
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setPokemon: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
    })),
}));

const FilterInput = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
};

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);

  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name: { english }, type }) => (
            <tr key={id}>
              <td>{english}</td>
              <td>{type.join(", ")}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const Zustandigkeit = () => {
  const setPokemon = useStore((state) => state.setPokemon);

  useEffect(() => {
    fetch(POKEMON_URL)
      .then((resp) => resp.json())
      .then((pokemon) => setPokemon(pokemon));
  });

  return (
    <div style={{ width: "800px", margin: "auto", textAlign: "center" }}>
      <div>
        <FilterInput />
        <h1>List of Pokemons</h1>
        <PokemonTable />
      </div>
    </div>
  );
};

export default Zustandigkeit;
