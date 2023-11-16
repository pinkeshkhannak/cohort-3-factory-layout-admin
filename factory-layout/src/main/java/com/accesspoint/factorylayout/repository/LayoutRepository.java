package com.accesspoint.factorylayout.repository;

import com.accesspoint.factorylayout.entity.Layout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface LayoutRepository extends JpaRepository<Layout, Long> {

}

