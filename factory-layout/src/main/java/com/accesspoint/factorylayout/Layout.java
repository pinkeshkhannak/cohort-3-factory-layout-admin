package com.accesspoint.factorylayout;

import jakarta.persistence.*;

//NonNull is provided by default by package-info


import java.util.List;
//
//@Data
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

    //    /*
    //    Relationships
    //     */
    @OneToMany()
    public List<Cell> cells;

    private String name;


    @Enumerated(EnumType.STRING)
    public Direction direction;




    /*
    How to convert rows and columns to an array of arrays
     */
//    public Cell[][] getGrid() {
//        Cell[][] grid = new Cell[9][9];
//
//        for (Cell cell: this.cells) {
//            grid[cell.getColumn_index()][cell.getRow_index()] = cell;
//        }
//
//        return grid;
//    }

    public void setLayoutId(Long layoutId) {
        this.layout_id = layoutId;
    }

}

