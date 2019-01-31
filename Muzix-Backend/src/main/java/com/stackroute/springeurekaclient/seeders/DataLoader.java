package com.stackroute.springeurekaclient.seeders;

import com.stackroute.springeurekaclient.domain.Track;
import com.stackroute.springeurekaclient.repository.TrackRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Configuration
@PropertySource("classpath:data.properties")

@Component
public class DataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(DataLoader.class);

    private TrackRepository userRepository;

    @Value("${trackthree}")
    private String thirdTrack;
    @Value("${trackthreename}")
    private String thirdTrackName;
    @Value("${trackthreecomment}")
    private String thirdTrackComment;

    @Autowired
    public DataLoader(TrackRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Loading data via CLR");


        Track user = new Track();
        user.setId(thirdTrack);
        user.setName(thirdTrackName);
        user.setComment(thirdTrackComment);
        userRepository.save(user);


    }
}
