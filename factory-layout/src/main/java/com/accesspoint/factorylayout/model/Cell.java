package com.accesspoint.factorylayout.model;

import com.accesspoint.factorylayout.entity.CellState;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public class Cell {
    @JsonProperty("cell_id")
    private Long id;

    @JsonProperty("column_index")
    private Integer columnIndex;

    @JsonProperty("row_index")
    private Integer  rowIndex;

    @JsonProperty("cell_state")
    private CellState cellState;
}
