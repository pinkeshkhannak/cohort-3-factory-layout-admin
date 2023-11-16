package com.accesspoint.factorylayout.request;

import com.accesspoint.factorylayout.entity.CellState;
import com.accesspoint.factorylayout.entity.Direction;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;


import java.util.Arrays;

public class CreateLayoutRequest {
    private String name;

    @Enumerated(EnumType.STRING)
    public Direction direction;

    int[][] arrays;

    public CreateLayoutRequest(String name, Direction direction, int[][] arrays) {
        this.name = name;
        this.direction = direction;
        this.arrays = arrays;
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

    public int[][] getArrays() {
        return arrays;
    }

    public void setArrays(int[][] arrays) {
        this.arrays = arrays;
    }


    public CellState intToCellType(int row, int col){
        int current = this.arrays[row][col];
        switch(current) {
            case 0:
                return CellState.OPEN;
            case 1:
                return CellState.WALL;
            case 2:
                return CellState.START;
            case 3:
                return CellState.END;

            default:
                return CellState.OPEN;
        }
    }


    @Override
    public String toString() {


        return "InputClass{" +
                "name='" + name + '\'' +
                ", direction=" + direction +
                ", arrays=" + Arrays.deepToString(arrays) +
                '}';
    }
}
