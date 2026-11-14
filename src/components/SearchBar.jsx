import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));

    setText("");
  };

  return (
    <div className="bg-(--c2)">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-5 p-10"
      >
        <input
          className="border-2 px-4 py-2 text-xl rounded outline-none w-full"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          required
          placeholder="Search anything..."
        />

        <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
