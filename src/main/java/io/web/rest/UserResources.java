package io.web.rest;

import io.domain.User;
import io.repository.UserRepository;
import io.service.UserService;
import io.web.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Konrad Skorupski on 2017-01-14.
 */
@RestController
@RequestMapping("/api/users")
public class UserResources {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<User> getUser(@PathVariable("id") Long id) {
        User user;

        if((user = userRepository.findOne(id)) != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<User> login(@RequestBody UserDto dto) {
        User user = userService.login(dto);

        if(user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
