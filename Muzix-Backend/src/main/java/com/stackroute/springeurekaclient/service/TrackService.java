package com.stackroute.springeurekaclient.service;

import com.stackroute.springeurekaclient.domain.Track;
import com.stackroute.springeurekaclient.exceptions.NoTracksExists;
import com.stackroute.springeurekaclient.exceptions.SameCommentExists;
import com.stackroute.springeurekaclient.exceptions.TrackAlreadyExists;
import com.stackroute.springeurekaclient.exceptions.TracksNotAvailable;

import java.util.List;

public interface TrackService {

    Track saveTrack(Track track) throws TrackAlreadyExists;

    List<Track> getAllTracks() throws TracksNotAvailable;

    Track updateTrack(String id, String comment) throws SameCommentExists;

    void deleteTrack(String id) throws NoTracksExists;

    Track findTrackById(String id);

}
