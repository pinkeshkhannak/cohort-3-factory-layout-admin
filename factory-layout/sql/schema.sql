CREATE SCHEMA IF NOT EXISTS "schema.sql"

AUTHORIZATION "JavaWarriors";

CREATE TYPE Direction AS ENUM ('NORTH', 'SOUTH', 'EAST', 'WEST');

CREATE TYPE CellState AS ENUM ('OPEN', 'WALL', 'START', 'END');

CREATE TABLE layout (
    layout_id BIGSERIAL PRIMARY KEY,
    name TEXT,
    direction Direction
);

CREATE TABLE cell (
    layout_id BIGSERIAL,
    column_index INTEGER,
    row_index INTEGER,
    cell_state CellState,
    FOREIGN KEY (layout_id) REFERENCES layout(layout_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX ONLY_ONE_START_UNIQUE_INDEX ON cell(layout_id, cell_state) WHERE cell_state = 'START';

CREATE UNIQUE INDEX ONLY_ONE_END_UNIQUE_INDEX ON cell(layout_id, cell_state) WHERE cell_state = 'END';

