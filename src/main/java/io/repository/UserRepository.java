package io.repository;

import io.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Konrad Skorupski on 2017-01-14.
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByLogin(String login);
}
