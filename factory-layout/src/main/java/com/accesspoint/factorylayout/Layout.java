package com.accesspoint.factorylayout;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name = "layout")
class Layout {
    /*
    Field Properties
     */
    public Long layoutID;
    public String name;
    public Direction direction;

    /*
    Relationships
     */
    public List<Cell> cells;


    /*
    How to convert rows and columns to an array of arrays
     */
    public Cell[][] getGrid() {
        Cell[][] grid = new Cell[9][9];

        for (Cell cell: this.cells) {
            grid[cell.column_index][cell.row_index] = cell;
        }

        return grid;
    }
}

