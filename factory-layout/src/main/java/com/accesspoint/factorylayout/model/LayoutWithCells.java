package com.accesspoint.factorylayout.model;

import com.accesspoint.factorylayout.entity.CellState;

import java.sql.Timestamp;

public class LayoutWithCells extends Layout {
    public int[][] cells;

    public LayoutWithCells(Long id, String name, Timestamp creationDate, int[][] cells) {
        super(id, name, creationDate);

        this.cells = cells;
    }
}
