package com.accesspoint.factorylayout;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

//NonNull is provided by default by package-info


import java.util.List;
//
//@Data
//@Entity
@Table(name = "layout")

public class Layout {
    /*
    Field Properties
     */
    @Id
    public Long layout_id;

    public String name;

    @Enumerated(EnumType.STRING)

    public Direction direction;

    /*
    Relationships
     */
    @OneToMany()
    public List<Cell> cells;


    /*
    How to convert rows and columns to an array of arrays
     */
    public Cell[][] getGrid() {
        Cell[][] grid = new Cell[9][9];

        for (Cell cell: this.cells) {
            grid[cell.getColumn_index()][cell.getRow_index()] = cell;
        }

        return grid;
    }

}

