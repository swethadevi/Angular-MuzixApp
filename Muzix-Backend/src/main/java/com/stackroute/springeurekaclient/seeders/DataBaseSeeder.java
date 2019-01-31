package com.stackroute.springeurekaclient.seeders;


import com.stackroute.springeurekaclient.domain.Track;
import com.stackroute.springeurekaclient.repository.TrackRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Configuration
@PropertySource("classpath:application.properties")

@Component
public class DataBaseSeeder implements ApplicationListener<ContextRefreshedEvent> {
    private static final Logger logger = LoggerFactory.getLogger(DataBaseSeeder.class);
    private TrackRepository userRepository;
    @Value("${trackone}")
    private String firstTrack;
    @Value("${trackonename}")
    private String firstTrackName;
    @Value("${trackonecomment}")
    private String firstTrackComment;

    @Autowired
    private Environment env;

    //    @Bean
//    public IApplicationBeanService getService(){
//        return new ApplicationBeansService(env);
//    }
    @Value("${tracktwo}")
    private String secondTrack;
    //
//    private String secondTrackName;
//    private String secondTrackComment;
    @Autowired
    public DataBaseSeeder(TrackRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        logger.info("Entering Data On Start via refreshed");

        Track track1 = new Track();
        track1.setName(firstTrackName);
        track1.setComment(firstTrackComment);
        track1.setId(firstTrack);
        userRepository.save(track1);


        Track track2 = new Track();
        track2.setName(env.getProperty("tracktwoname"));
        track2.setComment(env.getProperty("tracktwocomment"));

        track2.setId(secondTrack);


        userRepository.save(track2);

        logger.info("Initial data entered");
    }
}
