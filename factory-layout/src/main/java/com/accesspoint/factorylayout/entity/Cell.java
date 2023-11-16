package com.accesspoint.factorylayout.entity;

import jakarta.persistence.*;

//NonNull is provided by default by package-info


//
@Entity
 @Table(name = "cell")
public class Cell {
    /*
    Field Properties
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cell_id")
    private Long cell_id;

    //    /*
    //    Relationships
    //     */
    @ManyToOne()
    @JoinColumn(name="layout_id")
    private Layout layout;


    private Integer column_index;

    private Integer  row_index;

    @Enumerated(EnumType.STRING)
    private CellState cell_state;



    //------------------------------------


    public Cell() {
    }

    public Cell(Integer column_index, Integer row_index, CellState cell_state, Layout layout) {
        this.column_index = column_index;
        this.row_index = row_index;
        this.cell_state = cell_state;
        this.layout = layout;
    }

    public Long getCell_id() {
        return cell_id;
    }

    public void setCell_id(Long cell_id) {
        this.cell_id = cell_id;
    }

    public Layout getLayout() {
        return layout;
    }

    public void setLayout(Layout layout) {
        this.layout = layout;
    }

    public Integer getColumn_index() {
        return column_index;
    }

    public void setColumn_index(Integer column_index) {
        this.column_index = column_index;
    }

    public Integer getRow_index() {
        return row_index;
    }

    public CellState getCell_state() {
        return cell_state;
    }

    @Override
    public String toString() {
        return "Cell{" +
                "cell_id=" + cell_id +
                ", layout=" + layout +
                ", column_index=" + column_index +
                ", row_index=" + row_index +
                ", cell_state=" + cell_state +
                '}';
    }
}