package com.accesspoint.factorylayout.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.accesspoint.factorylayout.Layout;
import com.accesspoint.factorylayout.repository.LayoutRepository;

import java.util.List;

@Controller
@RequestMapping("/api/layouts")
public class LayoutController{
    @Autowired
    LayoutRepository layoutRepository;

    @PostMapping("/save")
    public Layout createLayout(@RequestBody Layout layout) {
        return layoutRepository.save(layout);
    }

    @GetMapping("/{layoutId}")
    public Layout getLayoutById(@PathVariable Long layoutId) {
        return layoutRepository.findById(layoutId).orElse(null);
    }

    @GetMapping("/all")
    public List<Layout> getAllLayouts() {
        return layoutRepository.findAll();
    }

    @PutMapping("/{layoutId}")
    public Layout updateLayout(@PathVariable Long layoutId, @RequestBody Layout updatedLayout) {
        if (layoutRepository.existsById(layoutId)) {
            updatedLayout.setLayoutId(layoutId);
            return layoutRepository.save(updatedLayout);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{layoutId}")
    public void deleteLayout(@PathVariable Long layoutId) {
        layoutRepository.deleteById(layoutId);
    }
}
