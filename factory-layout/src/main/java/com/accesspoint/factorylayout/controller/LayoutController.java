package com.accesspoint.factorylayout.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.accesspoint.factorylayout.Layout;
import com.accesspoint.factorylayout.repository.LayoutRepository;

@Controller
@RequestMapping("/api/layouts")
public class LayoutController{
    @Autowired
    LayoutRepository layoutRepository;

    @PostMapping("/save")
    public Layout createLayout(@RequestBody Layout layout) {
        return layoutRepository.save(layout);
    }



}