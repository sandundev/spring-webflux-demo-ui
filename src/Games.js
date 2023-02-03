import React, {useState, useEffect} from 'react';

const Games = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const events = new EventSource("http://localhost:8080/games");

        events.onmessage = event => {
            const game = JSON.parse(event.data);
            setGames(prevGames => [...prevGames, game]);
        };
        events.onerror = (error) => {
            console.log("Stream ended!");
            events.close();
        }
        return () => {
            events.close();
        };
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>PS 5 Game</th>
            </tr>
            </thead>
            <tbody>
            {games.map((game) => (
                <tr key={game.id}>
                    <td>{game.id}</td>
                    <td>{game.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Games;
