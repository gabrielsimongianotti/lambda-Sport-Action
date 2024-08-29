CREATE TABLE player (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    borrowing BOOLEAN DEFAULT FALSE,
    matches_played INTEGER DEFAULT 0,
    team_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE divisions (
    id INTEGER PRIMARY KEY,
    rules VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE team (
    id INTEGER PRIMARY KEY,
    division_id INTEGER REFERENCES divisions(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE player_borrowing_eligibility (
    id INTEGER PRIMARY KEY,
    player_id INTEGER REFERENCES player(id),
    started BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rounds (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rounds_played (
    id INTEGER PRIMARY KEY,
    rounds_id INTEGER REFERENCES rounds(id),
    player_id INTEGER REFERENCES player(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


