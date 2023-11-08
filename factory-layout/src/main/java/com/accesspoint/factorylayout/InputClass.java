package com.accesspoint.factorylayout;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;


import jakarta.persistence.*;

import java.util.Arrays;

public class InputClass {
    private String name;

    @Enumerated(EnumType.STRING)
    public Direction direction;

    int[][] arrays;

    public InputClass(String name, Direction direction, int[][] arrays) {
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
                return CellState.Open;

            case 1:
                return CellState.Wall;
            case 2:
                return CellState.Start;
            case 3:
                return CellState.End;

            default:
                return CellState.Open;
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
