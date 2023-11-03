package com.accesspoint.factorylayout;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name = "layout")
public
class Layout {
    /*
    Field Properties
     */
    @Id
    public Long layout_id;
    public String name;

    public void setLayoutId(Long layoutId) {
        this.layout_id = layoutId;
    }

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
            grid[cell.column_index][cell.row_index] = cell;
        }

        return grid;
    }

}

