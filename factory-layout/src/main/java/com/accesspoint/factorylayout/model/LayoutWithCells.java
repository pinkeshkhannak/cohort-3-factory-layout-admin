package com.accesspoint.factorylayout.model;

import com.accesspoint.factorylayout.entity.CellState;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class LayoutWithCells extends Layout {
    public int[][] cells;

    public LayoutWithCells(Long id, String name, LocalDateTime creationDate, int[][] cells) {
        super(id, name, creationDate);

        this.cells = cells;
    }
}
