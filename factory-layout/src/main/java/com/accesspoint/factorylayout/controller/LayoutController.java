package com.accesspoint.factorylayout.controller;

import com.accesspoint.factorylayout.Cell;
import com.accesspoint.factorylayout.Direction;
import com.accesspoint.factorylayout.InputClass;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.accesspoint.factorylayout.Layout;
import com.accesspoint.factorylayout.repository.LayoutRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Controller
@RequestMapping("/api/layouts")





public class LayoutController{





    @Autowired
    LayoutRepository layoutRepository;

    @PostMapping("/save")
    public Layout createLayout(@RequestBody InputClass inputClass) {


        List<Cell> tempCells = new ArrayList<Cell>();

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                tempCells.add(new Cell(j,i, inputClass.intToCellType(i,j)));
            }
        }
        System.out.print(layoutRepository.count());

        return layoutRepository.save(new Layout(inputClass.getName(), inputClass.getDirection(), tempCells ));
    }









//
//    @GetMapping("/{layoutId}")
//    public Layout getLayoutById(@PathVariable Long layoutId) {
//        return layoutRepository.findById(layoutId).orElse(null);
//    }
//
//    @GetMapping("/all")
//    public List<Layout> getAllLayouts() {
//        return layoutRepository.findAll();
//    }
//
//    @PutMapping("/{layoutId}")
//    public Layout updateLayout(@PathVariable Long layoutId, @RequestBody Layout updatedLayout) {
//        if (layoutRepository.existsById(layoutId)) {
//            updatedLayout.setLayout_id(layoutId);
//            return layoutRepository.save(updatedLayout);
//        } else {
//            return null;
//        }
//    }
//
//    @DeleteMapping("/{layoutId}")
//    public void deleteLayout(@PathVariable Long layoutId) {
//        layoutRepository.deleteById(layoutId);
//    }
}
