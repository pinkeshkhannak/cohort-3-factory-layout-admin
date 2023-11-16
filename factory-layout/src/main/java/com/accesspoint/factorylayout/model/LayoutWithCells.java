package com.accesspoint.factorylayout.model;

import com.accesspoint.factorylayout.entity.CellState;

import java.time.LocalDateTime;
import java.time.LocalTime;

public class LayoutWithCells extends Layout {
    public CellState[][] cells;

    public LayoutWithCells(Long id, String name, LocalDateTime creationDate, CellState[][] cells) {
        super(id, name, creationDate);

        this.cells = cells;
    }
}
