import { v4 as uuidv4 } from "uuid";

function projects() {
    return [
        {
            name: "GameTown",
            type: "REACT",
            cover: "https://utfs.io/f/4f5b31ca-71c5-4942-a0d0-55d28b712eed-1mqyur.png",
            id: uuidv4(),
            link: "/work/react/gametown",
            date: "April 2021",
            description:
                "This gaming blog lists trending, popular and upcoming video games while further showing the details of the game on click. It fetches the gaming data from the api provided by rawg.io and uses Redux to manage state.",
            big: "https://utfs.io/f/4f5b31ca-71c5-4942-a0d0-55d28b712eed-1mqyur.png",
            bg: "#DDC9E8",
        },

        {
            name: "Smart RCO",
            type: "UX / UI",
            cover: "https://utfs.io/f/b50cdaae-c627-4bb0-a0af-9e566da213e3-2ezi.png",
            id: uuidv4(),
            link: "/work/ux/rco",
            date: "March 2020 - October 2020",
            description:
                "How should the tedious task of ad bidding be automated?",
            big: "https://utfs.io/f/b50cdaae-c627-4bb0-a0af-9e566da213e3-2ezi.png",
            bg: "#F2F7FE",
        },

        {
            name: "Rangeen",
            type: "JAVASCRIPT",
            cover: "https://utfs.io/f/22f05f8f-48e9-4ff9-8ff0-c02bf88d90c4-g69okm.png",
            id: uuidv4(),
            date: "March 2021",
            external: "https://vishalthakur-rangeen.netlify.app/",
            description:
                "A website to generate, customize and save color palettes",
            big: "https://utfs.io/f/22f05f8f-48e9-4ff9-8ff0-c02bf88d90c4-g69okm.png",
            bg: "#F3F9FF",
        },
        {
            name: "HYMN Music",
            type: "REACT",
            cover: "https://utfs.io/f/457b471f-1a8b-419a-9301-faaa8648ab58-mt6hxq.png",
            id: uuidv4(),
            link: "/work/react/hymn",
            date: "March 2021",
            description:
                "A minimal music player which loops through a native content library, using React Hooks for state management.",
            big: "https://utfs.io/f/457b471f-1a8b-419a-9301-faaa8648ab58-mt6hxq.png",
            bg: "#FFE3CD",
        },
        {
            name: "Pictel",
            type: "JAVASCRIPT",
            cover: "https://utfs.io/f/7020eb39-e6ef-4d82-9cd7-f1ac74bade48-gciban.png",
            id: uuidv4(),
            external: "https://vishalthakur-pictel.netlify.app/",
            date: "March 2021",
            description:
                "Find royalty free stock images and videos. Data fetched through the api provided by pexels.com",
            big: "https://utfs.io/f/7020eb39-e6ef-4d82-9cd7-f1ac74bade48-gciban.png",
            bg: "#EAFDFF",
        },
        {
            name: "CinePhile",
            type: "REACT",
            cover: "https://utfs.io/f/15de76e3-957b-4f6e-9ca9-c4b703c6f21a-qhgxt9.png",
            id: uuidv4(),
            link: "/work/react/cinephile",
            date: "May 2021",
            description:
                "A website to discover trending shows and tv series. This project fetches the movie data from the api provided by themoviedb.org and uses React Hooks to manage state.",
            big: "https://utfs.io/f/15de76e3-957b-4f6e-9ca9-c4b703c6f21a-qhgxt9.png",
            bg: "#EEDDA5",
        },
        {
            name: "Nomos",
            type: "UX / UI",
            cover: "https://utfs.io/f/4d3754ca-9bed-4ac9-87f0-1bbda79d5644-n03eq8.png",
            id: uuidv4(),
            link: "/work/ux/nomos",
            date: "December 2020",
            description:
                "How can 1 person manage 2000 autonomous delivery vehicles?",
            big: "https://utfs.io/f/4d3754ca-9bed-4ac9-87f0-1bbda79d5644-n03eq8.png",
            bg: "#E1ECF5",
        },
        {
            name: "ToDo List",
            type: "JAVASCRIPT",
            cover: "https://utfs.io/f/32766448-571a-4ba2-a67c-a8b6451daf1c-j0rzly.png",
            id: uuidv4(),
            external: "https://vishalthakur-todo.netlify.app/",
            date: "March 2021",
            description: "A minimal ToDo List with custom css animations.",
            big: "https://utfs.io/f/32766448-571a-4ba2-a67c-a8b6451daf1c-j0rzly.png",
            bg: "#4E8BAB",
        },
        {
            name: "OBS Visualizer",
            type: "UX / UI",
            cover: "https://utfs.io/f/303fd8dd-c564-4af3-96c1-7a994261a955-2cqo.png",
            id: uuidv4(),
            link: "/work/ux/obs",
            date: "February 2020 - November 2020",
            description:
                "How should tagged sports video’s be visualized for fast quality checking?",
            big: "https://utfs.io/f/303fd8dd-c564-4af3-96c1-7a994261a955-2cqo.png",
            bg: "#FEF6FF",
        },
    ];
}

export default projects;
