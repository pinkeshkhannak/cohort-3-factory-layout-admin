package com.accesspoint.factorylayout;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "cell")
class Cell {
    /*
    Field Properties
     */
    public Long layout_id;
    public Short column_index;
    public Short  row_index;
    public CellState cell_state;

    /*
    Relationships
     */
    public Layout layout;


}