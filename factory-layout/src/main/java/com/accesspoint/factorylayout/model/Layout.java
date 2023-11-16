package com.accesspoint.factorylayout.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.time.LocalDateTime;



@Builder
public class Layout {
    @JsonProperty("layout_id")
    public Long id;

    public String name;

    @JsonProperty("creation_date")
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm a")
    public LocalDateTime creationDate;
}
