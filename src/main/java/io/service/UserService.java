package io.service;

import io.domain.User;
import io.repository.UserRepository;
import io.web.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Konrad Skorupski on 2017-01-14.
 */
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public User login(UserDto dto) {
        User foundUser = userRepository.findByLogin(dto.getLogin());
        if(foundUser == null)
            return null;
        if(!dto.getPassword().equals(foundUser.getPassword()))
            return null;
        return foundUser;
    }
}
