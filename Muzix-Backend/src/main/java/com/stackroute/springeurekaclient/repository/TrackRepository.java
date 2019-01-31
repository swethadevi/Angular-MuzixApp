package com.stackroute.springeurekaclient.repository;

import com.stackroute.springeurekaclient.domain.Track;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TrackRepository extends MongoRepository<Track, Integer> {

    Track save(Track track);

    void deleteById(String id);

    List<Track> findAll();

    Track findById(String id);

    boolean existsByName(String name);
}
