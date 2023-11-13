package com.accesspoint.factorylayout;





//NonNull is provided by default by package-info


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "layout")


public class Layout {
    /*
    Field Properties
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "layout_id")
    private Long layout_id;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    private Direction direction;


    /*
    Relationships
    */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "layout", fetch = FetchType.EAGER, orphanRemoval = true)
    public List<Cell> cells;



    /*
   Constructor
      */

    public Layout() {}

    public Layout(String name, Direction direction) {
        this.name = name;
        this.direction = direction;
    }

        /*
   Getter and setter
      */

    public Long getLayout_id() {
        return layout_id;
    }

    public void setLayout_id(Long layout_id) {
        this.layout_id = layout_id;
    }

    public List<Cell> getCells() {
        return cells;
    }

    public void setCells(List<Cell> cells) {
        this.cells = cells;
    }

    @Override
    public String toString() {
        return "Layout{" +
                "layout_id=" + layout_id +
                ", name='" + name + '\'' +
                ", direction=" + direction +
                ", cells=" + cells +
                '}';
    }

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

