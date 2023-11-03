package com.accesspoint.factorylayout;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;

//NonNull is provided by default by package-info


//
//@Entity
@Table(name = "cell")
public class Cell {
    /*
    Field Properties
     */
    @ManyToOne
    @JoinColumn(name="layout_id", nullable=false)
    @Id
    private Long layout_id;

    private Short column_index;

    private Short  row_index;

    @Enumerated(EnumType.STRING)
    private CellState cell_state;

    /*
    Relationships
     */
    private Layout layout;

    public Short getColumn_index() {
        return column_index;
    }

    public Short getRow_index() {
        return row_index;
    }
}