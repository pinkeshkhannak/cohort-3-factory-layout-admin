package com.accesspoint.factorylayout;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cell")
class Cell {
    /*
    Field Properties
     */
    @ManyToOne
    @JoinColumn(name="layout_id", nullable=false)
    public Long layout_id;
    public Short column_index;
    public Short  row_index;

    @Enumerated(EnumType.STRING)
    public CellState cell_state;

    /*
    Relationships
     */
    public Layout layout;


}