package com.accesspoint.factorylayout.entity;





//NonNull is provided by default by package-info

import com.accesspoint.factorylayout.entity.Cell;
import com.accesspoint.factorylayout.entity.Direction;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

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
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "layout", fetch = FetchType.LAZY, orphanRemoval = true)
    public List<Cell> cells;


    @CreationTimestamp
    @Getter @Setter
    private Timestamp creation_date;


    /*
   Constructor
      */

    public Layout() {}


    public Layout(String name, Direction direction) {
        this.name = name;
        this.direction = direction;
    }

    public Layout(Long layout_id, String name, Direction direction, List<Cell> cells) {
        this.layout_id = layout_id;
        this.name = name;
        this.direction = direction;
        this.cells = cells;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    @Override
    public String toString() {

        StringBuilder result = new StringBuilder();

        result.append("Layout{")
                .append("layout_id=").append(layout_id)
                .append(", name='").append(name).append('\'')
                .append(", direction=").append(direction)
                .append(", creation_date=").append(creation_date)
                .append(", cells=[");

        Cell[][] grid = getGrid();

        for (int row = 0; row < 9; row++) {
            result.append("[");
            for (int col = 0; col < 9; col++) {
                Cell cell = grid[col][row];
                result.append(cell.getCell_state().ordinal());
                if (col < 8) {
                    result.append(", ");
                }
            }
            result.append("]");
            if (row < 8) {
                result.append(", ");
            }
        }

        result.append("]}");

        return result.toString();
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

