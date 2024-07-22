import React, { useState } from "react";
import styled from "styled-components";
import { SEARCH_API } from "../api";

const Search = ({ setContents, setActive, setLoading }) => {
    const [SearchTerm, setSearchTerm] = useState([]);

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
        e.preventDefault();
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(SEARCH_API + SearchTerm)
            .then((res) => res.json())
            .then((data) => {
                setContents(data.results);
                setLoading(false);
            });
        setActive(0);
        setSearchTerm("");
    };

    return (
        <StyledSearch>
            <form onSubmit={handleOnSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search..."
                    value={SearchTerm}
                    onChange={handleOnChange}
                />
            </form>
        </StyledSearch>
    );
};

const StyledSearch = styled.div`
    width: 100%;
    input {
        outline: none;
        text-decoration: none;
        ::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }
        :focus::placeholder {
            color: transparent;
        }
    }
    .search-bar {
        padding: 0.7rem 9rem 0.7rem 1rem;
        background: none;
        border: 0.01em solid rgba(255, 188, 85, 1);
        border-radius: 100px;
        color: white;
    }
`;

export default Search;
