package com.accesspoint.factorylayout.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.sql.Timestamp;

@Builder
public class Layout {
    @JsonProperty("layout_id")
    public Long id;

    public String name;

    @JsonProperty("creation_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm a z", timezone = "UTC")
    public Timestamp creationDate;
}
